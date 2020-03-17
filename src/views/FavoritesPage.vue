<template>
<div>
  <div class="wrapper">
    <Favorites :favorites="favorites" />
    <p v-show="favorites.length === 0">You have no recipes! Add something!</p>
  </div>
</div>
</template>

<script>
import Favorites from "../components/Favorites.vue"
export default {
  name: 'FavoritesPage',
  components: {
    Favorites
  },
  computed: {
    favorites() {
      return this.$root.$data.favorites;
    }
  }
}
</script>

<style scoped>
p {
  margin: 25px;
}
</style>
