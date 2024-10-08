# REACT BASICS - API

![image](https://github.com/user-attachments/assets/b64131ed-00f7-43de-ae3e-149538f1faeb)

https://react-basics-api.vercel.app/

## INTRODUCTION
Galería con las obras de arte del Instituta de Arte de Chicago, proyecto básico con React para el uso de APIs externas.


## PROJECT REQUIREMENTS
- JSX
- Componetización
- Props (enviar datos de un componente Padre a un componente Hijo)
- Estados (useState()) Uso mínimo de 3 estados con un sentido lógico
- useEffect() (para controlar efectos secundarios en nuestros componentes)
- Uso mínimo de una petición a una API para recoger unos datos
- Uso de React Router, declaración de rutas y acceder a ellas mediante Links
- useParams() ruta permite recibir un parámetro
- Paginación
- Responsive
- Buenas prácticas de HTML y CSS
  

## Technologies used
- Vite
- React
- JavaScript
- html5
- CSS3
- Vercel


## Dependencies
- react
- react-dom
- react-router-dom

## API
La API empleada para el proyecto pertenece a el IAC (Institute Art of Chicago)
https://api.artic.edu/docs/#quick-start

Para obtener toda la información sobre las obras de arte del Instituto de Arte de Chicago a través de su API, podemos usarr una petición GET al siguiente endpoint:

https://api.artic.edu/api/v1/artworks


El Instituto de Arte de Chicago ofrece una API que permite acceder a su colección de obras de arte, exposiciones y datos relacionados. La API está diseñada para integrar la información en aplicaciones o sitios web, proporcionando metadatos detallados sobre obras de arte como títulos, descripciones, información del artista y enlaces a imágenes.

Aunque la API no proporciona directamente los archivos de imagen, ofrece los datos necesarios para construir URL que permiten acceder a las imágenes a través de la IIIF Image API (un estándar internacional para acceder a contenido digital). Estas URL siguen un formato específico para acceder a las imágenes en diferentes tamaños y calidades.

https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg


  

## Installation
>[!IMPORTANT]
>Para iniciar el proyecto es necesario que su archivo package.json tenga todas las dependencias.
![image](https://github.com/user-attachments/assets/3c0d471e-1060-46d8-a78a-08253c4362cf)




>[!NOTE]
> do not forget to init project in local
>```js
>npm run dev
>```


## SKETCH WIREFRAMES
![image](https://github.com/user-attachments/assets/24729e11-3662-49a8-ad03-ce38e614b2cb)


## SCREENSHOTS
![image](https://github.com/user-attachments/assets/ab524ae7-ef9c-4a61-b5fd-f9be581a24a7)
![image](https://github.com/user-attachments/assets/21e377c6-3c8b-4f67-ad9d-ff20b0562149)
![image](https://github.com/user-attachments/assets/c02362f4-3faa-4527-80e3-1d93f542a854)
![image](https://github.com/user-attachments/assets/864443e2-1db2-4b77-912d-81246535e832)