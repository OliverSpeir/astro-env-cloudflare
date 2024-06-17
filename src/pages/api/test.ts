import { TEST, getSecret } from "astro:env/server";
const TEST2 = getSecret("TEST2");

export async function GET() {
  if (TEST) return new Response(TEST, { status: 200 });
  if (TEST2) return new Response(TEST2, { status: 200 });
  return new Response("Neither TEST nor TEST2 exist", { status: 500 });
}
