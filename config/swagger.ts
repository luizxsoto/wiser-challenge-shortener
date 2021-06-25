import { SwaggerConfig } from '@ioc:Adonis/Addons/Swagger'

export default {
  uiEnabled: true,
  uiUrl: 'docs',
  specEnabled: true,
  specUrl: '/swagger.json',

  middleware: [],

  options: {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'wiser-challenge-shortener',
        version: '1.0.0',
        description: 'Wiser Challenge Shortener',
      },
    },

    apis: ['app/**/*.ts', 'docs/swagger/**/*.yml', 'start/routes.ts'],
    basePath: '/',
  },
  mode: 'PRODUCTION',
  specFilePath: 'docs/swagger.json',
} as SwaggerConfig
