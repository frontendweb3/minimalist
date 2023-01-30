import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="light">
      <Head />
      <body className='bg-gray-100 dark:bg-gray-600'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
