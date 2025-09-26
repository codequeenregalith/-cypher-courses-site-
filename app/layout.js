import './globals.css'; // This is needed for Tailwind CSS to work

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
