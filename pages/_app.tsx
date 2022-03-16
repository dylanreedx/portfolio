import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useForm, FormProvider } from 'react-hook-form';

function MyApp({ Component, pageProps }: AppProps) {
  const methods = useForm();
  return <Component {...pageProps} />;
}

export default MyApp;
