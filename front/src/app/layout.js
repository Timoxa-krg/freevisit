import Header from '@/components/Header';
import '../styles/globals.css';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <div className="flex flex-col min-h-screen">
            <Header />
                <main className="container mx-auto flex-grow py-8">
                    {children}
                </main>
            <Footer />
        </div>
      </body>
    </html>
  );
}
