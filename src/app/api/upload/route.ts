import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("files[0]") as Blob;
  const tag = formData.get("tag") as Blob;
  const newFormData = new FormData()
  newFormData.append("API_KEY", process.env.API_KEY as string);
  newFormData.append("image", file);
  newFormData.append("id",tag);
  const res = await fetch(`${process.env.BASE_URL}/admin/blogImages.php`, {
    method: "POST",
    body: newFormData,
  }).then((res) => res.json());
  return NextResponse.json(res);
}
// export async function POST(req: Request) {
//   const formData = await req.formData();
//   const file = formData.get("files[0]") as Blob;
//
//   if (!file) {
//     return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
//   }
//
//   const buffer = Buffer.from(await file.arrayBuffer());
//   const fileName = `${Date.now()}-file`;
//   const filePath = path.join(process.cwd(), "public/uploads", fileName);
//
//   await fs.writeFile(filePath, buffer);
//
//   return NextResponse.json({
//     success: true,
//     data: {
//       files: [fileName],
//       baseurl: "http://localhost:3000/uploads/",
//       message: "",
//       error: "",
//       path: 'hello',
//     },
//   });
// }
