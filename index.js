/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-template-module-name-remover',

  setupPreprocessorRegistry(type, registry) {
    if (process.env.EMBER_ENV !== 'production') { return; }


    registry.add('htmlbars-ast-plugin', {
      name: 'module-name-remover',
      plugin: class ModuleNameRemover {
        constructor(options) {
          if (options.meta && options.meta.moduleName) {
            delete options.meta.moduleName;
          }
        }

        transform(ast) { return ast; }
      },

      baseDir: function() {
        return __dirname;
      }
    });
  }
};
