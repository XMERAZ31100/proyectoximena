import React from "react";
import { Eye, FileText } from "lucide-react";

const statusStyles = {
  "Aprobado": "bg-[#7CC17E] text-[#173E22]",
  "En Revisión": "bg-[#F4C76C] text-[#6A4A00]",
  "En Progreso": "bg-[#93B4E6] text-[#15345C]",
  "Requiere Cambios": "bg-[#F07C84] text-[#6B0E19]",
};

function fileBadge(ext = "") {
  const e = ext.toLowerCase();
  if (e === "pdf") return { label: "PDF", bg: "bg-[#E64A3B]" };
  if (e === "doc" || e === "docx") return { label: "DOC", bg: "bg-[#2B6CB0]" };
  if (e === "xlsx") return { label: "XLSX", bg: "bg-[#2F855A]" };
  if (e === "pptx") return { label: "PPTX", bg: "bg-[#D97706]" };
  return { label: "FILE", bg: "bg-gray-500" };
}

const StatusPill = ({ value }) => {
  const base = "px-4 py-1.5 rounded-full text-sm font-semibold inline-flex items-center";
  const color = statusStyles[value] || "bg-gray-300 text-gray-800";
  return <span className={`${base} ${color}`}>{value}</span>;
};

const FileCell = ({ name }) => {
  const parts = name.split(".");
  const ext = parts.length > 1 ? parts.pop() : "";
  const { label, bg } = fileBadge(ext);

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <FileText className="w-6 h-6 text-white/90" />
        <span
          className={`absolute -bottom-2 left-1/2 -translate-x-1/2 ${bg} text-white text-[10px] font-bold px-1.5 py-[1px] rounded`}
        >
          {label}
        </span>
      </div>
      <span className="text-white/95 font-medium">{name}</span>
    </div>
  );
};

const ViewButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-[#0FA3A6] hover:opacity-90 transition"
    title="Ver"
    type="button"
  >
    <Eye className="w-5 h-5 text-white" />
  </button>
);

// Cambié el nombre a "Table" para que coincida con tu import en App.js
const Table = () => {
  const data = [
    { id: 1, name: "Contrato_Cliente_ABC.pdf", project: "Proyecto Alpha", lastModified: "2025-01-15", status: "Aprobado" },
    { id: 2, name: "Propuesta_Comercial.docx", project: "Proyecto Beta", lastModified: "2025-01-14", status: "En Revisión" },
    { id: 3, name: "Especificaciones_Técnicas.pdf", project: "Proyecto Gamma", lastModified: "2025-01-13", status: "En Progreso" },
    { id: 4, name: "Manual_Usuario.pdf", project: "Proyecto Delta", lastModified: "2025-01-12", status: "Requiere Cambios" },
    { id: 5, name: "Reporte_Financiero.xlsx", project: "Proyecto Sigma", lastModified: "2025-01-10", status: "En Progreso" },
    { id: 6, name: "Plan_Marketing_2025.docx", project: "Proyecto Omega", lastModified: "2025-01-09", status: "Aprobado" },
    { id: 7, name: "Dashboard_Indicadores.pdf", project: "Proyecto Orion", lastModified: "2025-01-08", status: "En Revisión" },
    { id: 8, name: "Presentación_Ejecutiva.pptx", project: "Proyecto Nova", lastModified: "2025-01-07", status: "Requiere Cambios" },
  ];

  return (
    <div className="w-full overflow-hidden rounded-xl shadow-xl border border-white/10"
      style={{ backgroundColor: "#0F2744" }}>
      <div className="px-6 pt-6">
        <h2 className="text-white font-bold text-2xl">Documentos Recientes</h2>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-white/90 border-y border-white/10">
              <th className="py-4 px-6 font-semibold">#</th>
              <th className="py-4 px-6 font-semibold">Nombre del Documento</th>
              <th className="py-4 px-6 font-semibold">Proyecto</th>
              <th className="py-4 px-6 font-semibold">Última Modificación</th>
              <th className="py-4 px-6 font-semibold">Estado</th>
              <th className="py-4 px-6 font-semibold">Acción</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, idx) => (
              <tr
                key={row.id}
                className="border-b border-white/10 hover:bg-white/5 transition"
              >
                <td className="py-4 px-6 text-white/80">{idx + 1}</td>
                <td className="py-4 px-6"><FileCell name={row.name} /></td>
                <td className="py-4 px-6 text-white/90">{row.project}</td>
                <td className="py-4 px-6 text-white/80">{row.lastModified}</td>
                <td className="py-4 px-6"><StatusPill value={row.status} /></td>
                <td className="py-4 px-6">
                  <ViewButton onClick={() => console.log("Ver documento:", row.name)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;