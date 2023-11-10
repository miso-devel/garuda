import { path } from "../mod.ts";

export const createPath = (baseUrl: string, route: string) => {
  if (route === "/") {
    return path.join(
      path.dirname(path.fromFileUrl(baseUrl)),
      "/routes",
      `/index.html`,
    );
  } else {
    return path.join(
      path.dirname(path.fromFileUrl(baseUrl)),
      "/routes",
      `${route}.html`,
    );
  }
};
