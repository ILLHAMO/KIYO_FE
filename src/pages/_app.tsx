import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import NavigationBar from 'app.components/NavigationBar/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'app.styled/customBootstrap.scss';
import {
  initializeStore,
  StoreProvider,
  useCreateStore,
} from 'app.store/rootStore';
import { useStoreIntoAPP } from 'app.store/intoAPP/store.intoAPP';
import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      notifyOnChangeProps: 'tracked',
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  const createStore = useCreateStore(pageProps.initialZustandState);
  const { requestAuthUser } = useStoreIntoAPP();

  useEffect(() => {
    requestAuthUser();
  }, []);

  return (
    <div className="app-layout">
      <StoreProvider createStore={createStore}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
            <NavigationBar />
          </Hydrate>
        </QueryClientProvider>
      </StoreProvider>
    </div>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  /* server side rendering */
  const zustandStore = initializeStore();

  return {
    pageProps: {
      initialZustandState: zustandStore.getState(),
      dehydratedState: dehydrate(queryClient),
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
};

export default App;
