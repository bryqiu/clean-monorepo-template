/** @type {import('stylelint').Config} */
export default {
  rules: {
    'block-no-empty': true, // 禁止空块，比如 a{ }
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.json', '**/*.md', '**/*.yaml', '**/*.yml', '**/*.d.ts'],
}
