<template>
  <section class="bg-gray-100 dark:text-gray-100">
    <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
      <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <nuxt-link to="${blogid}" class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
          <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
          <div class="p-6 space-y-2">
            <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">
              <!-- Isi judul dengan teks yang sesuai -->
              In usu laoreet repudiare legendos
            </h3>
            <span class="text-xs dark:text-gray-400">January 21, 2021</span>
            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
          </div>
        </nuxt-link>
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
        const response = await axios.get("http://localhost:3000/api/blogs");
        this.blogs = response.data.docs;
        console.log("Request successful");
      } catch (error) {
        console.log("Error fetching blogs: ", error);
      }
    },
  },
};
</script>
