/*
 *
 * Copyright (c) 2017 Matheus Medeiros Sarmento
 *
 */

const factory = require('../factory');

const validate = (data) => {
  if (data === undefined) {
    throw Object({ error: 'validation error', reason: 'no data was set' });
  }

  if (data.name === undefined) {
    throw Object({ error: 'validation error', reason: 'name field is undefined' });
  }

  if (data.allow === undefined) {
    throw Object({ error: 'validation error', reason: 'allow field is undefined' });
  }

  if (data.allow === true && data.version === undefined) {
    throw Object({ error: 'validation error', reason: 'version field is undefined' });
  }
};

const format = (data) => {
  validate(data);
  const packet = JSON.stringify(data);
  return factory.encapsulate(packet, factory.Id.LANGUAGE_SUPPORT);
};

module.exports = {
  validate,
  format
};
