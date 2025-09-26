import '../globals.css'; // This loads the CSS from the parent (root) folder, which is the fix.

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
