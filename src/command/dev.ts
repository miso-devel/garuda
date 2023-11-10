import { getContent } from "../render/getContent.ts";
import { createPath } from "../router/createPath.ts";

const dev = (url: string) => {
  Deno.serve(async (req) => {
    const pathname = new URL(req.url).pathname;
    const requestPath = createPath(url, pathname);
    const content = await getContent(requestPath);
    return new Response(content, {
      headers: { "Content-Type": "text/html" },
    });
  });
};
export default dev;
