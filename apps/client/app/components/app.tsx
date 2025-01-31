import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { GrowthBook, GrowthBookProvider } from '@growthbook/growthbook-react';

import Header from '~/components/header';
import Alert from '~/components/alert';
import Breadcrumbs from '~/components/breadcrumbs';

// Create a GrowthBook instance
const growthbook = new GrowthBook({
  trackingCallback: (experiment, result) => {
    // eslint-disable-next-line no-console
    console.log({
      experimentId: experiment.key,
      variationId: result.variationId,
    });
  },
});

function App() {
  const location = useLocation();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`App version: ${APP_VERSION}`);

    // Load feature definitions from API
    fetch(
      `https://cdn.growthbook.io/api/features/${
        import.meta.env.VITE_GROWTH_BOOK_KEY
      }`,
    )
      .then((res) => res.json())
      .then((json) => {
        growthbook.setFeatures(json.features);
      });

    // TODO: replace with real targeting attributes
    growthbook.setAttributes({
      id: 'foo',
      deviceId: 'foo',
      company: 'foo',
      loggedIn: true,
      employee: true,
      country: 'foo',
      browser: 'foo',
      url: 'foo',
    });
  }, [location]);

  return (
    <GrowthBookProvider growthbook={growthbook}>
      <Header />
      {location.pathname !== '/' && <Breadcrumbs />}
      <Alert message="" />
      <Outlet />
    </GrowthBookProvider>
  );
}

export default App;
