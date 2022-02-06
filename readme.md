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

## SSG - Static Site Generated

## getStaticProps y getStaticPaths

- `getStaticProps` para paginas estáticas
- `getStaticPaths` Debe recibir todas las paginas a generar
- `fallback: false` incremental static generation, las paginas no enviadas responden 404

## Otras formas de deploy Next.js

- `yarn export` genera todas las paginas estáticas

## Performance

- `reportWebVital()` genera reporte del performance
- Unicamente se debe usar en la página `_app.tsx`
- `Hydration` Tiempo en que el JS de React comienza a funcionar
- `FCP` First Content Paint
- `TTFB` Time to first bite, indicador del tiempo en requerir cosas de otro servidor
- `CLS` Cumulative Layout Shift. CLS is a measure of the largest burst of layout shift scores for every unexpected layout shift that occurs during the entire lifespan of a page.
- `LCP` Largest Contentful Paint. The Largest Contentful Paint (LCP) metric reports the render time of the largest image or text block visible within the viewport, relative to when the page first started loading.

## Incremental Static Side Generation
