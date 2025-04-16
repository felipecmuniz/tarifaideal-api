const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TarifaIdeal API",
      version: "1.0.0",
      description: "Documentação da API de Tarifas Elétricas por Concessionária",
    },
  },
  apis: ["./pages/api/**/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;