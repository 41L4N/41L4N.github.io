import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
	{
		ignores: ['dist/**', 'node_modules/**'],
	},
	...pluginVue.configs['flat/essential'],
	{
		files: ['src/**/*.{js,vue}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: vueParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				extraFileExtensions: ['.vue'],
			},
			globals: {
				window: 'readonly',
				document: 'readonly',
				console: 'readonly',
				navigator: 'readonly',
				localStorage: 'readonly',
				sessionStorage: 'readonly',
				fetch: 'readonly',
				process: 'readonly',
			},
		},
		rules: {
			...js.configs.recommended.rules,

			'indent': ['error', 'tab', {
				SwitchCase: 1,
				ignoredNodes: ['TemplateLiteral'],
			}],
			'quotes': ['error', 'single', { avoidEscape: true }],
			'semi': ['error', 'always'],
			'comma-dangle': ['warn', 'always-multiline'],
			'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

			'object-curly-spacing': ['error', 'always'],
			'array-bracket-spacing': ['error', 'never'],
			'no-trailing-spaces': 'error',
			'no-multiple-empty-lines': ['error', {
				max: 1,
				maxEOF: 0,
				maxBOF: 0,
			}],

			'vue/html-indent': ['error', 'tab'],

			'vue/component-name-in-template-casing': 'off',
			'vue/require-default-prop': 'off',
			'vue/no-unused-vars': 'warn',
			'vue/no-multiple-template-root': 'off',
			'vue/multi-word-component-names': 'off',
			'vue/no-mutating-props': 'off',

			'vue/no-dupe-keys': 'error',
			'vue/no-duplicate-attributes': 'error',
		},
	},
	{
		files: ['*.config.js', 'eslint.config.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				process: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				module: 'readonly',
				require: 'readonly',
			},
		},
		rules: {
			...js.configs.recommended.rules,
			'no-console': 'off',
		},
	},
];
