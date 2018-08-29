# dAPI.js

API for dApps on Ontology blockchain. It is an implementation of [OEP-6](https://github.com/backslash47/OEPs/blob/oep-dapp-api/OEP-6/OEP-6.mediawiki) communication protocol.



## How to use 
dAPI.js can be used as CommonJS/ES6 module or directly referencing in web page html.

### Import CommonJS
```
var client = require('ontology-dapi').client;
```

### Import ES6 module
```
import { client } from 'ontology-dapi';
```

### Web require
The browser.js file under the '/lib' folder needs to be referenced from the page:
```
<script src="./lib/browser.js"></script>
```

The use of the code is required under the global namespace of Ont.
```
var client = dApi.client;
```

### Initialisation
dApp needs to register itself as a client with the dAPI.js library to enable the communication.

```
import { client } from 'ontology-dapi';

client.registerClient({});
```

## Usage

### Retrieve user account
```
const account = await client.api.asset.getAccount();
```

### Retrieve arbitrary transaction
```
const transaction = await client.api.network.getTransaction({
  txHash: '314e24e5bb0bd88852b2f13e673e5dcdfd53bdab909de8b9812644d6871bc05f'
});
```

### Retrieve balance of an account
```
const balance = await client.api.network.getBalance({ address: 'AcyLq3tokVpkMBMLALVMWRdVJ83TTgBUwU' });
```

### Retrieve dAPI provider information
```
const result = await client.api.provider.getProvider();
```

### Initialise a transfer
```
const recipient = 'AXCyYV4DNmmsqZn9qJEqHqpacVxcr7X7ns';
const asset = 'ONT';
const amount = 1000;
const result = await client.api.asset.makeTransfer({ recipient, asset, amount });
```

### Initialise Smart contract call
```
import { client, Parameter } from 'ontology-dapi';

const contract = 'fe7a542bd4f1ae71d42c4b15480fb2f421c7631b';
const method = 'Add';
const parameters: Parameter[] = [{ type: 'Integer', value: 5 }, { type: 'Integer', value: 4 }];
const gasPrice = 500;
const gasLimit = 30000;
    
const result = await client.api.smartContract.invoke({ contract, method, parameters, gasPrice, gasLimit });
```

### Initialise Readonly Smart contract call
```
import { client, Parameter } from 'ontology-dapi';

const contract = 'fe7a542bd4f1ae71d42c4b15480fb2f421c7631b';
const method = 'Add';
const parameters: Parameter[] = [{ type: 'Integer', value: 5 }, { type: 'Integer', value: 4 }];
    
const result = await client.api.smartContract.invokeRead({ contract, method, parameters });
```


# Documentation

All the methods of dAPI from OEP-6 are organised into smaller units: **asset**, **identity**, **message**, **network**, **provider**, **smartContract** and **utils**.
The definitions of the methods can be found directly in the [OEP-6](https://github.com/backslash47/OEPs/blob/oep-dapp-api/OEP-6/OEP-6.mediawiki).

# Build

### Required Tools and Dependencies

* Node
* Npm

### Developing

Execute these commands in the project's root directory:

#### Download
```
git clone 'https://github.com/OntologyCommunityDevelopers/ontology-dapi.git'
cd ontology-dapi
```

#### Install

```
npm install
```

#### Development build
This will build the extension with minimum polyfilling for better debug experience.

````
npm run build:dev
````

You will get the packaged code under '/lib'.

#### Production build 

````
npm run build:prod
````

You will get the packaged code under '/lib'

## Built With

* [TypeScript](https://www.typescriptlang.org/) - Used language
* [Node.js](https://nodejs.org) - JavaScript runtime for building

## Authors

* **Matus Zamborsky** - *Initial work* - [Backslash47](https://github.com/backslash47)

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details
