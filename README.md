# Proyecto de Gestión de Inventario

Este proyecto consta de dos páginas principales: `creacion.html` y `inv.html`.

## Páginas

### creacion.html

Esta página contiene un formulario que permite a los usuarios crear productos. Los datos del producto se guardan en el localStorage del navegador para su uso posterior.

### inv.html

Esta página permite a los usuarios visualizar, editar y eliminar los productos que han creado. Los datos se recuperan del localStorage del navegador.

## Tecnologías utilizadas

## Comparación entre Tailwind CSS CDN y la versión local

La principal diferencia entre usar Tailwind CSS a través de CDN y la versión local es cómo se generan los estilos CSS.

### Tailwind CSS CDN

Cuando usas el CDN, el script monitoriza los cambios que haces en el HTML, detectando las clases que usas y compilando el CSS en el navegador, en tiempo real. Sin embargo, estás cargando toda la biblioteca de clases y estilos de Tailwind, lo que puede no ser la mejor opción para producción.

### Versión local de Tailwind CSS

Cuando instalas Tailwind CSS localmente, Tailwind "escanea" el código de tu sitio web y crea un archivo CSS compilado que solo contiene los estilos para las clases que estás usando en tu sitio web. Esto resulta en un archivo CSS más pequeño y optimizado, lo que puede mejorar el rendimiento de tu sitio web.

## Próximos pasos

El proyecto está en constante desarrollo con mejoras y nuevas características en el horizonte. Manténgase atento a las actualizaciones.

## Contribución

Las contribuciones son siempre bienvenidas. Por favor, consulte las directrices de contribución antes de hacer una solicitud de extracción.
