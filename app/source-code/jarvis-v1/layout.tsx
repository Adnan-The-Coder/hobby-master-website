import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JARVIS - Your Personal AI Assistant',
  description: 'JARVIS is an advanced AI assistant designed to help you with tasks, answer questions, and make your digital life easier.',
  keywords: 'AI assistant, JARVIS, artificial intelligence, personal assistant, virtual assistant',
  authors: [{ name: 'JARVIS Team' }],
  creator: 'JARVIS Team',
  publisher: 'JARVIS',
  openGraph: {
    title: 'JARVIS - Your Personal AI Assistant',
    description: 'JARVIS is an advanced AI assistant designed to help you with tasks, answer questions, and make your digital life easier.',
    url: 'https://www.hobbymaster.xyz/source-code/jarvis-v1',
    siteName: 'JARVIS AI',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1677442135136-760c813a743d?q=80&w=1932&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'JARVIS AI Assistant',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JARVIS - Your Personal AI Assistant',
    description: 'JARVIS is an advanced AI assistant designed to help you with tasks, answer questions, and make your digital life easier.',
    images: ['https://images.unsplash.com/photo-1677442135136-760c813a743d?q=80&w=1932&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured data for better SEO - using Next.js Script component */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "JARVIS AI Assistant",
              "applicationCategory": "Artificial Intelligence",
              "description": "JARVIS is an advanced AI assistant designed to help you with tasks, answer questions, and make your digital life easier.",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "screenshot": "https://images.unsplash.com/photo-1677442135136-760c813a743d?q=80&w=1932&auto=format&fit=crop",
              "author": {
                "@type": "Organization",
                "name": "JARVIS Team"
              }
            }
          `}
        </Script>
        
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://checkout.razorpay.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" as="image" href="https://images.unsplash.com/photo-1677442135136-760c813a743d?q=80&w=1932&auto=format&fit=crop" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
          {children}
          <Analytics />
          <SpeedInsights />
        </div>
        
        {/* Cookie consent banner */}
        <div id="cookie-consent" className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex justify-between items-center z-50">
          <p className="text-sm text-gray-300">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </p>
          <button 
            id="cookie-consent-button"
            className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition-colors"
          >
            Accept
          </button>
        </div>
        
        {/* Script to check and show cookie consent */}
        <Script id="cookie-consent-script" strategy="afterInteractive">
          {`
            if (!localStorage.getItem('cookie-consent')) {
              document.getElementById('cookie-consent')?.classList.remove('hidden');
            }
            
            document.getElementById('cookie-consent-button')?.addEventListener('click', function() {
              document.getElementById('cookie-consent')?.classList.add('hidden');
              localStorage.setItem('cookie-consent', 'true');
            });
          `}
        </Script>
      </body>
    </html>
  );
}