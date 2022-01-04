import path from 'path';
import { build } from 'esbuild';
import vueJsx from '../src';

test('simple', async () => {
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
