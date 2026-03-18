import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, position, availability, experience, message } = body;

    if (!name || !email || !phone || !position || !availability || !experience) {
      return NextResponse.json(
        { error: "Name, email, phone, position, availability, and experience are required" },
        { status: 400 }
      );
    }

    // Check that email credentials are configured
    if (!process.env.GMAIL_APP_PASSWORD) {
      console.error("GMAIL_APP_PASSWORD is not set in .env.local — career application emails will not be sent.");
      return NextResponse.json(
        { error: "Email service is not configured. Please call us directly at (647) 460-7008." },
        { status: 503 }
      );
    }

    // Store in database if available
    try {
      const { prisma } = await import("@/lib/db");
      await prisma.careerSubmission.create({
        data: {
          name,
          email,
          phone,
          position,
          availability,
          experience,
          message: message || "",
        },
      });
    } catch {
      // DB might not be available in dev, continue with email
      console.log("Database not available, skipping DB save");
    }

    // Send email notification
    try {
      const { sendContactNotification } = await import("@/lib/email");
      await sendContactNotification({
        name,
        email,
        phone,
        message: `CAREER APPLICATION

Position Applied: ${position}
Availability: ${availability}
Experience Level: ${experience}

Message:
${message || "No additional message provided"}`,
        subject: `New Career Application: ${position} - ${name}`,
      });
    } catch (emailError) {
      console.error("Failed to send career application email:", emailError);
      return NextResponse.json(
        { error: "Failed to submit your application. Please try emailing us at urbansparklecleaners@gmail.com" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
