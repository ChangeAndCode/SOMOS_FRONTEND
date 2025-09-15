// src/pages/Admin/Transparency.jsx
import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import DataGridTable from "../../components/DataGridTable/DataGridTable";
import { fetcher } from "../../utils/fetcher";

export default function AdminTransparency() {
  const [docs, setDocs] = useState([]);

  // Campos para el Form (DataGridTable -> Form)
  const fields = [
    {
      name: "title",
      label: "Título",
      type: "text",
      placeholder: "Ej. Estados 2024",
      required: true,
    },
    {
      name: "category",
      label: "Categoría",
      type: "select",
      required: true,
      options: [
        { value: "financial", label: "Estados financieros" },
        { value: "accountability", label: "Rendición de cuentas" },
        { value: "board", label: "Info del consejo" },
        { value: "other", label: "Otros" },
      ],
    },
    { name: "publishedAt", label: "Fecha de publicación", type: "date" },
    { name: "period", label: "Periodo", type: "text", placeholder: "2025-Q2" },
    {
      name: "tags",
      label: "Tags",
      type: "text",
      placeholder: "separadas, por, coma",
    },
    { name: "description", label: "Descripción", type: "textarea" },
    {
      name: "file",
      label: "Archivo",
      type: "file",
      accept: ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.csv,.txt,.zip",
      required: false,
    },
  ];

  // Columnas visibles en la tabla
  const tableFields = ["title", "category", "publishedAt"];

  const route = "api/transparency";

  useEffect(() => {
    fetchDocs();
  }, []);
  async function fetchDocs() {
    const data = await fetcher(route, { method: "GET" });
    setDocs(data.items || data);
  }

  return (
    <AdminLayout>
      <DataGridTable
        data={docs}
        setData={setDocs}
        fields={fields}
        tableFields={tableFields}
        route={route}
      />
    </AdminLayout>
  );
}
