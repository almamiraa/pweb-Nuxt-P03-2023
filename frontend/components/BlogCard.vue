<template>
  <section class="bg-slate-300 dark:text-gray-100">
    <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
      <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="blog in blogs" :key="blog.id" class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
          <router-link :to="{ name: 'id', params: { id: blog.id } }">
            <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500" :src="blog.Image" />
            <div class="p-6 space-y-2">
              <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">
                {{ blog.Title }}
              </h3>
              <span class="text-xs dark:text-gray-400">{{ formatDate(blog.Date) }}</span>
              <p>{{ blog.Description }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blogs: [],
    };
  },
  mounted() {
    this.fetchBlogs();
  },
  methods: {
    async fetchBlogs() {
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/blogs");
        this.blogs = response.data.docs;
        console.log("Request successful");
        console.log(response);
      } catch (error) {
        console.log("Error fetching blogs: ", error);
      }
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString(undefined, options);
    },
  },
};
</script>
