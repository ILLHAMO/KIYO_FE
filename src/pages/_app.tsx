import type { AppProps } from 'next/app';
import NavigationBar from 'app.components/NavigationBar/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'app.styled/customBootstrap.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app-layout">
      <Component {...pageProps} />
      <NavigationBar />
    </div>
  );
}

export default App;
