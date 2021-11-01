<template>
    <td>{{ song.title }}</td>
    <td>{{ song.artist }}</td>
    <td>{{ ~~(song.length / 60) + ":" + (song.length % 60 < 10 ? "0" : "") + song.length % 60 }}</td>
</template>

<script>
export default {
  name: 'Song',
  props: {
    song: Object,
  },
}
</script>