import { useMatches } from 'react-router';
// import type { Handle } from 'react-router';

import { breadcrumbs, crumb as StCrumb } from './breadcrumbs.css';

interface RouteHandle {
  crumb: (data: unknown) => React.ReactNode;
}

function Breadcrumbs() {
  const matches = useMatches();
  const crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) =>
      Boolean((match.handle as RouteHandle | undefined)?.crumb),
    )
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match) => (match.handle as RouteHandle).crumb(match.data));

  return (
    <div className="container mx-auto px-4">
      <ol className={breadcrumbs}>
        {crumbs.map((crumb, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className={StCrumb} key={index}>
            {crumb}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Breadcrumbs;
