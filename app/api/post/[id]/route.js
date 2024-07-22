import PostModel from "@/models/postModel";
import { connection } from "@/utils/connectDB";

export async function GET(req, { params }) {
  try {
    await connection();
    const postData = await PostModel.findById({ _id: params.id });
    return Response.json(postData);
  } catch (error) {
    return Response.json(error);
  }
}
