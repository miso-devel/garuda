import { fs, path } from "./mod.ts";

const dev = async (url: string) => {
  const walkCondition = fs.walk("routes/", {
    includeDirs: false,
    includeFiles: true,
    exts: ["html"],
  });
  console.log();
  const routes: string[] = [];

  const meta = import.meta.url;
  console.log("meta", meta);

  for await (const entry of walkCondition) {
    routes.push();
    console.log(entry.name);
    console.log(entry.path);
  }
  const joinedPath = path.join(
    path.dirname(path.fromFileUrl(url)),
    "/routes",
    "home.html",
  );
  console.log("joined", joinedPath);
  const decoder = new TextDecoder("utf-8");
  const data = await Deno.readFile(joinedPath);
  console.log("decoded", decoder.decode(data));

  Deno.serve((req) => {
    const pathname = new URL(req.url).pathname;
    console.log(pathname);
    const htmlContent = "<html><body><h1>Hello, world!</h1></body></html>";
    return new Response(htmlContent, {
      headers: { "Content-Type": "text/html" },
    });
  });
};
export default dev;
