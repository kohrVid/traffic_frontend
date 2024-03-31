# traffic_frontend

This is the frontend repo for the Traffic application

<!-- vim-markdown-toc GFM -->

* [About](#about)
* [Requirements](#requirements)
* [Development](#development)

<!-- vim-markdown-toc -->

## About

This application will act as an API for the Traffic application which will
essentially model visits to various pages for a given user. The frontend will
make requests to this application and then display its metrics.


## Requirements

* NodeJS 21+ (This application was created with v21.7.1 using
  [asdf](https://asdf-vm.com/))
* NextJS (`npm install -g --registry=https://registry.npmjs.org next`)


## Development

Install dependencies:

    npm install

In order to un the app locally, the `.env` file (or a new
`.env.local` file) must be configured with the missing environment
variables. Then run the server with the following:

    npm run dev

The app should then appear in http://localhost:1234

Run linting:

    npm run lint

To build this locally:

    npm run build
    npm run start
