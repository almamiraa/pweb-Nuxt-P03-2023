<template>
  <div class="p-5 mx-auto sm:p-10 md:p-16 bg-white dark:text-gray-100">
    <div v-if="blog" class="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
      <img :src="blog.Image" alt="" class="w-full h-60 sm:h-96 dark:bg-gray-500" />
      <div class="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
        <div class="space-y-2">
          <a rel="noopener noreferrer" class="inline-block text-2xl font-semibold sm:text-3xl">{{ blog.Title }}</a>
          <div class="flex justify-between items-center">
            <p class="text-xs dark:text-gray-400">
              By
              <a rel="noopener noreferrer" class="text-xs">{{ blog.Author }}</a>
            </p>
            <p class="text-xs dark:text-gray-400">
              <a rel="noopener noreferrer" class="text-xs">{{ formatDate(blog.Date) }}</a>
            </p>
          </div>
        </div>
        <div class="dark:text-gray-100" style="text-align: justify">
          <p>
            {{ blog.Content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: null, // To store the details of a specific blog
    };
  },
  async mounted() {
    this.fetchBlog();
  },
  methods: {
    async fetchBlog() {
      const blogId = this.$route.params.id;
      try {
        const response = await fetch(`http://127.0.0.1:3000/api/blogs/${blogId}`);
        const data = await response.json();
        this.blog = data;
        console.log(`http://127.0.0.1:3000/api/Blog/${blogId}`);
      } catch (error) {
        console.log("ga aman");
        console.error("Error fetching blogs:", error);
      }
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString(undefined, options);
    },
  },
};
</script>
