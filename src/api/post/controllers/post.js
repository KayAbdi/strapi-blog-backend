'use strict';

/**
 *  post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) =>  ({
    // Method 1: Creating an entirely custom action
    async exampleAction(ctx) {
      try {
        ctx.body = 'ok';
      } catch (err) {
        ctx.body = err;
      }
    },
  
    // Method 2: Wrapping a core action (leaves core logic in place)
    async find(ctx) {
      // some custom logic here
      ctx.query = { ...ctx.query, local: 'en' }  // "/posts?publicationState=preview"
      console.log(ctx.query)
      // Calling the default core action
      const { data, meta } = await super.find(ctx);
  
      // some more custom logic
      meta.date = Date.now()
  
      return { data, meta };
    },
  
    // Method 3: Replacing a core action
    async findOne(ctx) {
        console.log(ctx.params)
      const { id } = ctx.params;
      const { query } = ctx;
  
      const entity = await strapi.service('api::post.post').findOne(id, query);
      console.log(entity)
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      console.log(sanitizedEntity)
  
      return this.transformResponse(sanitizedEntity);
    }
  }));