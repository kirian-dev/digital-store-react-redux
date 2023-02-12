import * as React from 'react';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import { PersistGate } from 'redux-persist/integration/react';
import { Loader } from '@/components/ui/loader';
import { persistor, store } from '../store';
const ErrorFallback = () => {
  return (
    <div
      className=""
    >
      <h2 className="">Something went wrong..... </h2>
      <button
        className=""
        onClick={() => window.location.assign(window.location.origin)}
      >
        Reload page
      </button>
    </div>
  );
};

interface MainProviderProps {
  children: React.ReactNode;
}

export const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <React.Suspense fallback={<Loader />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <Provider store={store}>
            <ReduxToastr />
            <PersistGate loading={null} persistor={persistor}>
              <Router>{children}</Router>
            </PersistGate>
          </Provider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
