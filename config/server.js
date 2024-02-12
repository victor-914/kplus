module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("PUBLIC_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  settings: {
    parser: {
      enabled: true,
      multipart: true,
      formLimit: "900mb", // modify here limit of the form body
      jsonLimit: "900mb", // modify here limit of the JSON body
      textLimit: "900mb", // modify here limit of the text body

      formidable: {
        maxFileSize: 200 * 1024 * 1024, // Adjust the maxFileSize according to your needs
      },
    },
  },
});
