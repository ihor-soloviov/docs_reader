module.exports = {
  "env": {
    "node": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12
  },
  "rules": {
    "no-unused-vars": "warn",  // Відстеження невикористовуваних змінних
    "no-undef": "error",       // Відстеження неоголошених змінних
    "no-console": "off"        // Вимкнення правила для console.log
  }
};
