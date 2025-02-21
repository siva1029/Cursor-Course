import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Dashboard',
  description: 'API Key Management Dashboard',
};
