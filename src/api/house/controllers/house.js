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
          price: ctx?.request?.body?.data?.price,
          status: ctx?.request?.body?.data?.status,
          users: ctx.state.user.id,
          state: ctx?.request?.body?.data?.state,
          LGA: ctx?.request?.body?.data?.lga,
          landmark: ctx?.request?.body?.data?.landmark,
          title: ctx?.request?.body?.data?.title,
          bedroom: ctx?.request?.body?.data?.bedrooms,
          bathroom: ctx?.request?.body?.data?.bathrooms,
          streetName: ctx?.request?.body?.data?.streetName,
          city: ctx?.request?.body?.data?.city,
          latitude: ctx?.request?.body?.data?.latitude,
          longititude: ctx?.request?.body?.data?.longititude,
          description: ctx?.request?.body?.data?.description,
          videoUrl: ctx?.request?.body?.data?.videoUrl,
          videoUrl_2: ctx?.request?.body?.data?.videoUrl_2,
          videoUrl_3: ctx?.request?.body?.data?.videoUrl_3,
          cloudinary_image: ctx?.request?.body?.data?.cloudinary_image,
        },
      });

      return house;
    } catch (err) {
      ctx.response.status = 500;
      return {
        error: { message: "There was a problem creating the charge" },
      };
    }
  },
}));
