# Self-hosted Microblogging Frontend Client

The app allows you to browse your news feed, add new posts, edit and delete them. The posts are stored locally in the browser, without using the backend. TLDR: React-based CRUD application

## Tech Stack

- React
- TypeScript
- [React Router](https://reactrouter.com/)
- daisyUI & TailwindCSS
- Dexie.js (indexedDB wrapper)
- Storybook
- [NX](https://nx.dev) (Smart Monorepos · Fast CI)

## Getting Started

### Pre-installation

In addition to [Node.js](https://nodejs.org/en/download/package-manager/all#fnm), you should have [pnpm](https://pnpm.io) installed on your machine.

### Installation

Install the dependencies:

```sh
pnpm install
```

### Development

Start the development server with HMR:

```sh
pnpm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```sh
pnpm run build
```

## Deployment

### Docker Deployment

This template includes a Dockerfile optimized for the pnpm package manager: `Dockerfile.pnpm`

To build and run using Docker:

```sh
# For pnpm
docker build -f apps/client/Dockerfile.pnpm -t app-client .

# Run the container
docker run -p 3000:3000 app-client
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

## NX

| Build system, optimized for monorepos

- Run "pnpm exec nx run-many -t build" to run the build target for every project in the workspace. Run it again to replay the cached computation. https://nx.dev/features/cache-task-results
- Run "pnpm exec nx graph" to see the graph of projects and tasks in your workspace. https://nx.dev/core-features/explore-graph
