// import type { Metadata } from "next";
// import { Plus_Jakarta_Sans } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/components/ThemeProvider";
// import { cn } from "@/lib/utils";

// const fontSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight:['300','400','500','600','700'], variable:'--font-sans'});

// export const metadata: Metadata = {
//   title: "Hobby Master - Innovate with Intelligence",
//   description: "Discover hands-on coding, AI integration, and high-quality content with Hobby Master. Explore our featured projects and start learning today!",
//   keywords: "Hobby Master, coding, AI integration, high-quality content, Python, Tkinter, SQL, NEXT.JS, Tailwind CSS, TypeScript, OpenCV, face recognition, time management, airways management",
//   openGraph: {
//     title: "Hobby Master - Innovate with Intelligence",
//     description: "Discover hands-on coding, AI integration, and high-quality content with Hobby Master. Explore our featured projects and start learning today!",
//     url: "https://www.hobbymaster.com",
//     type: "website",
//     images: [
//       {
//         url: "https://www.hobbymaster.xyz/assets/website.jpg",
//         width: 800,
//         height: 600,
//         alt: "Hobby Master"
//       }
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Hobby Master - Innovate with Intelligence",
//     description: "Discover hands-on coding, AI integration, and high-quality content with Hobby Master. Explore our featured projects and start learning today!",
//     images: [
//       {
//         url: "https://www.hobbymaster.xyz/assets/website.jpg",
//         alt: "Hobby Master"
//       }
//     ],
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={cn('min-h-screen bg-dark-300 font-sans antialiased',fontSans.variable)}>
//         <ThemeProvider attribute="class" defaultTheme="dark">
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import './globals.css';
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: "Hobby Master - Innovate with Intelligence",
  description: "Discover hands-on coding, AI integration, and high-quality content with Hobby Master. Explore our featured projects and start learning today!",
  keywords: "Hobby Master, coding, AI integration, high-quality content, Python, Tkinter, SQL, NEXT.JS, Tailwind CSS, TypeScript, OpenCV, face recognition, time management, airways management",
  openGraph: {
    title: "Hobby Master - Innovate with Intelligence",
    description: "Discover hands-on coding, AI integration, and high-quality content with Hobby Master. Explore our featured projects and start learning today!",
    url: "https://www.hobbymaster.com",
    type: "website",
    siteName: "Hobby Master",
    images: [
      {
        url: "https://www.hobbymaster.xyz/assets/website.jpg",
        width: 800,
        height: 600,
        alt: "Hobby Master"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@HobbyMaster24",
    title: "Hobby Master - Innovate with Intelligence",
    description: "Discover hands-on coding, AI integration, and high-quality content with Hobby Master. Explore our featured projects and start learning today!",
    images: [
      {
        url: "https://www.hobbymaster.xyz/assets/website.jpg",
        alt: "Hobby Master"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Hobby Master - Innovate with Intelligence. Discover hands-on coding, AI integration, and high-quality content. Explore our featured projects and start learning today!" />
        <meta name="keywords" content="Hobby Master, coding, AI integration, high-quality content, Python, Tkinter, SQL, NEXT.JS, Tailwind CSS, TypeScript, OpenCV, face recognition, time management, airways management" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hobbymaster.xyz" />
        <meta property="og:site_name" content="Hobby Master - Innovate with Intelligence" />
        <meta property="og:title" content="Hobby Master - Innovate with Intelligence" />
        <meta property="og:description" content="Discover hands-on coding, AI integration, and high-quality content with Hobby Master. Explore our featured projects and start learning today!" />
        <meta property="og:image" content="https://www.hobbymaster.xyz/assets/website.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HobbyMaster24" />
        <meta name="twitter:title" content="Hobby Master - Innovate with Intelligence" />
        <meta name="twitter:description" content="Discover hands-on coding, AI integration, and high-quality content with Hobby Master. Explore our featured projects and start learning today!" />
        <meta name="twitter:image" content="https://www.hobbymaster.xyz/assets/website.jpg" />
        <link rel="canonical" href="https://www.hobbymaster.xyz" />
      </head>
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
