<template>
  <div class="row justify-content-center">
    <div class="col-auto">
      <table class="table table-striped">
        <thead class="thead-dark">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Artist</th>
          <th scope="col">Length</th>
        </tr>
        </thead>
        <tbody>
          <tr :key="song.id" v-for="song in songs">
            <Song :song="song"/>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Song from './Song'

export default {
  name: 'Songs',
  props: {
    songs: Array,
  },
  components: {
    Song
  }
}
</script>