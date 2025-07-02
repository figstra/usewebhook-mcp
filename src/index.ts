import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

// Optional: Define configuration schema to require configuration at connection time
export const configSchema = z.object({
  debug: z.boolean().default(false).describe("Enable debug logging"),
});

export default function createStatelessServer({
  config,
}: {
  config: z.infer<typeof configSchema>;
}) {
  const server = new McpServer({
    name: "UseWebhook",
    version: "1.0.0",
  });

  server.tool(
    "generate_webhook",
    "Generate a webhook endpoint that captures incoming HTTP requests",
    async () => {

      const randomId = crypto.randomUUID().replace(/-/g, "");
      const webhookUrl = `https://usewebhook.com/${randomId}`;
      const inspectorUrl = `https://usewebhook.com/?id=${randomId}`;

      return {
        content: [
            { type: "text", description: "Unique URL for inspecting requests sent to the generated webhook (this will not capture requests)", text: inspectorUrl },
            { type: "text", description: "Unique URL for sending requests to the webhook (this is the webhook endpoint that will capture requests)", text: webhookUrl },
        ],
      };
    }
  );

  return server.server;
}
