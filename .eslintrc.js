module.exports = {
    "extends": "airbnb",
    "rules": {
        // indentation
        "indent": [ 2, 4 ],

        // spacing
        "space-in-parens": [ 2, "always" ],
        "template-curly-spacing": [ 2, "always" ],
        "array-bracket-spacing": [ 2, "always" ],
        "object-curly-spacing": [ 2, "always" ],
        "computed-property-spacing": [ 2, "always" ],
        "no-multiple-empty-lines": [ 2, { "max": 1, "maxEOF": 0, "maxBOF": 0 } ],

        // strings
        "quotes": [ 2, "double", "avoid-escape" ],

        // code arrangement matter
        "no-use-before-define": [ 2, { "functions": false } ],
        
        // make it meaningful
        "prefer-const": 1,
        
        
        // keep it simple
        "complexity": [ 1, 5 ],
        
        // react
        "react/prefer-es6-class": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-curly-spacing": [ 2, "always" ],
        "react/jsx-indent": [ 2, 4 ],
        "react/prefer-stateless-function": 0
    },
    "overrides": [
        {
          "files": ["*.test.js","*.spec.js", "serviceWorker.js"],
          "rules": {
            "no-unused-expressions": "off",
            "no-undef": 0,
            "no-param-reassign": 0,
            "max-len": 0,
            "complexity": 0,
          }
        }
      ]
};