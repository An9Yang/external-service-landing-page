import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { setupRoutes } from "./routes";

const app = new Hono();

const presevePaths = ["/static", "/favicon.svg", "/api"];

// Serve static files from the web directory
app.use(
  "*",
  serveStatic({
    root: "./web",
    rewriteRequestPath(path) {
      if (presevePaths.some((p) => path.startsWith(p))) {
        return path;
      }
      return "/index.html";
    },
  }),
);

setupRoutes(app);

// Export for Node.js server
export default app;

// Start server if running directly
if (process.env.NODE_ENV === "production") {
  const port = process.env.PORT || 3000;
  serve({
    fetch: app.fetch,
    port: Number(port),
  });
}
