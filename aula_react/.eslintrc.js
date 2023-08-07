module.exports {
    "env": {
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
      "browser": true,
      "es2021": true,
      "node": true,
      "jest": true
<<<<<<< Updated upstream
    },
    "extends": [
      "eslint:recommended",
      "plugin:prettier/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended"
    ],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
    },
    "plugins": ["react"],
    "rules": {
      /* Essa regra indica que ao invés de erro, se torna apenas um warning */
      "no-unused-vars": [
        "warn",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_"
        }
      ],
      "react/react-in-jsx-scope": "off",
      "no-debugger": "warn"
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  };
=======
        "browser": true,
        "es2021": true,
        "node": true
=======
>>>>>>> Stashed changes
    },
    "extends": [
      "eslint:recommended",
      "plugin:prettier/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended"
    ],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
    },
    "plugins": ["react"],
    "rules": {
      /* Essa regra indica que ao invés de erro, se torna apenas um warning */
      "no-unused-vars": [
        "warn",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_"
        }
      ],
      "react/react-in-jsx-scope": "off",
      "no-debugger": "warn"
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
<<<<<<< Updated upstream
}
>>>>>>> 106e50067825d941d0e92d50fbbe4f5ca2f934e8
=======
  }
>>>>>>> Stashed changes
