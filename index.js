const { parsed } = require('dotenv').config();
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

if (!parsed || !parsed.ws) {
  log.ERROR_FATAL('Configuration object "ws" not found. Check your ".env" file.');
  process.exit(1);
}

const parsedWsConfig = JSON.parse(parsed.ws);
Object.keys(parsedWsConfig).forEach(wsPropertyKey => addProperty(wsPropertyKey, parsedWsConfig[wsPropertyKey]));

module.exports = {
  context: {
    properties: {
      add: addProperty,
      get: getProperty,
    },
  },
  log,
};
