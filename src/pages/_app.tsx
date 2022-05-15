import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from 'app.components/NavigationBar/NavigationBar';

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app-layout">
      <Component {...pageProps} />
      <NavigationBar />
    </div>
  );
}

export default App;
