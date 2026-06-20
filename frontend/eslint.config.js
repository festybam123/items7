import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReactRefresh from 'eslint-plugin-react-refresh'
import pluginReactHooks from 'eslint-plugin-react-hooks'

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser
    },
    plugins: {
      'react-refresh': pluginReactRefresh,
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    }
  },
  pluginJs.configs.recommended,
]
