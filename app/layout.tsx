import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://agentic-b164a333.vercel.app'),
  title: {
    default: 'RedditGrow ? Grow your subreddit smartly',
    template: '%s ? RedditGrow'
  },
  description: 'Professional tools to analyze, schedule, and grow your subreddit audience. Insights, automation, and growth playbooks tailored for Reddit.',
  openGraph: {
    title: 'RedditGrow ? Grow your subreddit smartly',
    description: 'Professional tools to analyze, schedule, and grow your subreddit audience.',
    url: 'https://agentic-b164a333.vercel.app',
    siteName: 'RedditGrow',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'RedditGrow' }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RedditGrow ? Grow your subreddit smartly',
    description: 'Professional tools to analyze, schedule, and grow your subreddit audience.',
    images: ['/og.png']
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
