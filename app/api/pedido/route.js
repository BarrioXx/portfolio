// app/api/pedido/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { token, productos } = await req.json();

  // Validar token (10 min)
  if (!token) {
    return NextResponse.json({ error: 'Token inválido' }, { status: 401 });
  }

  // Aquí llamarías a la app puente / impresora
  console.log('PEDIDO RECIBIDO:', productos);

  return NextResponse.json({ ok: true });
}
