
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Technical from './pages/Technical';
import Creative from './pages/Creative';
import Blog from './pages/Blog';
import ArticleSeo from './pages/ArticleSeo';
import Profile from './pages/Profile';
import Booking from './pages/Booking';

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-border bg-background/90 backdrop-blur-md px-6 py-4 md:px-12">
      <div className="flex items-center gap-4 group cursor-pointer">
        <Link to="/" className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-black animate-spin-slow shadow-[0_0_15px_rgba(249,245,6,0.4)] group-hover:shadow-[0_0_25px_rgba(249,245,6,0.6)] transition-all">
            <span className="material-symbols-outlined text-[28px]">album</span>
          </div>
          <h2 className="hidden text-lg font-bold tracking-tight text-white md:block uppercase font-headline">EL ESPECIALISTA</h2>
        </Link>
      </div>

      <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
        {[
          { path: '/', label: 'Inicio / Home' },
          { path: '/lado-a', label: 'Lado A (Técnico)' },
          { path: '/lado-b', label: 'Lado B (Creativo)' },
          { path: '/liner-notes', label: 'Liner Notes (Blog)' },
          { path: '/el-artista', label: 'El Artista' },
        ].map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? 'text-primary border-b-2 border-primary' : 'text-gray-400'
              }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link to="/booking" className="flex items-center justify-center gap-2 rounded bg-primary px-4 py-2 text-sm font-bold text-black transition-all hover:scale-105 hover:bg-white active:scale-95 shadow-lg">
        <span className="material-symbols-outlined text-[18px]">call</span>
        <span className="hidden sm:inline">Booking (Contacto)</span>
      </Link>
    </header>
  );
};

const Footer = () => (
  <footer className="w-full border-t border-border py-8 px-6 md:px-12 bg-background/50">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-[16px]">copyright</span>
        <span>2024 EL ESPECIALISTA. Todos los derechos reservados.</span>
      </div>
      <div className="flex gap-4">
        <span>Bogotá, D.C.</span>
        <span>•</span>
        <span>Hecho con Vibecoding v2</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <HashRouter>
      <div className="flex min-h-screen flex-col bg-background text-white selection:bg-primary selection:text-black">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lado-a" element={<Technical />} />
            <Route path="/lado-b" element={<Creative />} />
            <Route path="/liner-notes" element={<Blog />} />
            <Route path="/liner-notes/seo-no-murio-humo" element={<ArticleSeo />} />
            <Route path="/el-artista" element={<Profile />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
