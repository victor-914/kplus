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
      // Create the order
      const land = await strapi.service("api::land.land").create({
        data: {
          price: ctx?.request?.body?.data?.price,
          status: ctx?.request?.body?.data?.status,
          users: ctx.state.user.id,
          state: ctx?.request?.body?.data?.state,
          LGA: ctx?.request?.body?.data?.lga,
          landmark: ctx?.request?.body?.data?.landmark,
          title: ctx?.request?.body?.data?.title,
          streetName: ctx?.request?.body?.data?.streetName,
          city: ctx?.request?.body?.data?.city,
          landSize: ctx?.request?.body?.data?.landSize,
          latitude: ctx?.request?.body?.data?.latitude,
          longititude: ctx?.request?.body?.data?.longititude,
          description: ctx?.request?.body?.data?.description,
          videoUrl: ctx?.request?.body?.data?.videoUrl,
          videoUrl_2: ctx?.request?.body?.data?.videoUrl_2,
          videoUrl_3: ctx?.request?.body?.data?.videoUrl_3,
          cloudinary_image: ctx?.request?.body?.data?.cloudinary_image,
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
}));
