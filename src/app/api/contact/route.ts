import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

type ResponseData = {
  message: string;
  success: boolean;
};

type ContactFormData = {
  fullName: string;
  email: string;
  message: string;
};

export async function POST(request: NextRequest) {
  // Only allow POST requests (GET etc. will 405 by default if not exported)
  try {
    const body = (await request.json()) as ContactFormData;
    const { fullName, email, message } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json<ResponseData>(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json<ResponseData>(
        {
          success: false,
          message: "Invalid email format",
        },
        { status: 400 }
      );
    }

    // Create contacts directory if it doesn't exist
    const contactsDir = path.join(process.cwd(), "contacts");
    if (!fs.existsSync(contactsDir)) {
      fs.mkdirSync(contactsDir, { recursive: true });
    }

    // Generate filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `contact_${timestamp}.txt`;
    const filePath = path.join(contactsDir, filename);

    // Format content for the text file
    const content = `
===========================================
CONTACT FORM SUBMISSION
===========================================

Date & Time: ${new Date().toLocaleString("en-US", {
      timeZone: "Asia/Ho_Chi_Minh",
      dateStyle: "full",
      timeStyle: "long",
    })}

-------------------------------------------
CONTACT INFORMATION
-------------------------------------------

Full Name: ${fullName}
Email: ${email}

-------------------------------------------
MESSAGE
-------------------------------------------

${message}

===========================================
End of Submission
===========================================
`;

    // Write to file
    fs.writeFileSync(filePath, content.trim(), "utf-8");

    console.log(`Contact form saved to: ${filePath}`);

    return NextResponse.json<ResponseData>({
      success: true,
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    console.error("Error saving contact form:", error);
    return NextResponse.json<ResponseData>(
      {
        success: false,
        message: "Failed to save contact form. Please try again later.",
      },
      { status: 500 }
    );
  }
}
