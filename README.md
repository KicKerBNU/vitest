# vue-test

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run c8 for code coverage (If you dont have installed it will request you to install)

```sh
npx vitest --environment jsdom --coverage
```

###Mocking API for tests using Vitest.
1 - Build the component make the request
2 - Console.log response on your browser, copy the object received to use as a mock. You can right click on the console, store object as global variable and use a JSON.stringify(temp1) to receive and copy the inteira object as JSON to use as a mock
3 - Install mock server for tests: `npm i -D whatwg-fetch msw` install mock server for tests with mock api requests
4 - Add in vite.config.ts some setup files:
    `test: {
        globals: true,
        setupFiles: "src/setupTests.ts"
    }`
5 - Create the file setupTests.ts 
