import path from 'path';
import { build } from 'esbuild';
import vueJsx from '../src';

test('should transform jsx syntax correctly', async () => {
  const result = await build({
    absWorkingDir: process.cwd(),
    write: false,
    outdir: './test/fixture/dist',
    bundle: true,
    entryPoints: ['./test/fixtures/foo.jsx', './test/fixtures/bar.tsx'],
    plugins: [vueJsx()],
    external: ['vue'],
    format: 'esm',
  });
  for (const file of result.outputFiles) {
    expect(file.text).toMatchSnapshot(path.relative(process.cwd(), file.path));
  }
});

test('should passing options to @vue/babel-plugin-jsx', async () => {
  const result = await build({
    absWorkingDir: process.cwd(),
    write: false,
    outdir: './test/fixture/dist',
    bundle: true,
    entryPoints: ['./test/fixtures/foo.jsx'],
    plugins: [
      vueJsx({
        pragma: 'myPragma',
      }),
    ],
    external: ['vue'],
    format: 'esm',
  });
  for (const file of result.outputFiles) {
    expect(file.text).toMatchSnapshot(path.relative(process.cwd(), file.path));
  }
});
