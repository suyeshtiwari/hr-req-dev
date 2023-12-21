
# HR REQ API

## Getting Started

### Development Dependencies

 - GIT ([https://git-scm.com/](https://git-scm.com/))
 - Node.js ([https://nodejs.org/en/download/)](https://nodejs.org/en/download/)
 - MySQL ([https://www.mysql.com/](https://www.mysql.com/))
 - VS Code IDE ([https://code.visualstudio.com/](https://code.visualstudio.com/))
 - My SQL Workbench(My SQL UI Client) ([https://www.mysql.com/products/workbench/](https://www.mysql.com/products/workbench/)) 
 - Putty (Optional) ([https://www.putty.org/](https://www.putty.org/))
 - WinScp (Optional) ([https://winscp.net/eng/download.php](https://winscp.net/eng/download.php))

  

### Installation

  

Clone the repo:

  

```bash

git clone git clone 

cd 

```

  

Install the dependencies:

```bash
npm install yarn -g
yarn install

```
 

### Commands  

Running locally:

```bash

yarn dev

```

  

Running in production:

  

```bash

yarn start

```

  

Testing:

  

```bash

# run all tests

yarn test

  

# run all tests in watch mode

yarn test:watch

  

# run test coverage

yarn coverage

```

  

Docker:

```bash

# run docker container in development mode

yarn docker:dev


# run docker container in production mode

yarn docker:prod


# run all tests in a docker container

yarn docker:test

```

  

Linting:

  

```bash

# run ESLint

yarn lint

  

# fix ESLint errors

yarn lint:fix

  

# run prettier

yarn prettier

  

# fix prettier errors

yarn prettier:fix

```

## Logging

  

Import the logger from `src/utils/logger.js`. It is using the [Winston](https://github.com/winstonjs/winston) logging library.

  

Logging should be done according to the following severity levels (ascending order from most important to least important):

  

```javascript

const  logger = require('<path to src>/utils/logger');

  

logger.error('message'); // level 0

logger.warn('message'); // level 1

logger.info('message'); // level 2

logger.http('message'); // level 3

logger.verbose('message'); // level 4

logger.debug('message'); // level 5

```

  

In development mode, log messages of all severity levels will be printed to the console.

  

In production mode, only `info`, `warn`, and `error` logs will be printed to the console.\

It is up to the server (or process manager) to actually read them from the console and store them in log files.\

This app uses pm2 in production mode, which is already configured to store the logs in log files.

  

Note: API request information (request url, response code, timestamp, etc.) are also automatically logged (using [morgan](https://github.com/expressjs/morgan)).
  

## Linting

  

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io).

  

In this app, ESLint is configured to follow the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) with some modifications. It also extends [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to turn off all rules that are unnecessary or might conflict with Prettier.

  

To modify the ESLint configuration, update the `.eslintrc.json` file. To modify the Prettier configuration, update the `.prettierrc.json` file.

  

To prevent a certain file or directory from being linted, add it to `.eslintignore` and `.prettierignore`.

  

To maintain a consistent coding style across different IDEs, the project contains `.editorconfig`