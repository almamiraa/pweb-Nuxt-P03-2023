<template>
  <footer>
    <div class="container mx-auto flex items-center justify-center py-4">
      <div>
        <p class="text-white">&copy; {{ currentYear }} Kelompok Pemweb P03</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
footer {
  background-color: #9cb5d1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: auto;
}
</style>
