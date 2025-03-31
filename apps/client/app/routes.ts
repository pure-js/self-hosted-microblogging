// eslint-disable-next-line import/no-extraneous-dependencies
// import { type RouteConfig, index } from '@react-router/dev/routes';
import { type RouteConfig } from '@react-router/dev/routes';
import { flatRoutes } from '@react-router/fs-routes';

export default [
  // index('routes/index.tsx'),
  ...(await flatRoutes()),
] satisfies RouteConfig;
