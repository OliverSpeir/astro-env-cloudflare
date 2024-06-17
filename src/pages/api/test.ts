import { getSecret } from "astro:env/server";
const TEST = getSecret("TEST");

export async function GET() {
  if (TEST) return new Response(TEST);
  return new Response(null, { status: 500 });
}
