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
          src="/minimalist/flowbite.min.js"
        />

        <Script id='darkModeToggle' src="/minimalist/darkmode.js"
        />

      </body>
    </Html>
  )
}
