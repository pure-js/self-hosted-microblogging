# Self-hosted Microblogging Frontend Client

The app allows you to browse your news feed, add new posts, edit and delete them. The posts are stored locally in the browser, without using the backend. TLDR: React CRUD

## Tech Stack

- React
- TypeScript
- [React Router](https://reactrouter.com/)
- daisyUI & TailwindCSS
- Dexie.js (indexedDB wrapper)
- Storybook

## Getting Started

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
docker build -f Dockerfile.pnpm -t my-app .

# Run the container
docker run -p 3000:3000 my-app
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
