'use strict';

/**
 * slice router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::slice.slice');
