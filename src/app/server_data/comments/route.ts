import { comments } from "./data";
export async function GET() {
  return Response.json(comments);
}
//localhost:3000/server_data/comments
