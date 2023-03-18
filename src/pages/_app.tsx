import type { AppProps } from 'next/app'
import "@/styles/global.css";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Header />

      <Component {...pageProps} />

      <Footer />

    </>
  )
}
