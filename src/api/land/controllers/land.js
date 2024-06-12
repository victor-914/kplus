"use strict";

/**
 * land controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::land.land", ({ strapi }) => ({
  async create(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized("You are not authorized!");
    }

    try {
      const land = await strapi.service("api::land.land").create({
        data: {
          price: ctx?.request?.body?.price,
          status: ctx?.request?.body?.status,
          user: ctx.state.user.id,
          state: ctx?.request?.body?.state,
          LGA: ctx?.request?.body?.lga,
          landmark: ctx?.request?.body?.landmark,
          title: ctx?.request?.body?.title,
          titleDocument: ctx?.request?.body?.titleDocument,
          streetName: ctx?.request?.body?.streetName,
          city: ctx?.request?.body?.city,
          landSize: ctx?.request?.body?.landSize,
          description: ctx?.request?.body?.description,
          videoUrl: ctx?.request?.body?.videoUrl,
          cloudinary_image: ctx?.request?.body?.cloudinary_image,
        },
      });

      return land;
    } catch (err) {
      ctx.response.status = 500;
      return {
        error: { message: "There was a problem creating the charge" },
      };
    }
  },

  async update(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized("You are not authorized!");
    }

    const { id } = ctx.params;

    try {
      let land = await strapi.service("api::land.land").findOne(id);

      if (!land) {
        return ctx.notFound("House not found");
      }

      land = await strapi.service("api::land.land").update(id, {
        data: {
          price: ctx?.request?.body?.price,
          status: ctx?.request?.body?.status,
          user: ctx.state.user.id,
          state: ctx?.request?.body?.state,
          LGA: ctx?.request?.body?.lga,
          landmark: ctx?.request?.body?.landmark,
          landSize: ctx?.request?.body?.landSize,
          title: ctx?.request?.body?.title,
          bedroom: ctx?.request?.body?.bedrooms,
          bathroom: ctx?.request?.body?.bathrooms,
          streetName: ctx?.request?.body?.streetName,
          city: ctx?.request?.body?.city,
          description: ctx?.request?.body?.description,
          videoUrl: ctx?.request?.body?.videoUrl,
          cloudinary_image: ctx?.request?.body?.cloudinary_image,
        },
      });

      return land;
    } catch (err) {
      ctx.response.status = 500;
      return {
        error: { message: "There was a problem updating the house" },
      };
    }
  },
}));
