import Link from 'next/link';

export default function NotFound() {
  // TODO: Include default header and footer as the lang layout
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Página No Encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link href="/not-found">Volver al inicio</Link>
    </div>
  );
} 