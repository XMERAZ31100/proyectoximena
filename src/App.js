import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Assets/Components/Sidebar/sidebar";
import Topbar from "./Assets/Components/Topbar/topbar";
import PanelPrincipal from "./Assets/Page/PanelPrincipal";
import Usuarios from "./Assets/Page/Usuarios";  


export default function App() {
  return (
    <Router>
      {/* App a pantalla completa */}
      <div className="flex h-screen bg-[#1e293b] text-white">
        {/* Lado izquierdo */}
        <Sidebar />

        {/* Lado derecho: columna con Topbar arriba y contenido debajo */}
        <div className="flex flex-col flex-1">
          {/* Topbar pegado arriba; NO usar fixed, usa sticky si quieres */}
          <div className="sticky top-0 z-10">
            <Topbar />
          </div>

          {/* Contenido que crece y hace scroll */}
          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<PanelPrincipal />} />
              <Route path="/usuarios" element={<Usuarios />} />
              {/* otras rutas… */}
              <Route path="*" element={<PanelPrincipal />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}