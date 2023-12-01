import payload from "payload";
/** @type {import('payload/types').CollectionConfig} */
const Blogs = {
  slug: "blog",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "postdate",
      type: "date",
      admin: {
        date: {
          displayFormat: "d MMM yyy",
          pickerAppearance: "dayOnly",
        },
      },
    },
    {
      name: "image",
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
