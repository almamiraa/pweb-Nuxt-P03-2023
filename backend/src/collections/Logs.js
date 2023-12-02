import payload from "payload";

/** @type {import('payload/types').CollectionConfig} */
const Logs = {
  slug: "Logs",

  admin: {
    useAsTitle: "name",
  },

  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },

  fields: [
    {
      name: "Collection",
      label: "Collection",
      type: "text",
      required: true,
    },
    {
      name: "Action",
      label: "Action",
      type: "text",
      required: true,
    },
    {
      name: "Timestamp",
      label: "Timestamp",
      type: "date",
      required: true,
    },
  ],
};

export default Logs;
