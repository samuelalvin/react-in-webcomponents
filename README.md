# react-in-webcomponents
An example of a packaged Webcomponents custom element with React inside of it

# Installation
Install this repo using npm:

```
npm install --save react-in-webcomponents
```

# Usage
In your html file, import these polyfills:

```
<script src="<path>/es6-shim/es6-shim.js"></script>
<script src="<path>/webcomponentsjs/webcomponents-lite.js"></script>
<script src="<path>/webcomponentsjs/custom-elements-es5-adapter.js"></script>
```

After importing the polyfills, you can import this repo:

```
<link rel="import" href="<path>/react-in-webcomponents/index.html">
```

Use this custom element by typing:

```
<custom-element></custom-element>
```
