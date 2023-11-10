export const getContent = async (reqPath: string) => {
  const decoder = new TextDecoder("utf-8");
  const data = await Deno.readFile(reqPath);
  return decoder.decode(data);
};
