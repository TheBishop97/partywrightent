// app/layout.tsx
import './globals.css';
import Navbar from '../components/Navbar';

import React, { ReactNode } from 'react';

type RootProps = {
  children: ReactNode;
};

export default function RootLayout({
  children,
}: RootProps) {
  return (
    <html lang="en">
      <body className={`bg-black antialiased`}>
        <main>
          <Navbar />
        {children}
        </main>
        
        </body>
    </html>
  );
}
