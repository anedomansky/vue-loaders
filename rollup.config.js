import vue from 'rollup-plugin-vue';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import css from 'rollup-plugin-css-only';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/vue-loaders.mjs',
      },
      {
        format: 'cjs',
        file: 'dist/vue-loaders.js',
        globals: {
          vue: 'Vue',
        },
      },
    ],
    // css: false -> transforms <style>-blocks into imports so the css plugin can extract the styles
    plugins: [
      css({ output: 'vue-loaders.css' }),
      vue({ css: false }),
      peerDepsExternal(),
    ],
    external: ['vue'],
  },
];
