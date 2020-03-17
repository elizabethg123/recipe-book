<template>
<div class="wrapper">
  <div class="recipes">
    <div class="title">
      <h1>Favorites</h1>
    </div>
    <div class="recipe" v-for="(recipe, index) in favorites" :key="recipe.title">
      <div class="info">
      <router-link :to="{path: '/recipe/'+recipe.title }">
        <div class="recipePost">
          <h2>{{recipe.title}}</h2>
          <p>{{recipe.desc}}</p>
        </div>
      </router-link>
      <button class="auto" @click="removeFromCart(index)">Remove Item</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'Favorites',
  props: {
    favorites: Array
  },
  methods: {
    removeFromCart(index){
     this.$root.$data.favorites.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.wrapper {
  align-items: center;
  justify-content: center;
}

recipes {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.recipePost {
  background: #FFDA74;
  padding: 10px;
  color: black;
  text-align: center;
}

.title {
  margin-left: 25px;
}

.recipe {
  margin: 10px;
}

.info {
  color: #000;
  padding: 5px 20px;
}

button {
  height: 30px;
  border-color: black;
  margin-top: 5px;
}


</style>
