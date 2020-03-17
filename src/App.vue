<template>
<div id="app">
  <div id="menu">
    <router-link to="/">
      <div id="brand">
        <h1>Cook & Create</h1>
      </div>
    </router-link>
  </div>
  <router-view />
  <footer>
    <a href="https://github.com/elizabethg123/recipe-book"> My GitHub Repository</a>
</footer>
</div>
</template>


<style>
@import url('https://fonts.googleapis.com/css?family=Bellota:700&display=swap');
* {
  font-family: 'Bellota', cursive;
  color: black;
  text-decoration: none;
}

#menu {
display: flex;
justify-content: center;
}

#brand {
  display: flex;
  justify-content: right;
}


#favorites {
  display: flex;
  justify-content: center;
}

.fa-star {
  color: #A0F1EF;
}

footer{
  position: fixed;
  margin-bottom: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
