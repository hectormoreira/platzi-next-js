# Proyecto Curso de Next.JS de Platzi

Curso de NextJS dictado por [@jonalvarezz](https://twitter.com/jonalvarezz) para [Platzi](https://platzi.com)

### 🚀 Logros

1. Creación del proyecto
1. Agrego una ruta básica
1. Agrego una ruta dinámica
1. Enlazo páginas y creo una SPA
1. Agrega nuestra propia API
1. Páginas usando nuestra propia API

### 🤖 Guía Rápida

1.  **Empieza a desarrollar.**

    Instala dependencias

    ```sh
    yarn
    ```

    Inicia el proyecto

    ```sh
    yarn dev
    ```

    El sitio estará disponible en http://localhost:3000.

    Happy hacking!

#### Notas

Render

- Document
  - App
    - Aplicación / Pages /

## Path alias

En `tsconfig.js`

```json
"paths": {
    "@database": ["database/db.ts"],
    "@cors": ["cors-middleware.ts"],
    "@components/*": ["components/*"]
},
```

## Estilos

- Global CSS (.css)
- Module CSS (.module.css)
- CSS-in-JS Styled JSX (NextJs - Vercel)
