# esbuild-plugin-vue-jsx

[![npm version](https://badgen.net/npm/v/esbuild-plugin-vue-jsx)](https://npm.im/esbuild-plugin-vue-jsx) [![npm downloads](https://badgen.net/npm/dm/esbuild-plugin-vue-jsx)](https://npm.im/esbuild-plugin-vue-jsx)

## Install

```bash
npm i esbuild-plugin-vue-jsx -D
```

## Usage

```ts
import { build } from 'esbuild';
import vueJsx from 'esbuild-plugin-vue-jsx';

build({
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
});
```

## Options

See [@vue/babel-plugin-jsx](https://github.com/vuejs/jsx-next).

## License

MIT.
