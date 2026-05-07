API con Next.js y Swagger

Este proyecto es una práctica de clase de 2º de DAW para la asignatura de Despliegue de Aplicaciones Web. La idea es aprender a crear una API con Next.js y documentarla usando Swagger.

En este caso, la API tiene varios endpoints de prueba y también se ha añadido Swagger para poder ver la documentación desde el navegador.

Qué hace el proyecto

Es una API sencilla hecha con Next.js que permite probar endpoints básicos y ver cómo se documentan con Swagger.

Los endpoints disponibles son:

GET /api/test → endpoint de prueba para comprobar que la API funciona
GET /api/users → devuelve una lista de usuarios de ejemplo
GET /api/products → devuelve una lista de productos de ejemplo
GET /api/swagger → devuelve la documentación de Swagger en formato JSON
Instalación

Primero hay que clonar el proyecto:

git clone https://github.com/ralcara/swagger-nextjs.git
cd swagger-nextjs

Después se instalan las dependencias:

npm install
Ejecución del proyecto

Para arrancar el proyecto en local:

npm run dev

Después se abre el navegador en:

http://localhost:3000

En algunos casos el puerto puede cambiar (por ejemplo 3003), así que hay que usar el que salga en la terminal.

Endpoints disponibles

GET /api/test
Sirve para comprobar que la API funciona correctamente. Devuelve algo simple como:

{ "ok": true }

GET /api/users
Devuelve una lista de usuarios ficticios.

GET /api/products
Devuelve una lista de productos ficticios.

GET /api/swagger
Devuelve la documentación de Swagger con todos los endpoints.

Swagger

Swagger se ha integrado en el proyecto para documentar la API.

Se puede ver en:

http://localhost:3000/api/swagger

Desde ahí se pueden ver todos los endpoints y probarlos directamente desde el navegador sin usar Postman.

Problemas que han salido durante el proyecto

Durante el desarrollo ha habido conflictos entre rutas de Next.js (Pages Router y App Router), pero se ha solucionado quedándose con Pages Router y eliminando conflictos en las rutas.

También ha sido necesario reiniciar el servidor y limpiar la caché en algunos casos.
