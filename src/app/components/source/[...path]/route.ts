import { listComponentFiles, readComponentSource } from "@/lib/component-registry";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return listComponentFiles().map((file) => ({ path: file.split("/") }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  const file = path.join("/");
  const source = readComponentSource(file);

  if (source === null) {
    return new Response("Not found", { status: 404 });
  }

  const filename = path[path.length - 1];
  return new Response(source, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
