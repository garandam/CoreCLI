# Build steps for the CoreCLI
$ mkdir ccli
$ cd ccli
$ git init
$ npm init
$ npm install --save-dev typescript
$ npm install @types/node --save-dev
$ npm install --save clear chalk commander figlet


# CoreCLI dependencies
- clear
- chalk
- commander
- figlet

# CoreCLI DEV-dependencies
- typescript
- @types/node => https://github.com/DefinitelyTyped/DefinitelyTyped


# Which steps to do, to use this CLI
- make project changes
- $ npm run tsc or $ npx tsc
- $ npm link
- $ corecli ...

`$ npm link`
npm link will create a symbolic link to you project folder in the global node_modules so you project will behave a it is an install global node module.

`$ npm install -g`
Apart form npm link you can also do npm install -g which will copy the the project in the global node modules folder ie. as lib for others