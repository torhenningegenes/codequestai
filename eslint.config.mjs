import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        extends: ['airbnb', 'prettier', 'plugin:node/recommended'],
        plugins: ['prettier'],
        rules: {
            'prettier/prettier': 'error',
            'no-unused-vars': 'error',
            'no-console': 'on',
            'func-names': 'off',
            'no-process-exit': 'off',
            'object-shorthand': 'off',
            'class-methods-use-this': 'off',
        },
    },
];
