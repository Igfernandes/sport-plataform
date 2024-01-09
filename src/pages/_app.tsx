import { AppProps } from 'next/app';
import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavigationProvider from '@contexts/Navigation';
import Footer from '@components/shared/globals/Footer';
import NewsProvider from '@contexts/News';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationProvider>
        <NewsProvider>
          <Component {...pageProps} />
          <Footer />
        </NewsProvider>
      </NavigationProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
