import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, serviceType, propertyType, bedrooms, bathrooms, addons, date, address, area, totalEstimate } = body;

    if (!name || !email || !phone || !serviceType) {
      return NextResponse.json({ error: "Name, email, phone, and service type are required" }, { status: 400 });
    }

    // Store in database
    try {
      const { prisma } = await import("@/lib/db");
      await prisma.booking.create({
        data: {
          name,
          email,
          phone,
          serviceType,
          propertyType,
          bedrooms: bedrooms ? parseInt(bedrooms) : null,
          bathrooms: bathrooms ? parseInt(bathrooms) : null,
          addons: addons || [],
          date,
          address,
          area,
          totalEstimate: totalEstimate ? parseFloat(totalEstimate) : null,
        },
      });
    } catch {
      console.log("Database not available, skipping DB save");
    }

    // Send email notification
    if (!process.env.GMAIL_APP_PASSWORD) {
      console.error("GMAIL_APP_PASSWORD is not set — booking emails will not be sent.");
    } else {
      try {
        const { sendBookingNotification } = await import("@/lib/email");
        await sendBookingNotification({
          name,
          email,
          phone,
          serviceType,
          propertyType,
          bedrooms: bedrooms ? parseInt(bedrooms) : undefined,
          bathrooms: bathrooms ? parseInt(bathrooms) : undefined,
          addons,
          date,
          address,
          area,
          totalEstimate: totalEstimate ? parseFloat(totalEstimate) : undefined,
        });
      } catch (emailError) {
        console.error("Failed to send booking notification email:", emailError);
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
