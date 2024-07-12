// app/layout.tsx
import './globals.css';
import React, { ReactNode } from 'react';
import Head from './head';

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <html lang="en">
    <Head />
    <body className="bg-white text-black min-h-screen flex flex-col">
      <header className="bg-black text-white shadow">
        <nav className="container mx-auto p-4 flex justify-between">
          <a href="/" className="text-lg font-bold hover:text-gold">Home</a>
          <a href="/events" className="text-lg font-bold hover:text-gold">Events</a>
          <a href="/artists" className="text-lg font-bold hover:text-gold">Artists</a>
          <a href="/news" className="text-lg font-bold hover:text-gold">News</a>
        </nav>
      </header>
      <main className="container mx-auto p-4 flex-grow">{children}</main>
      <footer className="bg-black text-white shadow p-4">
        <p className="text-center">&copy; 2024 PartyWrightEnt. All rights reserved.</p>
      </footer>
    </body>
  </html>
);

export default Layout;
