# SOMOS Unión AC - Plataforma Web

Aplicación web desarrollada en React + Vite para digitalizar y transparentar la gestión de proyectos, programas, eventos y testimonios de la asociación civil Somos Unión AC.

## Demo en Vivo

**URL del Demo**: https://somos-frontend-nine.vercel.app/

**Características**

- Gestión de Proyectos, Programas y Eventos: Visualización y administración de actividades institucionales.
- Testimonios y Resultados: Espacio para compartir historias y logros.
- Panel de Administración: Acceso protegido para gestión interna (CRUD de recursos).
- Sistema de Autenticación: Login y registro de usuarios.
- Formulario de Voluntariado y Donaciones: Permite sumar colaboradores y recibir aportaciones.
- Interfaz responsiva: Adaptada para dispositivos móviles y escritorio.
- Modo claro/oscuro: Personalización visual según preferencia.
- Transparencia: Publicación de documentos y reportes institucionales.
- Integración con APIs: Consumo de datos dinámicos desde el backend.

## Instalación Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/ChangeAndCode/SOMOS_FRONTEND
   ```
2. Instala las dependencias
   ```bash
   npm install
   ```
3. Ejecuta en modo desarrollo
   ```bash
   npm run dev
   ```
4. Construye para producción:
   ```bash
   npm run build
   ```

## Estructura del Proyecto

src/
├── app.jsx # Configuración de rutas principales
├── index.jsx # Punto de entrada
├── main.css # Estilos globales y Tailwind
├── context/ # Contextos globales (Auth, Theme)
├── components/ # Componentes reutilizables (Nav, Footer, Cards, etc.)
├── pages/ # Páginas principales (Home, Login, Register, Admin, etc.)
│ ├── Admin/ # Panel de administración (CRUD)
│ ├── Home/ # Página de inicio y secciones
│ ├── Events/ # Eventos
│ ├── Programs/ # Programas
│ ├── Projects/ # Proyectos
│ ├── Testimonies/ # Testimonios
│ ├── Transparency/ # Transparencia institucional
│ └── Sumate/ # Voluntariado y donaciones
├── utils/ # Funciones utilitarias
public/
└── data/ # Datos estáticos (json, imágenes, links)

## Flujo de Procesos

- Inicio: Presentación institucional y acceso a secciones clave.
- Exploración: Visualización de proyectos, programas, eventos y testimonios.
- Participación: Registro, donación y voluntariado.
- Administración: Gestión interna de recursos y transparencia.

## Tecnologías

- React 19: Framework principal
- Vite: Herramienta de construcción y desarrollo
- Tailwind CSS: Utilidades de estilos y diseño responsivo
- React Router: Navegación entre páginas
- Context API: Manejo de estado global (tema, autenticación)
- API REST: Integración con backend para datos dinámicos
