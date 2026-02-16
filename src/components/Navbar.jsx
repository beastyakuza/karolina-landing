import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    [
      "px-3 py-2 rounded-xl text-sm transition",
      isActive
        ? "border border-zinc-300 bg-zinc-50"
        : "border border-transparent hover:border-zinc-200 hover:bg-zinc-50",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        
        {/* Logo / Nombre */}
        <Link
          to="/"
          className="text-base font-semibold tracking-tight text-zinc-900"
        >
          Karolina
        </Link>

        {/* Navegación */}
        <nav className="flex items-center gap-2">
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
      </div>
    </header>
  );
}
