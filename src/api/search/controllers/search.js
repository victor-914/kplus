module.exports = {
  async search(ctx) {

    const land = await strapi.entityService.findMany("api::land.land", {
      filters: {
        $or: [
          {
            title: {
              $containsi: ctx.request.query.keyword,
            },
          },

          {
            state: {
              $containsi: ctx.request.query.keyword,
            },
          },

          {
            LGA: {
              $containsi: ctx.request.query.keyword,
            },
          },

          {
            streetName: {
              $containsi: ctx.request.query.keyword,
            },
          },

          {
            city: {
              $containsi: ctx.request.query.keyword,
            },
          },

          {
            landmark: {
              $containsi: ctx.request.query.keyword,
            },
          },
        ],
      },
      populate: {
        image: {
          fields: ["url"],
        },
        video: {
          fields: ["url"],
        },
      },
    });

    const house = await strapi.entityService.findMany("api::house.house", {
      filters: {
        $or: [
          {
            title: {
              $containsi: ctx.request.query.keyword,
            },
          },

          {
            state: {
              $containsi: ctx.request.query.keyword,
            },
          },

          {
            LGA: {
              $containsi: ctx.request.query.keyword,
            },
          },

          {
            streetName: {
              $containsi: ctx.request.query.keyword,
            },
          },

          {
            city: {
              $containsi: ctx.request.query.keyword,
            },
          },

          {
            landmark: {
              $containsi: ctx.request.query.keyword,
            },
          },
        ],
      },
      populate: {
        image: {
          fields: ["url"],
        },
        video: {
          fields: ["url"],
        },
      },
    });

    let data = {
      land: land,
      house: house,
    };

    return data;
  },
};
