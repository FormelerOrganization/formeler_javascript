import babel from '@rollup/plugin-babel';
import ts from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';

import pkg from './package.json' with {type: "json"};

const PLUGINS = [
    ts({
        tsconfigOverride: {exclude: ['**/*.test.ts']},
    }),
    babel({
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
        babelHelpers: "bundled",
    }),
    replace({
        _VERSION: JSON.stringify(pkg.version),
        preventAssignment: true
    }),
];

export default [
    {
        input: 'src/index.ts',
        output: [
            {file: 'dist/index.js', format: 'cjs', compact: true},
            {file: 'dist/index.mjs', format: 'es', compact: true},
        ],
        plugins: PLUGINS,

    },
];