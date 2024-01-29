# Start Wars Planets

This project is designed to render a list of Star Wars planets. You can explore the project: https://sdelosantos.github.io/

## Packages

Here's a list of the packages used in this project:

1. @fortawesome/fontawesome-free@6.5.1
2. @tanstack/react-query@@5.17.19
   3 . axios@1.6.6,
3. date-fns@3.3.1",
4. styled-components@^6.1.8

## Run Locally

You can test it on this URL: https://sdelosantos.github.io/

To run the project locally, execute the following commands:

```
pnpm install && pnpm dev
```

or

```
npm install && npm run dev
```

If you prefer to use Docker, use the following commands. Only run this the first time or after making changes:

```
pnpm build-docker
```

and

```
npm run docker
```

# Structure and Features

This project follows the folder structure below::

```
- src
  - assets: contains all external elements
  - components: includes globally used components
  - core:
    - constants: stores type definitions and global variables
    - context: stores project context components
    - hooks: stores custom hooks
    - utils: stores useful utilities like array manipulation, formatters, etc.
  - presentation: includes presentation components
    - components: includes components used in the presentation scope
    - screens: includes navigation screens
    - theme: stores global style theme settings such as colors, font sizes, etc.

```

In this architecture, the components' definitions follow the structure below:

### Feature

To enhance performance, the project implements `caching` to store data and components in the cache memory, reducing unnecessary renders in the components. It utilizes react-query to make API requests and keeps the data in cache. Subsequent requests retrieve the data from the cache, minimizing API calls.

## Screenshots

<img width="1437" alt="image" src="https://github.com/sdelosantos/sdelosantos.github.io/assets/19800467/726d5e62-e94d-43ad-a643-6829e7efde29">
