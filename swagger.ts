export const swaggerOptions = {
   swaggerDefinition: {
      openapi: '3.0.0',
      info: {
         title: 'API credenciamento de candidatos',
         version: '1.0.0',
         description: 'Essa API tem o foco em credenciamento de candidatos para empresas',
      },
      servers: [
         {
            url: 'http://localhost:3000',
         },
      ],
      components: {
         securitySchemes: {
            bearerAuth: {
               type: 'http',
               scheme: 'bearer',
               bearerFormat: 'JWT',
            },
         },
      },
   },
   apis: ['./src/docs/*.ts'],
};