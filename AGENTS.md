# AGENTS.md

## Build & Development

### Install Dependencies
```bash
npm install
```

### Prisma Client Generation
The Prisma schema lives at `packages/db/prisma/schema.prisma`. After install:
```bash
npm run prisma:generate
```

### TypeScript Compilation
Always check before completing a task:
```bash
npm run typecheck
```

### Development
```bash
npm run dev:api     # API server on port 8080
npm run dev:web    # Web dashboard on port 3000
npm run dev:agent  # Game node agent on port 8081
npm run dev:all    # Start all three concurrently
```

## Project Structure
```
derohost/
├── apps/
│   ├── api/        # Express API + Socket.IO server
│   ├── web/        # Next.js 15 admin panel
│   └── agent/      # Node.js game node agent
├── packages/
│   ├── db/         # Prisma schema (packages/db/prisma/schema.prisma)
│   └── types/      # Shared TypeScript types
├── Dockerfile      # Multi-stage build for API
├── Dockerfile.agent
├── apps/web/Dockerfile
├── docker-compose.yml
├── install.sh      # One-line installer for Ubuntu/Debian
├── .npmrc         # ignore-scripts + Windows shell config
├── .github/workflows/ci.yml    # CI: typecheck, build, lint
├── .github/workflows/deploy.yml # Deploy to production server
├── nginx.conf      # Nginx reverse proxy config
├── README.md
└── LICENSE
```

## Code Conventions
- TypeScript strict mode
- No semicolons (API, agent); semicolons (web)
- JWT auth via `Authorization: Bearer <token>`
- Socket.IO events: `consoleOutput`, `serverStatus`, `statsUpdate`
- Routes: `src/routes/<resource>.routes.ts`
- Services: `src/services/<resource>.service.ts`

## Docker
```bash
docker compose up -d       # all services
docker compose up -d web   # web only
docker compose up -d agent # agent only
```
