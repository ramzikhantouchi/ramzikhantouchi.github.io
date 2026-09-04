import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/Nav";
import { ScrollToTop } from "@/components/ScrollToTop";
import { profile } from "@/data/profile";

const chillax = localFont({
  src: "./fonts/Chillax-Variable.woff2",
  variable: "--font-chillax",
  weight: "200 700",
  display: "swap",
});

const description =
  "Ramzi Khantouchi is a PhD student in Artificial Intelligence at El Tarf University, specializing in machine learning, deep learning, graph neural networks, and recommender systems.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: "https://ramzikhantouchi.github.io",
  image: "https://ramzikhantouchi.github.io/img/ramzi-khantouchi.jpg",
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "El Tarf",
    addressCountry: "Algeria",
  },
  affiliation: {
    "@type": "EducationalOrganization",
    name: profile.affiliation,
    url: "http://www.univ-eltarf.dz",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "El Tarf University",
  },
  worksFor: {
    "@type": "EducationalOrganization",
    name: "El Tarf University",
  },
  knowsAbout: profile.researchAreas,
  sameAs: profile.socials.map((social) => social.href),
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://ramzikhantouchi.github.io",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ramzikhantouchi.github.io"),
  title: {
    default: "Ramzi Khantouchi — AI Researcher & PhD Student",
    template: "%s · Ramzi Khantouchi",
  },
  description,
  authors: [{ name: "Ramzi Khantouchi", url: "https://ramzikhantouchi.github.io" }],
  creator: "Ramzi Khantouchi",
  publisher: "Ramzi Khantouchi",
  alternates: {
    canonical: "https://ramzikhantouchi.github.io",
  },
  keywords: [
    "Ramzi Khantouchi",
    "Ramzi",
    "Artificial Intelligence",
    "AI Researcher",
    "PhD Student",
    "Deep Learning",
    "Machine Learning",
    "Recommender Systems",
    "Graph Neural Networks",
    "LLM Recommendation",
    "On-device Machine Learning",
    "El Tarf University",
    "Research Portfolio",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    locale: "en_US",
    siteName: "Ramzi Khantouchi — AI Researcher",
    type: "profile",
    url: "https://ramzikhantouchi.github.io",
    title: "Ramzi Khantouchi — AI Researcher & PhD Student",
    description,
    images: [
      {
        url: "https://ramzikhantouchi.github.io/img/ramzi-khantouchi.jpg",
        width: 1080,
        height: 1080,
        alt: "Ramzi Khantouchi — AI Researcher",
      },
    ],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/img/ramzi-khantouchi.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramzi Khantouchi — AI Researcher",
    description,
    images: ["https://ramzikhantouchi.github.io/img/ramzi-khantouchi.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${chillax.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Nav />
          <main className="flex-1">{children}</main>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
