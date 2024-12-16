import { Suspense } from 'react';

import { getPlanets } from './actions/get-planets.action';
import Planets from './pages/Planets';
import { ErrorBoundary } from './shared/ErrorBoundary';

function App() {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Planetas del Sistema Solar</h1>

      <ErrorBoundary
        fallback={<span className='text-red-500'>Error loading planets</span>}
      >
        <Suspense fallback={<span className='animate-pulse'>Loading...</span>}>
          <Planets getPlanets={getPlanets()} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
