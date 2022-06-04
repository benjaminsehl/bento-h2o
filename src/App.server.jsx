import renderHydrogen from '@shopify/hydrogen/entry-server';
import { Router, FileRoutes, ShopifyProvider } from '@shopify/hydrogen';
import { Suspense } from 'react';

function App({ routes }) {
  return (
    <Suspense fallback={null}>
      <Router>
        <FileRoutes routes={routes} />
      </Router>
    </Suspense>
  );
}

export default renderHydrogen(App);
