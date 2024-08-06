// swaggerSpec.js
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Pokemon API',
    version: '1.0.0',
    description: 'API documentation for Pokemon management',
  },
//   servers: [
//     {
//       url: 'http://localhost:3000',
//       description: 'Local development server',
//     },
//   ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
