# Proyecto Curso de Next.JS de Platzi

Curso de NextJS dictado por [@jonalvarezz](https://twitter.com/jonalvarezz) para [Platzi](https://platzi.com)

## Live Demo Vercel

[https://platzi-next-js.vercel.app/](https://platzi-next-js.vercel.app/)

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

- [https://static-tweet.vercel.app/](https://static-tweet.vercel.app/)

## Comandos

- `yarn upgrade-interactive --latest` ver actualizaciones disponibles

# Next.js 10

- Next Images, disponible desde la versión 10, caracteristica más notable
- `lazy loading` usando `import Image from 'next/image'`
- Soporte a Webpack 5
- Soporte a React 17
- Ajuste al API del componente `Link`
- Crear proxis usando el server de Next
  - ya no es necesario especificar parametros en el href
  - Antes : `<Link key={id} href="/product/[id]" as={`/product/\${id}`} passHref>`
  - Ahora : `<Link key={id} href={`/product/\${id}`} passHref>`
- `rewrite`
  ```js
  module.exports = {
    async rewrites() {
      return [
        {
          source: '/avocado/:path*',
          destination: '/product/:path*', //wildcars regex
        },
      ]
    },
  }
  ```
