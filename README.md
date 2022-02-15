## Typescript NodeJS BoilerPlate

![](https://img.shields.io/badge/typescript-node-blue)

- Module boilerplate in `module` branch

### Setup

- First clone the repository
- <b>NodeJS: 14.x, npm: 6.x</b>
- Run `npm install`

### Structure

```
.
├── README.md
├── bin
│   └── www
├── config
│   ├── defaults.ts
│   └── index.ts
├── docker-compose.yml
├── image
├── index.ts
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── controllers
│   │   │   └── user.ts
│   │   ├── models
│   │   │   └── user.ts
│   │   ├── repositories
│   │   │   └── user.ts
│   │   └── services
│   │       └── user.ts
│   ├── connections
│   │   ├── index.ts
│   │   └── mongo.ts
│   ├── index.ts
│   ├── lib
│   │   ├── apiout.ts
│   │   ├── status-codes.ts
│   │   └── utils.ts
│   └── routes
│       ├── index.ts
│       └── v1
│           ├── index.ts
│           └── user.ts
└── tsconfig.json

12 directories, 23 files
```

### Code Formatting

- Eslint and Prettier have already been setup.
- Husky is used to apply a pre-commit hook to format the code and fix eslint.
