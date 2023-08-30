# Unit testing with Jest

## ECMAScript Modules
Since Jest ships with experimental support for ECMAScript Modules (ESM), we need to do a few things before we can test scripts using ESM.
- Add `"type": "module"` to package.json
- Set `transform: {}` in jest.config.json
- use experimental flag to run jest via npm scripts: `"test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"`
- Set "esModuleInterop" to true in tsconfig.json to fix warning thrown by Jest when testing .ts files.
````
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}
````
More info at: https://jestjs.io/docs/ecmascript-moduless

