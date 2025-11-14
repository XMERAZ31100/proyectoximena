
import { useAuth0 } from "@auth0/auth0-react";

export default function Inicio() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="p-6">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
          Bienvenido a Nuestra Plataforma
        </h1>
        <p className="text-xl text-white mb-12 text-center max-w-2xl">
          Descubre todos nuestros servicios y soluciones digitales
        </p>
        <button 
          onClick={() => loginWithRedirect()} 
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transition duration-300 text-lg"
        >
          EMPEZAR SERVICIOS
        </button>
      </div>
    </div>
  );
}