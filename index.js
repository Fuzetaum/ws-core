const fs = require('fs');
const log = require('./src/logs');

const properties = new Map();

const addProperty = (id, value) => {
  const previousValue = properties.get(id);
  if (previousValue) {
    log.ERROR(`Attempted to re-register bean with id "${id}". Operation aborted`);
    return;
  }
  log.LOG(`Registered bean with id "${id}"`);
  properties.set(id, (typeof value === 'string') ? value : {
    ...value,
    toString: function() { return JSON.stringify(this); },
  });
}

const getProperty = (id) => properties.get(id);

let wsData;
try {
  wsData = JSON.parse(fs.readFileSync('application.json', 'utf-8'));
} catch (error) {
  log.ERROR_FATAL('An error occurred while reading the "application.json" file');
  console.error(error);
  process.exit(1);
}

Object.keys(wsData).forEach(wsPropertyKey => addProperty(wsPropertyKey, wsData[wsPropertyKey]));

module.exports = {
  context: {
    properties: {
      add: addProperty,
      get: getProperty,
    },
  },
  log,
};
