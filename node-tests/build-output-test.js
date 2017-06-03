/* globals QUnit */

const execa = require('execa');
const co = require('co');
const fs = require('fs');

const describe = QUnit.module;
const it = QUnit.test;

describe('build output', function() {
  function buildIncludes(moduleName) {
    // fingerprinting is disabled, no need to "find" the prod asset
    let contents = fs.readFileSync('dist/assets/dummy.js', { encoding: 'utf-8' });

    return contents.includes(moduleName);
  }

  it('should not modify development build output', co.wrap(function* (assert) {
    yield execa('ember', ['build']);

    assert.ok(buildIncludes('dummy/templates/application.hbs'))
  }));

  it('should remove module names from production build output', co.wrap(function* (assert) {
    yield execa('ember', ['build', '--environment=production']);

    assert.ok(!buildIncludes('dummy/templates/application.hbs'))
  }));
});
