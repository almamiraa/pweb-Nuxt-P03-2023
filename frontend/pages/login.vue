<template>
  <!-- component -->
  <div class="flex h-screen w-full items-center justify-center bg-blue-100 bg-cover bg-no-repeat">
    <div class="rounded-xl bg-blue-900 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
      <div class="text-white">
        <div class="mb-8 flex flex-col items-center">
          <h1 class="mb-2 font-extrabold text-2xl">Login</h1>
          <span class="text-gray-300">Enter Your Email and Password</span>
        </div>

        <!-- form login -->
        <form action="#">
          <div class="mb-4 text-lg">
            <input class="rounded-3xl border-none dark:bg-gray-700 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="id@email.com" />
          </div>

          <div class="mb-4 text-lg">
            <input class="rounded-3xl border-none dark:bg-gray-700 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="*********" />
          </div>
          <!-- button login -->
          <div class="mt-8 flex justify-center text-lg text-black">
            <button type="submit" class="rounded-3xl bg-blue-300 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-purple-300">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
</script>
