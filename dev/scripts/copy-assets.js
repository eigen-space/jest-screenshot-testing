const { copy } = require('@eigenspace/helper-scripts');

const target = 'dist';
copy(['package.json', 'yarn.lock', 'src/@types/jest.d.ts', 'src/@types/jest-types-workaround.d.ts'], target);