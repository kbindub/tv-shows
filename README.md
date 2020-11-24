# TV Shows Application With VueJS
A Single-page web application which allows user to see few popular tv shows and to see tv shows based on genres. It uses the following open api: http://www.tvmaze.com/api

## Installations

## Installation of vue/cli
```
npm install -g @vue/cli

```
Note: For this project vue version is 3.11.0. You can check you have the right version with this command: 
vue --version

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Project Guidelines ------------

1) File Naming Convention, 
   Method Naming Convention, 
   Component Naming Convention,
   variable, object declaration : camelCase
   Example : tvShowsApi.js, getShowsList(), filterListComponent, listOfShows etc..

2) Folder Naming Convention, Components directives in vue : kabab-case
   Example : app-header, <app-header />

3) Vuex Standards:
   a. mutations: ALL_CAPS
      ex: SET_LISTOFSHOWS
   b. actions: camelCaseSuffixAction
      ex: getListOfShowsAction
   c. state: camelCase
      ex: listOfShows  

### Project dependencies and devDependencies ------------
1. axios:
   Promise based HTTP client for the browser.
   Please refer below url for more details:
   https://www.npmjs.com/package/axios   

2. bootstrap and bootstrap-vue:
   With BootstrapVue we can build responsive, mobile-first projects on the web using Vue.js and the world's most popular front-end CSS library — Bootstrap v4.
   Please refer below url for more details:
   https://bootstrap-vue.js.org/docs

3. @vue/cli-plugin-unit-jest:
   Run unit tests with Jest. Jest as a JS unit testing framework and runner.
   Please refer below url for more details:
   https://jestjs.io/

   In jest.config.js: we can configure some key feature such as collectCoverage, collectCoverageFrom, coverageThreshold etc
   for getting exact code coverage with reports.

