"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional(),
});

const envSchema = z.object({
  SMTP_HOST: z.string().min(1, "SMTP_HOST is required"),
  SMTP_PORT: z.string().regex(/^\d+$/, "SMTP_PORT must be a number"),
  SMTP_USER: z.string().email("SMTP_USER must be a valid email"),
  SMTP_PASS: z.string().min(1, "SMTP_PASS is required"),
  SMTP_FROM: z.string().email("SMTP_FROM must be a valid email"),
  BUSINESS_EMAIL: z.string().email("BUSINESS_EMAIL must be a valid email"),
});

export type ContactFormState = {
  success?: boolean;
  error?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

function validateEnvironment() {
  const env = {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    SMTP_FROM: process.env.SMTP_FROM,
    BUSINESS_EMAIL: process.env.BUSINESS_EMAIL,
  };

  const result = envSchema.safeParse(env);
  if (!result.success) {
    const errors = result.error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`).join(', ');
    throw new Error(`Environment configuration error: ${errors}`);
  }
  return result.data;
}

async function createTransporter(retryAttempt = 0): Promise<nodemailer.Transporter> {
  const env = validateEnvironment();

  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: parseInt(env.SMTP_PORT),
    secure: true,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.verify();
    console.log('SMTP connection verified successfully');
    return transporter;
  } catch (error) {
    console.error(`SMTP verification failed (attempt ${retryAttempt + 1}):`, error);

    if (retryAttempt < 2) {
      console.log(`Retrying SMTP connection in ${(retryAttempt + 1) * 1000}ms...`);
      await new Promise(resolve => setTimeout(resolve, (retryAttempt + 1) * 1000));
      return createTransporter(retryAttempt + 1);
    }

    throw new Error('SMTP configuration failed after 3 attempts. Please check your email settings.');
  }
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    // Validate environment variables first
    const env = validateEnvironment();

    // Parse and validate form data
    const validatedFields = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      honeypot: formData.get("honeypot"),
    });

    // Return validation errors
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { name, email, message, honeypot } = validatedFields.data;

    // Honeypot spam protection
    if (honeypot) {
      return {
        error: "Spam detected. Please try again.",
      };
    }

    // Create and verify transporter with retry logic
    const transporter = await createTransporter();

    // Email to business
    const businessEmailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f59e0b; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: white; padding: 15px; border-left: 4px solid #f59e0b; margin-top: 10px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
        <p style="color: #666; font-size: 12px;">
          Submitted: ${new Date().toLocaleString()}
        </p>
      </div>
    `;

    // Customer confirmation email
    const customerEmailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f59e0b; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
          Thank You for Contacting The Grand Cobbler
        </h2>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to us! We have received your message and will get back to you within 24 hours.</p>

        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Your Message:</h3>
          <div style="background-color: white; padding: 15px; border-left: 4px solid #f59e0b;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>

        <p>We appreciate your interest in our luxury aftercare services for shoes, bags, and leather goods.</p>

        <div style="background-color: #f59e0b; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin: 0 0 10px 0;">Contact Information</h3>
          <p style="margin: 5px 0;">Email: ${env.BUSINESS_EMAIL}</p>
          <p style="margin: 5px 0;">Website: thegrandcobbler.com</p>
        </div>

        <p style="color: #666;">
          Best regards,<br>
          The Grand Cobbler Team
        </p>
      </div>
    `;

    // Send email to business with retry logic
    try {
      await transporter.sendMail({
        from: env.SMTP_FROM,
        to: env.BUSINESS_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        html: businessEmailTemplate,
        replyTo: email,
      });
      console.log('Business notification email sent successfully');
    } catch (error) {
      console.error('Failed to send business notification:', error);
      throw new Error('Failed to send business notification email');
    }

    // Send confirmation to customer with retry logic
    try {
      await transporter.sendMail({
        from: env.SMTP_FROM,
        to: email,
        subject: "Thank you for contacting The Grand Cobbler",
        html: customerEmailTemplate,
      });
      console.log('Customer confirmation email sent successfully');
    } catch (error) {
      console.error('Failed to send customer confirmation:', error);
      // Don't fail the whole operation if customer email fails
      console.warn('Business notification sent but customer confirmation failed');
    }

    return {
      success: true,
    };
  } catch (error: unknown) {
    console.error("Contact form error:", error);

    // Always return a generic user-friendly message
    // Log specific details for debugging but don't expose them to users
    return {
      error: "We're having trouble sending your message right now. Please try again in a few minutes or contact us directly.",
    };
  }
}
