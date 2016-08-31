# React File Input Button
A simple react component for stylizing file inputs as buttons.

## Demo & Examples

To build the examples locally, run:

```sh
npm install
npm start
```

## Installation

```sh
npm install collinbrewer/react-file-input-button -S
```

## Usage

```js
var ReactFileInputButton = require('react-file-input-button');

<ReactFileInputButton accept='image/*;capture=camera' autoFocus onChange={this.handleChangeFile}>
	<button className='btn btn-default'>Choose Photo</button>
</ReactFileInputButton>
```

## License

ISC Licensed.  Copyright (c) 2016 Collin Brewer.
