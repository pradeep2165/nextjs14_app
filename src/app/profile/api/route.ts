import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headersList = headers();
  cookies().set("resultsPerPage", 20);
  const theme = request.cookies.get("theme");
  console.log(headersList.get("Authorization"));
  console.log(requestHeaders.get("Authorization"));
  console.log(theme);
  console.log(cookies().get("resultsPerPage"));
  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
