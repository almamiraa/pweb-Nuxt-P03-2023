import payload from "payload";

/** @type {import('payload/types').CollectionConfig} */
const Blogs = {
  slug: "Blogs",

  admin: {
    useAsTitle: "Title",
  },

  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },

  hooks: {
    afterOperation: [
      async (args) => {
        const collectionName = "Blogs"; // Nama koleksi (collection) di mana aksi terjadi
        const logAction = args.operation.charAt(0).toUpperCase() + args.operation.slice(1); // Capitalize operation

        // Hanya buat log untuk operasi create, update, dan delete
        if (["create", "update", "delete"].includes(args.operation)) {
          console.log("Operation:", args.operation);

          await payload.create({
            collection: "Logs",
            data: {
              Collection: collectionName,
              Action: logAction,
              Timestamp: new Date(),
            },
          });
        }
      },
    ],
  },

  fields: [
    {
      name: "Title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "Author",
      label: "Author",
      type: "text",
      required: true,
    },
    {
      name: "Date",
      label: "Date",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d MMM yyy",
        },
      },
      required: true,
    },
    {
      name: "Image",
      label: "Image",
      type: "text",
      required: true,
    },
    {
      name: "Description",
      label: "Description",
      type: "textarea",
      required: true,
    },
    {
      name: "Content",
      label: "Content",
      type: "textarea",
      required: true,
    },
  ],
};

export default Blogs;
