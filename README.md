# Next.js Routing & Rendering Project

A Next.js 14 application demonstrating advanced routing patterns including route groups, parallel routes, and middleware.

## Live Demo

- Production: https://news-app-next-js-2mhe.vercel.app/

## Tech Stack

- **Next.js 14.1.0** - React framework with App Router
- **React 18** - UI library
- **Node.js 20** - Runtime environment
- **Docker** - Containerization

## Features

- App Router architecture
- Route groups: `(content)` and `(marketing)`
- Parallel routes with `@archive` and `@latest`
- Custom middleware for request handling
- API routes
- Modular component structure

## Getting Started

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

### Docker

Build and run with Docker Compose:

```bash
# Build and start containers
npm run docker:dev

# Or manually
docker-compose up --build
```

Access at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run docker:build` - Build Docker image
- `npm run docker:up` - Start Docker container
- `npm run docker:down` - Stop Docker container
- `npm run docker:dev` - Build and start in one command

## Project Structure

```
├── app/
│   ├── (content)/         # Content route group
│   ├── (marketing)/       # Marketing route group
│   ├── api/              # API routes
│   ├── news/             # News pages
│   ├── layout.js         # Root layout
│   └── page.js           # Home page
├── components/           # Reusable components
├── lib/                  # Utility functions
├── public/              # Static assets
└── middleware.js        # Request middleware
```

## Docker Configuration

The project includes:
- **Dockerfile** - Multi-stage build for optimized production image
- **docker-compose.yml** - Container orchestration
- **.dockerignore** - Excludes unnecessary files from build context

## License

This is a learning project.
