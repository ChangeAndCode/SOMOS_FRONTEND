// pages/Transparency/Transparency.jsx
import { useEffect, useMemo, useState } from 'react';
import Nav from '../../components/Nav/Nav';

const API = import.meta.env.VITE_URL || 'http://localhost:3000/';

const CATEGORIES = [
  { value: '', label: 'Todas' },
  { value: 'financial', label: 'Estados financieros' },
  { value: 'accountability', label: 'Rendición de cuentas' },
  { value: 'board', label: 'Info del consejo' },
  { value: 'other', label: 'Otros' },
];

export default function TransparencyPublic() {
  const [items, setItems] = useState([]);
  const [q, setQ] = useState('');
  const [category, setCategory] = useState('');
  const [year, setYear] = useState('');
  const [sort, setSort] = useState('new');
  const [loading, setLoading] = useState(false);

  const years = useMemo(() => {
    const y = new Date().getFullYear();
    return ['', y, y - 1, y - 2, y - 3];
  }, []);

  async function fetchDocs() {
    setLoading(true);
    try {
      console.log('Fetching transparency documents...');
      const params = new URLSearchParams();
      if (q) params.set('q', q);
      if (category) params.set('category', category);
      if (year) params.set('year', year);
      if (sort) params.set('sort', sort);

      const url = `${API}api/transparency?${params.toString()}`;
      console.log('URL:', url);

      const res = await fetch(url);
      console.log('Response status:', res.status);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log('Response data:', data);

      // El backend devuelve { page, total, items }
      setItems(data.items || []);
    } catch (error) {
      console.error('Error fetching transparency docs:', error);
      setItems([]); // Fallback a array vacío en caso de error
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDocs();
  }, []); // carga inicial

  return (
    <>
      <Nav />
      <section className="max-w-6xl mx-auto p-4 pt-24">
        <h1 className="text-2xl mb-3">Transparencia</h1>

        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por título"
            className="border p-2 rounded"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded"
          >
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border p-2 rounded"
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y || 'Todos los años'}
              </option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="new">Más nuevos</option>
            <option value="old">Más antiguos</option>
            <option value="title">Título (A–Z)</option>
          </select>
        </div>

        <button onClick={fetchDocs} className="border px-4 py-2 rounded mb-4">
          Aplicar filtros
        </button> */}

        {loading && <p>Cargando…</p>}

        {!loading && items.length === 0 && (
          <p className="text-gray-500">No se encontraron documentos.</p>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((d) => (
            <article
              key={d._id || d.id}
              className="border rounded p-3 bg-white"
            >
              <h3 className="font-semibold">{d.title}</h3>
              <p className="text-sm opacity-80">{d.description}</p>
              <div className="text-xs mt-1 opacity-70">
                <span>{d.category}</span>
                {' · '}
                <span>
                  {d.publishedAt || d.createdAt
                    ? new Date(
                        d.publishedAt || d.createdAt
                      ).toLocaleDateString()
                    : ''}
                </span>
                {' · '}
                <span>{d.mimeType?.split('/')[1] || d.fileType}</span>
              </div>
              <div className="mt-3">
                <a
                  className="underline"
                  href={d.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver/Descargar
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
