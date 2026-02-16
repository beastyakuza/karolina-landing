export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #eee", marginTop: 40 }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: 16 }}>
        <small>© {new Date().getFullYear()} Nombre Apellido</small>
      </div>
    </footer>
  );
}
