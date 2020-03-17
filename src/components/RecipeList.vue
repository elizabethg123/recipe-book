<template>
<div class="wrapper">
  <div class="recipes">
    <div class="recipe" v-for="recipe in recipes" :key="recipe.title">
      <div class="info">
        <router-link :to="{path: '/recipe/'+recipe.title }">
          <div class="recipePost">
            <h2>{{recipe.title}}</h2>
            <p>{{recipe.desc}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'RecipeList',
  props: {
    recipes: Array,
    favorites: Array
  },
}
</script>

<style scoped>
wrapper {
  display: flex;
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

.recipe {
  margin: 10px;
}

.info {
  color: #000;
  padding: 5px 20px;
}

</style>
