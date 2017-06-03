# ember-template-module-name-remover

Remove module names from compiled template meta.

By default, Ember adds the full moduleName into all compiled templates. This
functionality aids in debug messages (deprecations, assertions, etc), and 
supports the local lookup feature (which has not been enabled yet).

This addon removes the module name from production builds (where it is not
needed for assert/deprecation messaging).

## Installation / Usage

This addon simply needs to be installed to be enabled:

```
ember install ember-template-module-name-remover
```

## Addon Development

### Installation

* `git clone <repository-url>` this repository
* `cd ember-template-module-name-remover`
* `npm install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
