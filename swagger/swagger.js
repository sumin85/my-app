const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "API 문서",
      description: "API 문서",
    },
    servers: [
      {
        url: "http://localhost:3000", // 요청 URL
      },
    ],
  },
  apis: ["./routes/*.js"], // Swagger 파일 연동
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };