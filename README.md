# Plop Pack Npm Install Packages

[![npm](https://img.shields.io/npm/v/plop-pack-npm-install-packages.svg)](https://www.npmjs.com/package/plop-pack-npm-install-packages)

A [PlopJS](https://github.com/plopjs/plop) action to install packages with NPM.

## Installation

```
npm i plop-pack-npm-install-packages
```

## Usage

```javascript
module.exports = (plop) => {
  // Loads the npmInstall action type
  plop.load('plop-pack-npm-install-packages');
  plop.setGenerator('generator-name', {
    prompts: [
      // ...
    ],
    actions: [
      {
        type: 'npmInstallPackages',
        // Can be a string or an array
        install: ['react', 'lodash@4.17.14'],
      },
    ],
  });
};
```

For a Plop action that runs `npm install` for all the dependencies in a `package.json`, check out [plop-pack-npm-install](https://github.com/crutchcorn/plop-pack-npm-install).
