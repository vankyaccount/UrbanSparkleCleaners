import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message, source } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Name, email, and phone are required" }, { status: 400 });
    }

    // Check that Gmail credentials are configured
    if (!process.env.GMAIL_APP_PASSWORD) {
      console.error("GMAIL_APP_PASSWORD is not set in .env.local — contact form emails will not be sent.");
      return NextResponse.json(
        { error: "Email service is not configured. Please call us directly at (647) 460-7008." },
        { status: 503 }
      );
    }

    // Store in database if available
    try {
      const { prisma } = await import("@/lib/db");
      await prisma.contactSubmission.create({
        data: { name, email, phone, message: message || "" },
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
        message: `${message || "No message"}\n\nService: ${service || "N/A"}\nSource: ${source || "unknown"}`,
      });
    } catch (emailError) {
      console.error("Failed to send contact notification email:", emailError);
      return NextResponse.json(
        { error: "Failed to send your message. Please try calling us at (647) 460-7008." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
