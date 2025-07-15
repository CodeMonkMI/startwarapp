# Technical Documentation

## Architecture

The whole project is based on Module Based architecture. Everything is module based and loosely coupled.

## Technology Stack

- Typescript
- Next.Js
- Shadecn ui
- jest
- lucide icon

## Dependencies

- [Star War API](https://swapi.tech/).

## Project Folder tree

```sh
root/
├── .next
├── .swc
├── docs # all documentations
├── node_modules
├── public
├── src/
│   ├── app # pages
│   ├── components # all shared components
│   ├── features # all features goes up here/
│   │   └── starwar # a feature
│   │       ├── apis # feature specific api's
│   │       └── components # feature specific components
│   └── lib # utility and helper class
├── .env.local # local environment variable
├── .env.example # environment variable examples
├── .gitignore
├── components.json
├── eslint.config.mjs
├── jest.config.ts
├── jest.setup.ts
├── next-env.d.ts
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── README.md
└── tsconfig.json

```
