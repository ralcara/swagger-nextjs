import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Next.js - Ralcara",
      version: "1.0.0",
    },
  },
  apis: ["./pages/api/*.js"],
};

export default swaggerJSDoc(options);