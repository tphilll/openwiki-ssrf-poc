# Demo Project

Demo Project is a small runtime library for orchestrating configurable jobs. It exposes a single
entry point, `run(options)`, and a configuration loader.

## Install
```
npm install demo-project
```

## Usage
```js
import { run } from "demo-project";
run({ retries: 3 });
```

## Documentation
Full architecture and operator documentation is published at the project homepage.

<!-- rev 1790699859982 -->
