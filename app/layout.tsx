export default function RootLayout({ children }) {
  return (
    <html lang='ja'>
      <head>
        <title>Try Next v13</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body>{children}</body>
    </html>
  )
}
