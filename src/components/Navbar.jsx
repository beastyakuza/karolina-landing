import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    [
      "px-3 py-2 rounded-xl text-sm transition",
      isActive
        ? "border border-zinc-300 bg-zinc-50"
        : "border border-transparent hover:border-zinc-200 hover:bg-zinc-50",
    ].join(" ");

  const mobileLinkClass = ({ isActive }) =>
    [
      "block w-full px-3 py-2 rounded-xl text-sm transition",
      isActive ? "bg-zinc-100" : "hover:bg-zinc-50",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="text-base font-semibold tracking-tight text-zinc-900"
            onClick={() => setOpen(false)}
          >
            Karolina
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 md:flex">
            <NavLink to="/" className={navLinkClass}>
              Inicio
            </NavLink>
            <NavLink to="/portfolio" className={navLinkClass}>
              Portafolio
            </NavLink>
            <NavLink to="/#contacto" className={navLinkClass}>
              Contacto
            </NavLink>
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm hover:bg-zinc-50"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Abrir menú"
          >
            {open ? "Cerrar" : "Menú"}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden mt-3 rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm">
            <NavLink to="/" className={mobileLinkClass} onClick={() => setOpen(false)}>
              Inicio
            </NavLink>
            <NavLink
              to="/portfolio"
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              Portafolio
            </NavLink>
            <NavLink
              to="/#contacto"
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              Contacto
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}
