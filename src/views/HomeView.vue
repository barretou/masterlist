<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="my-4">All posts</h1>
        <div v-for="post in AllPosts" :key="post.id">
          <h1>{{ post.title }}</h1>
          <p><strong>User ID:</strong> {{ post.userId }}</p>
          <p><strong>Post ID:</strong> {{ post.id }}</p>
          <p><strong>Body:</strong> {{ post.body }}</p>
          <hr class="my-3">
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getAllPosts } from '@/services/requests/posts';

export default {
  data() {
    return {
      AllPosts: [],
    };
  },
  async mounted() {
    this.AllPosts = await getAllPosts();
  },
};
</script>
