# usewebhook-mcp

**Model Context Protocol (MCP) server for generating and inspecting webhooks**

## ✨ Features

- ⚡ Generate webhook endpoints for testing
- 🔍 Inspect and diff HTTP request payloads
- 🔁 Replay requests from history
- 🔀 Forward requests to your `localhost`
- ⚡️ Powered by [UseWebhook](https://usewebhook.com)

## 📦 Installation

### Via Smithery

Install usewebhook-mcp for Claude Desktop via [Smithery](https://smithery.ai/server/@figstra/usewebhook-mcp):

```bash
npx -y @smithery/cli install @figstra/usewebhook-mcp --client claude
```

### Manual installation

1. Clone the repository:

```bash
git clone https://github.com/figstra/usewebhook-mcp.git
```

2. Install dependencies:

```bash
cd usewebhook-mcp
npm install
```

3. Build the project:

```bash
npm run build
```

4. Configure the server in your Claude MCP settings file:

```json
{
   "mcpServers": {
    "usewebhook-mcp": {
      "command": "node",
      "args": ["path/to/your/usewebhook-mcp/build/index.js"],
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

## Development

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
