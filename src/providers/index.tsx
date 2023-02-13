import { ReactNode, Suspense } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Loader } from '@/components/ui/loader';
import { persistor, store } from '../store';
import 'react-toastify/dist/ReactToastify.css';

const ErrorFallback = () => {
  return (
    <div className="">
      <h2 className="">Something went wrong..... </h2>
      <button className="" onClick={() => window.location.assign(window.location.origin)}>
        Reload page
      </button>
    </div>
  );
};

interface MainProviderProps {
  children: ReactNode;
}

export const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <Suspense fallback={<Loader className="mb-20" />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Router>{children}</Router>
              <ToastContainer />
            </PersistGate>
          </Provider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
