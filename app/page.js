'use client';

import { useEffect, useState } from 'react';

export default function MenuPage() {
  const [token, setToken] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get('token');

    if (!t) {
      alert('QR no válido o caducado');
      return;
    }

    setToken(t);
  }, []);

  const menu = [
    { id: 1, nombre: 'Hamburguesa', precio: 8 },
    { id: 2, nombre: 'Pizza', precio: 10 },
    { id: 3, nombre: 'Refresco', precio: 2 }
  ];

  const addProducto = (producto) => {
    setCarrito(prev => [...prev, producto]);
  };

  const enviarPedido = async () => {
    if (!carrito.length) return;

    const res = await fetch('/api/pedido', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, productos: carrito })
    });

    if (res.ok) {
      alert('Pedido enviado 🍽️');
      setCarrito([]);
      setModal(false);
    } else {
      alert('La sesión ha expirado');
    }
  };

  const carritoAgrupado = carrito.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item, cantidad: 1 };
    } else {
      acc[item.id].cantidad += 1;
    }
    return acc;
  }, {});

  const total = Object.values(carritoAgrupado).reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );

  return (
    <main style={styles.body}>
      <header style={styles.header}>
        <h1>Menú</h1>
      </header>

      <section style={styles.menu}>
        {menu.map(item => (
          <div key={item.id} style={styles.card}>
            <h3>{item.nombre}</h3>
            <p>{item.precio} €</p>
            <button style={styles.btn} onClick={() => addProducto(item)}>
              Añadir
            </button>
          </div>
        ))}
      </section>

      <footer style={styles.footer}>
        <button style={styles.footerBtn} onClick={() => setModal(true)}>
          🧾 Ver pedido ({carrito.length})
        </button>
      </footer>

      {modal && (
        <div style={styles.modalBg}>
          <div style={styles.modal}>
            <h2>Tu pedido</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
            {Object.values(carritoAgrupado).map(item => (
                <li key={item.id} style={{ marginBottom: '0.5rem' }}>
                <strong>{item.nombre}</strong> x{item.cantidad}
                {' — '}
                {item.precio * item.cantidad} €
                </li>
            ))}
            </ul>

            <hr />

            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Total: {total} €
            </p>
            <button style={styles.btn} onClick={enviarPedido}>
              Enviar pedido
            </button>
            <button style={styles.btn} onClick={() => setModal(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

/* ⬇️⬇️⬇️ ESTO ES LO QUE FALTABA ⬇️⬇️⬇️ */
const styles = {
  body: {
    fontFamily: 'system-ui, sans-serif',
    background: '#f5f5f5',
    minHeight: '100vh',
    paddingBottom: '90px'
  },
  header: {
    background: '#111',
    color: 'white',
    padding: '1rem',
    textAlign: 'center'
  },
  menu: {
    padding: '1rem',
    color: 'black'
  },
  card: {
    background: 'white',
    borderRadius: '12px',
    padding: '1rem',
    marginBottom: '1rem'
  },
  btn: {
    width: '100%',
    padding: '0.7rem',
    fontSize: '16px',
    marginTop: '0.5rem'
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    background: '#111',
    padding: '1rem'
  },
  footerBtn: {
    width: '100%',
    fontSize: '18px',
    padding: '0.8rem',
    background: '#28a745',
    color: 'black',
    border: 'none',
    borderRadius: '10px'
  },
  modalBg: {
    position: 'fixed',
    inset: 0,
    color: 'black',
    background: 'rgba(0,0,0,0.6)'
  },
  modal: {
    background: 'white',
    width: '90%',
    margin: '10% auto',
    padding: '1rem',
    borderRadius: '12px'
  }
};
