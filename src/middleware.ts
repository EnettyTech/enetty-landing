import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";



export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Root path: serve static file from public/ as usual
  if (pathname === "/app-ads.txt") {
    return NextResponse.next();
  }

  if (!pathname.endsWith("/app-ads.txt")) {
    return NextResponse.next();
  }

  const fileUrl = new URL("/app-ads.txt", request.url);
  const fileResponse = await fetch(fileUrl);

  if (!fileResponse.ok) {
    return NextResponse.next();
  }

  return new NextResponse(await fileResponse.text(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, immutable",
    },
  });
}

export const config = {
  matcher: ["/:path+/app-ads.txt"],
};
