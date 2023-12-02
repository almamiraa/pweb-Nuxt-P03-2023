<template>
  <div v-for="n in 1">
    <BlogCard :blogid="blogid" :title="title" :picture="picture" :date="date" :content="content" />
  </div>
</template>

<script>
const blogid = ref(123);
const title = ref("In usu laoreet repudiare legendos");
const picture = ref("https://source.unsplash.com/random/480x360?1");
const date = ref("January 21, 2021");
const content = ref("Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.");
</script>
