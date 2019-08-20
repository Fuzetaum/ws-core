# Warning note

This library is still under development. We do **not** recommend using it yet since its features and/or interfaces might change in a nightly basis.

Also, it has not been tested properly yet. Test cases are still being designed as the library evolves, so its stability can't be guaranteed for now.

If you still want to use it, consider checking this library's behavior when debugging your project.

# About

Implementation of minor helper features that assist setting up a project from scratch.

This library provides the following features:

* Easy sharing of environment variables via centralized *context* objects;
* Easy configuration of environment variables using a JSON file;
* Augmented logging methods that help troubleshoot problems in the logs visually.

# Library capabilities

## Setup

When using this library, it assumes you will need the context sharing and management across your application. Thus, it requires that you create a value where it can read environment values from, even if it's an empty file.

To do so, create a file `application.json` in your project's root. You can specify any environment configuration values you want inside it, and the library will define a set of static properties storing these values in memory. If everything is ok, you will see a log message telling that every single property defined in your `application.json` file was created in memory as a *bean*.

## Getting a context property

To access context properties, use the `context.properties` object:

```
const { context } = require('@ricardofuzeto/ws-core');
// context.properties

// or...
const { properties } = require('@ricardofuzeto/ws-core').context;
// properties
```

The `property` object has several methods to handle context itself. To read properties, use `get`:

```
context.get('envVar'); // some value

context.get('envVar').innerProperty; // some other value
```

## Setting a new property

In order to set a new property in the application's context, use the `add` method:

```
properties.add('prop1', 'value');
properties.get('prop1'); // value

properties.add('prop2', { value: 'some value' });
properties.get('prop2'); // { value: 'some value' }
```

Here we have a very important concept to pay attention: all context properties are **unique** and **final**. This means there can't be two properties with same name, and once you assign a value to them it won't change.

## Augmented logging

The following example shows how to use the library's augmented logging:

```
const { log } = require('@ricardofuzeto/ws-core');

// Regular style
// [DD/MM/YYYY h:mm:ss][LOG] some text
log.LOG('some text');

// Bold yellow text
// [DD/MM/YYYY h:mm:ss][WARNING] some text
log.WARNING('some text');

// Bold red text
// [DD/MM/YYYY h:mm:ss][ERROR] some text
log.ERROR('some text');

// Bold white text with red background
// [DD/MM/YYYY h:mm:ss][ERROR] some text
log.ERROR_FATAL('some text');
```

# Contributors

Ricardo Fuzeto ([email](mailto:ricardofuzeto@gmail.com?subject=About%20ws-boot)): idea conception and initial development stages