

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
       <header>Header</header>
        {children}
      <footer>Footer</footer>
      </body>
    </html>
  );
}
