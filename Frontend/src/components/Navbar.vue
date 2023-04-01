<template>
     <div id="nav">
    <router-link to="/Home">Home</router-link> |
    <router-link to="/clothes">clothes</router-link> | 
     <router-link to="/favorites">Favorites</router-link> <!-- add this line -->
  </div>
    <router-view/>
</template>
<style scoped>
#nav{
    padding: 33px;
font-size: 23px;
letter-spacing: 3px;
}
a{
    text-decoration: none;
    color:black
}
</style>