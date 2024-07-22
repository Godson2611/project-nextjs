import PostModel from "@/models/postModel";
import { connection } from "@/utils/connectDB";

export async function GET(request) {
  try {
    await connection();
    const postData = await PostModel.find({});
    return Response.json(postData);
  } catch (error) {
    return Response.json(error);
  }
}
