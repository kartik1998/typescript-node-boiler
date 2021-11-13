## Typescript NodeJS BoilerPlate

![](https://img.shields.io/badge/typescript-node-blue)

### Setup

- First clone the repository
- <b>NodeJS: 14.x, npm: 6.x</b>
- Run `npm install`

### Structure

```
.
├── README.md
├── bin
│   └── www
├── build
│   ├── config
│   │   ├── defaults.js
│   │   └── index.js
│   ├── index.js
│   └── src
│       ├── app
│       │   ├── controllers
│       │   │   └── user.js
│       │   └── services
│       │       └── user.js
│       ├── index.js
│       ├── lib
│       │   ├── apiout.js
│       │   ├── config.js
│       │   └── status-codes.js
│       └── routes
│           ├── index.js
│           └── v1
│               ├── index.js
│               └── user.js
├── config
│   ├── defaults.ts
│   └── index.ts
├── index.ts
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── controllers
│   │   │   └── user.ts
│   │   └── services
│   │       └── user.ts
│   ├── index.ts
│   ├── lib
│   │   ├── apiout.ts
│   │   └── status-codes.ts
│   └── routes
│       ├── index.ts
│       └── v1
│           ├── index.ts
│           └── user.ts
└── tsconfig.json
```

### Code Formatting

- Eslint and Prettier have already been setup.
- Husky is used to apply a pre-commit hook to format the code and fix eslint.
