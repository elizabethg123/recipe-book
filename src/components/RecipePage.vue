<template>
<div class="wrapper">
  <div class="recipes">
      <div class="info">
          <h1 id="title">{{recipe.title}}</h1>
          <h2>Rating: {{recipe.rating}}</h2>
          <button class="auto" @click="addToFavorites(recipe)">Add to Favorites</button>
          <h3>Ingredients</h3>
          <ul>
          <div class="ingredients" v-for="ingredient in recipe.ingredients" v-bind:key="ingredient">
            <li>{{ingredient}}</li>
          </div>
          </ul>

          <h3>Directions</h3>
          <ol>
          <div class="directions" v-for="direction in recipe.directions" v-bind:key="direction">
            <p>{{direction}}</p>
          </div>
          </ol>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'recipe',
  props: {
    recipes: Array,
    favorites: Array
  },
  computed: {
    recipe() {
      for(let i = 0; i <this.$root.$data.recipes.length; i++){
          if(this.$root.$data.recipes[i].title === this.$route.params.title){
            return this.$root.$data.recipes[i];
          }
      }
      return this.$root.$data.recipes[0];
    }
  },
  methods: {
    addToFavorites(recipe){
      let set = false;
      for (var i = 0; i < this.$root.$data.favorites.length; i++) {
        if (this.$root.$data.favorites[i].title === recipe.title){
          set = true;
        }
      }
      if(!set){
        this.$root.$data.favorites.push(recipe);
      }
    }
  },
}
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.recipes {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.recipe {
  margin: 10px;
  margin-top: 50px;
}

.info {
  color: #000;
  padding: 10px 30px;
}

.auto {
  margin-left: auto;
}

#title{
  background: #FFDA74;
  padding: 10px;
  text-align: center;
}
</style>
