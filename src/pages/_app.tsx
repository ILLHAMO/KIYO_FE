import type { AppProps } from 'next/app';
import NavigationBar from 'app.components/NavigationBar/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'app.styled/customBootstrap.scss';
import {
  initializeStore,
  StoreProvider,
  useCreateStore,
} from 'app.store/rootStore';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';

function App({ Component, pageProps }: AppProps) {
  const createStore = useCreateStore(pageProps.initialZustandState);
  const getUser = useGetUser();
  console.log(getUser);

  return (
    <div className="app-layout">
      <StoreProvider createStore={createStore}>
        <Component {...pageProps} />
        <NavigationBar />
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
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
};

export default App;
