<template>
  <AddSongForm @add-song="addSong"/>
</template>

<script>
import AddSongForm from "../components/AddSongForm";

export default {
  name: 'AddSong',
  components: {
    AddSongForm
  },
  methods: {
    async addSong(song) {
      console.log(song)
      const res = await fetch('http://localhost:8000/api/songs/add', {
        method: 'POST',
        body: JSON.stringify(song)
      })
    }
  }
}
</script>
