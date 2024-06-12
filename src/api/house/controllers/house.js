// @ts-nocheck
"use strict";
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::house.house", ({ strapi }) => ({
  async create(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized("You are not authorized!");
    }

    try {
      // Create the order
      const house = await strapi.service("api::house.house").create({
        data: {
          price: ctx?.request?.body?.price,
          status: ctx?.request?.body?.status,
          user: ctx.state.user.id,
          state: ctx?.request?.body?.state,
          LGA: ctx?.request?.body?.lga,
          landmark: ctx?.request?.body?.landmark,
          title: ctx?.request?.body?.title,
          titleDocument: ctx?.request?.body?.titleDocument,
          bedroom: ctx?.request?.body?.bedrooms,
          bathroom: ctx?.request?.body?.bathrooms,
          streetName: ctx?.request?.body?.streetName,
          city: ctx?.request?.body?.city,
          description: ctx?.request?.body?.description,
          videoUrl: ctx?.request?.body?.videoUrl,
          cloudinary_image: ctx?.request?.body?.cloudinary_image,
        },
      });

      return house;
    } catch (err) {
      ctx.response.status = 500;
      return {
        error: { message: "There was a problem creating the Houses" },
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
      let house = await strapi.service("api::house.house").findOne(id);

      if (!house) {
        return ctx.notFound("House not found");
      }

      house = await strapi.service("api::house.house").update(id, {
        data: {
          price: ctx?.request?.body?.price,
          status: ctx?.request?.body?.status,
          user: ctx.state.user.id,
          state: ctx?.request?.body?.state,
          LGA: ctx?.request?.body?.lga,
          landmark: ctx?.request?.body?.landmark,
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

      return house;
    } catch (err) {
      ctx.response.status = 500;
      return {
        error: { message: "There was a problem updating the house" },
      };
    }
  },
}));
