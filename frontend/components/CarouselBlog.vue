<template>
  <div class="relative flex items-center justify-center w-full dark:text-gray-50">
    <button aria-label="Slide back" type="button" class="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-400 focus:ring focus:ring-offset-gray-900 focus:ring-opacity-50" @click="prevSlide">
      <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
        <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button>
    <!-- blogs -->
    <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
      <div class="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
        <div v-for="(blog, index) in blogs" :key="blog.id" class="relative flex flex-shrink-0 w-full sm:w-auto">
          <router-link :to="{ name: 'id', params: { id: blog.id } }" class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
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
    <button aria-label="Slide forward" id="next" class="absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-400 focus:ring focus:ring-offset-gray-900 focus:ring-opacity-50" @click="nextSlide">
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
        <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button>
  </div>
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
