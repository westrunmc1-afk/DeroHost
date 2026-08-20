# DeroHost

A production-ready Minecraft hosting platform built as a monorepo. Features a Next.js 15 admin panel, Express/Prisma API with WebSocket support, a Node.js agent for game server management, Docker deployment, and an automated installer.

## Features

- **Multi-node architecture** — Run the API on one host and game nodes (agents) on others
- **Minecraft server management** — Start/stop/restart/kill, plugin installation, backup management with progress tracking
- **Admin dashboard** — Dark-themed Next.js UI with real-time console via WebSocket
- **Docker-ready** — Docker Compose for single-command deployment
- **Automated installer** — `install.sh` script for fresh Ubuntu/Debian servers
- **Paper/Spigot/Fort/Fabric/Velocity** support via the agent's installer
- **Modrinth integration** — Search and install mods/plugins directly

## Quick Start

### Prerequisites
- [Node.js 20+](https://nodejs.org/)
- [PostgreSQL 16](https://www.postgresql.org/download/)
- [Docker](https://docs.docker.com/get-docker/) (optional, for containerized deployment)

### One-Line Installer (Ubuntu 22.04+/Debian 12+)

```bash
curl -s https://install.derohost.com | sudo bash
```

### Docker Compose (Development)

```bash
git clone https://github.com/yourusername/derohost.git
cd deohost
cp .env.example .env

# Start PostgreSQL
docker compose up -d postgres

# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Start all services
npm run dev:all
```

### Manual Setup (Windows/macOS/Linux)

```bash
git clone https://github.com/derohost/derohost.git
cd deohost
npm install --ignore-scripts
npm run prisma:generate
# Create a PostgreSQL database and set DATABASE_URL in .env
npm run dev:api    # http://localhost:8080
npm run dev:web    # http://localhost:3000
npm run dev:agent  # http://localhost:8081
```

## Project Structure

```
derohost/
├── Dockerfile             # API + agent build image
├── Dockerfile.agent       # Agent-only image
├── docker-compose.yml     # Full stack with postgres, nginx, api, web, agent
├── install.sh             # One-line installer script
├── apps/
│   ├── api/               # Express API + WebSocket server
│   ├── web/               # Next.js 15 admin panel
│   └── agent/             # Node.js game node agent
└── packages/
    ├── db/                # Prisma schema + migrations
    └── types/             # Shared TypeScript types
```

## Environment Variables

See `.env.example` for all required keys.

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_SECRET` | JWT signing secret |
| `SESSION_SECRET` | Session signing secret |
| `APP_URL` | Frontend URL |
| `NODE_API_PORT` | Port for the API server |
| `SERVERS_PATH` | Path where Minecraft worlds are stored |
| `STORAGE_PATH` | Path for uploaded files |
| `BACKUP_PATH` | Path for server backups |

## Development

```bash
# Install all dependencies
npm install --ignore-scripts

# Generate Prisma client (uses schema at packages/db/prisma/schema.prisma)
npm run prisma:generate

# API (port 8080)
npm run dev:api

# Web dashboard (port 3000)
npm run dev:web

# Game node agent (port 8081)
npm run dev:agent

# Run all three concurrently
npm run dev:all
```

### Windows Notes
- Use `npm run prisma:generate` instead of `npx prisma generate` (schema path is in package.json scripts)
- Use `npm run dev:api` instead of `cd apps/api && npm run dev` (workspace scripts work from root)
- **Node.js v26 on Windows**: npm scripts may fail with `Cannot find module` errors. Fix by running:
  ```powershell
  $env:npm_config_script_shell="cmd.exe"
  ```
  before running any `npm run` commands. This sets the script shell for the current session.
- Docker Desktop is required for `docker compose` on Windows

## License

MIT License — see [LICENSE](LICENSE).
