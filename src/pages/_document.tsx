import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en" className="light">
      <Head />
      <body className='bg-gray-100 dark:bg-gray-600'>
        <Main />
        <NextScript />
        <Script
          src="/flowbite.min.js"
          strategy="beforeInteractive"
        />
         <Script id='darkModeToggle' src="/darkmode.js"
          strategy="beforeInteractive" />
      </body>
    </Html>
  )
}
