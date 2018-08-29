# dAPI.js

API for dApps on Ontology blockchain. It is an implementation of [OEP-6](https://github.com/backslash47/OEPs/blob/oep-dapp-api/OEP-6/OEP-6.mediawiki) communication protocol.



# Usage

## Initialize

## Call

# Documentation

All the methods of dAPI from OEP-6 are organized into smaller units: **asset**, **identity**, **message**, **network**, **provider**, **smartContract** and **utils**.
The definitions of the methods can be found directly in the [OEP-6](https://github.com/backslash47/OEPs/blob/oep-dapp-api/OEP-6/OEP-6.mediawiki)

# Build

### Required Tools and Dependencies

* Node
* Npm

### Developing and Running

Execute these commands in the project's root directory:

#### Download
```
git clone 'https://github.com/OntologyCommunityDevelopers/ontology-dapi.git'
cd ontology-dapi
```

#### Setup dependencies

```
npm install
```

#### Development build
This will build the extension with minimum polyfilling for better debug experience.

````
npm run build:dev
````

#### Production build 

````
npm run build:prod
````

## Built With

* [TypeScript](https://www.typescriptlang.org/) - Used language
* [Node.js](https://nodejs.org) - JavaScript runtime for building

## Authors

* **Matus Zamborsky** - *Initial work* - [Backslash47](https://github.com/backslash47)

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details
