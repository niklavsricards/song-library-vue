<template>
  <Songs :songs="songs"/>
</template>

<script>
import Songs from "../components/Songs";

export default {
  name: 'Home',
  components: {
    Songs
  },
  data() {
    return {
      songs: [],
    }
  },
  methods: {
    async fetchSongs() {
      const res = await fetch('http://localhost:8000/api/songs')
      return res.json();
    },
  },
  async created() {
    this.songs = await this.fetchSongs()
  },
}
</script>