# XIMENA MERAZ CASTILLO
# 218101127
# Lic. Ing en sistemas computacionales
# 06 - NOVIEMBRE - 2025
# 28 - OCTUBRE - 2026
---------------------------------------------------------------------------
# Funcionamiento
- Sistema de autenticación con Auth0
- Interfaz modular con componentes reutilizables
- Diseño responsive usando Tailwind CSS 3.1.4
- Estructura de componentes organizada por funcionalidad
# MODELO A USAR MVC 
App (Componente Principal)
├── Page/inicio.js (Página principal)
├── Topbar (Barra superior)
├── Sidebar (Menú lateral)
├── Login/Logout (Botones de autenticación)
├── Cards (Tarjetas de métricas)
└── Table (Tabla de datos) 
# TECNOLOGIA DE DESARROLLO 
-----------------------------------------------------------------------------
# Tecnologías Principales
# Entorno de Desarrollo
-Mongose
- Node.js - Runtime de JavaScript
- npm 10.9.3 - Gestor de paquetes
- React Scripts 5.0.1 - Herramientas de desarrollo
- Node.js instalado
- npm 10.9.3 o superior
# Frontend Framework
- React ^19.2.0 - Biblioteca principal para la interfaz de usuario
- React DOM ^19.2.0 - Renderizado de React en el navegador
# Enrutamiento
-React Router DOM ^7.9.5 - Navegación y routing en la aplicación
# Autenticación
- Auth0 React ^2.8.0 - Sistema de autenticación y autorización
# UI Components & Icons
- Headless UI React ^2.2.9 - Componentes UI accesibles y sin estilos
- Heroicons React ^2.2.0 - Biblioteca de iconos
- Lucide React ^0.552.0 - Otra biblioteca de iconos alternativa
- React Icons ^5.5.0 - Colección de iconos para React
# Testing
- Testing Library React ^16.3.0 - Utilidades para testing de componentes
- Testing Library DOM ^10.4.1 - Testing de DOM
- Testing Library User Event ^13.5.0 - Simulación de interacciones de usuario
- Testing Library Jest DOM ^6.9.1 - Matchers personalizados para Jest
- Jest (incluido en react-scripts) - Framework de testing
# Herramientas de Desarrollo
- React Scripts 5.0.1 - Scripts y configuración para Create React App
- Web Vitals ^2.1.4 - Métricas de performance web
- ReactDOM - Renderizado en el DOM
# Estilos y Diseño
- Tailwind CSS - Framework CSS utility-first (via CDN)
- CSS tradicional - Para estilos personalizados


# estructura de carpetas
```
└── 📁xim (CARPETA RAÍZ DEL PROYECTO)
    └── 📁public (ARCHIVOS PÚBLICOS (accesibles directamente))
        ├── favicon.ico  (Icono de la pestaña del navegador)
        ├── index.html (HTML principal (punto de entrada))
        ├── logo192.png
        ├── logo512.png
        ├── manifest.json (Configuración PWA (Progressive Web App))
        ├── robots.txt
    └── 📁src (CÓDIGO FUENTE DE LA APLICACIÓN)
        └── 📁Assets (RECURSOS ESTÁTICOS)
            └── 📁Components (COMPONENTES REUTILIZABLES)
                └── 📁Card (Componente de tarjeta)
                    ├── card.js
                └── 📁Login ( Componentes de autenticación)
                    ├── LoginButton.js (Botón de inicio de sesión)
                    ├── LogoutButton.js  (Botón de cierre de sesión)
                └── 📁Sidebar (Barra lateral de navegación)
                    ├── sidebar.js
                └── 📁Table
                    ├── table.js (Lógica del componente Table)
                └── 📁Topbar (Barra superior
)
                    ├── topbar.js
            └── 📁Font (Fuentes personalizadas (vacía))
            └── 📁Img ( Imágenes de la aplicación)
                ├── icon.jpg
                ├── zmx.jpg
            └── 📁Page (Componentes de página
)
                ├── inicio.js (Página principal/Inicio)
        ├── App.css (Estilos principales de la aplicación)
        ├── App.js (Componente principal de React)
        ├── App.test.js ( Tests del componente App)
        ├── index.css (Estilos globales de la aplicación)
        ├── index.js (Punto de entrada de React)
        ├── logo.svg (Logo en formato SVG)
        ├── reportWebVitals.js ( Métricas de performance)
        ├── setupTests.js (Configuración inicial para tests)
    ├── .gitignore
    ├── package-lock.json ( Lockfile de dependencias npm)
    ├── package.json (Configuración del proyecto y dependencias)
    ├── README.md
    ├── tailwind.config.js (Configuración de Tailwind CSS)
    └── xim.md (Documentación adicional del proyecto)
```

