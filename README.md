# Pokedex App

Pokedéx App, a Pokémon encyclopedia.
This application is built with Next.js contemplating both front-end and back-end.

## Install

1. Clone the repository:

```
git clone https://github.com/roquiles/pokedex-arvo.git
```

2. Install project's dependencies:

```
npm install
```

3. Start the project :

Development mode:

```
npm run dev
```

After `npm run dev / npm start` the project (back and front-end) will be running at http://localhost:3000.

## Build

To build the application for production usage:

```
npm run build
```

After the build command, in order to start a Next.js production server, run:

```
npm start
```

## API

### Endpoints

#### GET /api/pokemon/{id}

Returns the data of a specific pokemon.

To use this path in your API request, replace `{id}` with the name or id of the Pokemon of your choice.

**Successful Response**: You'll get Pokemon's data as follows:

```
{
    "id": 901,
    "name": "ursaluna",
    "height": 24,
    "weight": 2900,
    "abilities": [
        "guts",
        "bulletproof",
        "unnerve"
    ],
    "types": [
        "ground",
        "normal"
    ],
    "stats": [
        {
            "name": "hp",
            "value": 130
        },
        {
            "name": "attack",
            "value": 140
        },
        {
            "name": "defense",
            "value": 105
        },
        {
            "name": "special-attack",
            "value": 45
        },
        {
            "name": "special-defense",
            "value": 80
        },
        {
            "name": "speed",
            "value": 50
        }
    ]
}
```

**Unsuccessful response**: In case the resource is not found, or there's any kind of error, you'll get an error message as follows:

```
{
    "message": "{errorMessage}"
}
```

## Linting

This project uses ESLint to avoid errors and keep an organized and clean codebase. To run the linter, use the command below:

```
npm run lint
```

## Tests

This project uses Jest with React Testing Library to test some components and utility functions. To run tests:

```
npm test
```

## Tooling

- **Next.js**: As main framework for back-end and front-end
- **TypeScript**: As programming language
- **Tailwind.css**: As a CSS framework
- **Eslint**: As a linter
- **Prettier**: For formatting the codebase
- **Jest**: As a testing framework
- **React Testing Library**: As a library for tests

# Pokedex App

Pokedéx App, a Pokémon encyclopedia.
This application is built with Next.js contemplating both front-end and back-end.

## Install

1. Clone the repository:

```
git clone https://github.com/roquiles/pokedex-arvo.git
```

2. Install project's dependencies:

```
npm install
```

3. Start the project :

Development mode:

```
npm run dev
```

After `npm run dev / npm start` the project (back and front-end) will be running at http://localhost:3000.

## Build

To build the application for production usage:

```
npm run build
```

After the build command, in order to start a Next.js production server, run:

```
npm start
```

## API

### Endpoints

#### GET /api/pokemon/{id}

Returns the data of a specific pokemon.

To use this path in your API request, replace `{id}` with the name or id of the Pokemon of your choice.

**Successful Response**: You'll get Pokemon's data as follows:

```
{
    "id": 901,
    "name": "ursaluna",
    "height": 24,
    "weight": 2900,
    "abilities": [
        "guts",
        "bulletproof",
        "unnerve"
    ],
    "types": [
        "ground",
        "normal"
    ],
    "stats": [
        {
            "name": "hp",
            "value": 130
        },
        {
            "name": "attack",
            "value": 140
        },
        {
            "name": "defense",
            "value": 105
        },
        {
            "name": "special-attack",
            "value": 45
        },
        {
            "name": "special-defense",
            "value": 80
        },
        {
            "name": "speed",
            "value": 50
        }
    ]
}
```

**Unsuccessful response**: In case the resource is not found, or there's any kind of error, you'll get an error message as follows:

```
{
    "message": "{errorMessage}"
}
```

## Linting

This project uses ESLint to avoid errors and keep an organized and clean codebase. To run the linter, use the command below:

```
npm run lint
```

## Tests

This project uses Jest with React Testing Library to test some components and utility functions. To run tests:

```
npm test
```

## Tooling

- **Next.js**: As main framework for back-end and front-end
- **TypeScript**: As programming language
- **Tailwind.css**: As a CSS framework
- **Eslint**: As a linter
- **Prettier**: For formatting the codebase
- **Jest**: As a testing framework
- **React Testing Library**: As a library for tests
