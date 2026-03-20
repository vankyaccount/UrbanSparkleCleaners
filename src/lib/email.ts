import nodemailer from "nodemailer";

const BUSINESS_EMAIL = "urbansparklecleaners@gmail.com";

function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER || BUSINESS_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

interface BookingEmailData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  propertyType?: string;
  bedrooms?: number;
  bathrooms?: number;
  addons?: string[];
  date?: string;
  address?: string;
  area?: string;
  totalEstimate?: number;
}

export async function sendBookingNotification(data: BookingEmailData) {
  const transporter = createTransporter();
  const addonsList = data.addons?.length ? data.addons.join(", ") : "None";

  // Notify business
  await transporter.sendMail({
    from: `"Urban Sparkle Cleaners" <${process.env.GMAIL_USER || BUSINESS_EMAIL}>`,
    to: BUSINESS_EMAIL,
    subject: `New Booking Request - ${data.serviceType} from ${data.name}`,
    html: `
      <h2>New Booking Request</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${data.name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${data.email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${data.phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Service</td><td style="padding:8px;border:1px solid #ddd">${data.serviceType}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Property Type</td><td style="padding:8px;border:1px solid #ddd">${data.propertyType || "N/A"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Bedrooms</td><td style="padding:8px;border:1px solid #ddd">${data.bedrooms || "N/A"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Bathrooms</td><td style="padding:8px;border:1px solid #ddd">${data.bathrooms || "N/A"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Add-ons</td><td style="padding:8px;border:1px solid #ddd">${addonsList}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Preferred Date</td><td style="padding:8px;border:1px solid #ddd">${data.date || "N/A"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Address</td><td style="padding:8px;border:1px solid #ddd">${data.address || "N/A"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Area</td><td style="padding:8px;border:1px solid #ddd">${data.area || "N/A"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Estimated Total</td><td style="padding:8px;border:1px solid #ddd">$${data.totalEstimate || "TBD"}</td></tr>
      </table>
    `,
  });

  // Confirm to customer
  await transporter.sendMail({
    from: `"Urban Sparkle Cleaners" <${process.env.GMAIL_USER || BUSINESS_EMAIL}>`,
    to: data.email,
    subject: "We received your cleaning request! - Urban Sparkle Cleaners",
    html: `
      <h2>Thank you, ${data.name}!</h2>
      <p>We've received your ${data.serviceType} request and will contact you within 24 hours to confirm the details.</p>
      <p>If you need immediate assistance, please call us at <strong>(647) 460-7008</strong>.</p>
      <br>
      <p>Best regards,<br>Urban Sparkle Cleaners Team</p>
    `,
  });
}

interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
}

export async function sendContactNotification(data: ContactEmailData) {
  const transporter = createTransporter();

  await transporter.sendMail({
    from: `"Urban Sparkle Cleaners" <${process.env.GMAIL_USER || BUSINESS_EMAIL}>`,
    to: BUSINESS_EMAIL,
    replyTo: data.email,
    subject: data.subject ?? `New Contact Form Submission from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  });
}
