import './globals.css';
import { Sidebar } from '@/components/dashboard/Sidebar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 bg-gray-50 ml-0 p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Dashboard',
  description: 'API Key Management Dashboard',
};
