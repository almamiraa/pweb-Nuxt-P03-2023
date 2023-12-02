import payload from "payload";

/** @type {import('payload/types').CollectionConfig} */
const Blogs = {
  slug: "blogs",
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },

  hooks: {
    afterOperation: [
      async (args) => {
        const collectionName = "blogs";
        const logAction = args.operation.charAt(0).toUpperCase() + args.operation.slice(1);

        if (["create", "update", "delete"].includes(args.operation)) {
          console.log("Operation:", args.operation);

          await payload.create({
            collection: "Logs",
            data: {
              name: args.result.title,
              timestamp: new Date(),
              action: `logAction`,
            },
          });
        }
      },
    ],
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "date",
      type: "date",
      admin: {
        date: {
          displayFormat: "d MMM yyy",
          pickerAppearance: "dayOnly",
        },
      },
    },
    {
      name: "picture",
      type: "text",
      required: true,
    },
    {
      name: "author",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "textarea",
      required: true,
    },
    {
      name: "detailcontent",
      type: "textarea",
      required: true,
    },
  ],
};

export default Blogs;
