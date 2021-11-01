<template>
  <div class="d-flex justify-content-center">
    <form @submit="onSubmit" class="col-md-4">
      <div class="align-items-center">
        <div class="col-auto m-2">
          <label class="sr-only">Title</label>
          <input type="text" class="form-control" v-model="title"
                 placeholder="Song title" name="title" required>
        </div>
        <div class="col-auto m-2">
          <label class="sr-only">Title</label>
          <input type="text" class="form-control" v-model="artist"
                 placeholder="Song artist" name="artist" required>
        </div>
        <div class="col-auto m-2">
          <label class="sr-only">Length (seconds)</label>
          <input type="text" class="form-control" v-model="length"
                 placeholder="Song length in seconds" name="title" required>
        </div>
        <div class="col-auto m-2">
          <button type="submit" class="btn btn-success">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddSongForm",
  data() {
    return {
      title: '',
      artist: '',
      length: '',
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      if (!this.title) {
        alert('Please add song title')
        return
      }

      if (!this.artist) {
        alert('Please add song artist')
        return
      }

      if (!this.length) {
        alert('Please add song length')
        return
      }

      const reg = '^([0-5][0-9]|60):([0-5][0-9])$'
      if (!this.length.match(reg)) {
        alert('Invalid song length format! Use mm:ss')
        return
      }

      const arr = this.length.split(':')
      this.length = (parseInt(arr[0]) * 60) + parseInt(arr[1]);

      const newSong = {
        title: this.title,
        artist: this.artist,
        length: this.length
      }

      this.$emit('add-song', newSong)

      this.title = ''
      this.artist = ''
      this.length = ''
    }
  }
}
</script>