<template>

  <div class="container-fluid bg-dark">
  <div class="row">
    
  <div class="col-11">
  
  <header>
    <!-- SECTION titlebar start -->
  <section class="container-fluid bg-dark">
    <div class="row justify-content-center">
      <div class="col-12 d-flex ps-3"><div  class="titlebar">T</div>
      <img src="src\assets\img\Vector.png" height="50" class="mt-4" alt="">
      <div class="titlebar">WER</div></div>
    </div>
  </section> 
  <!-- SECTION titlebar end -->
  </header>

  <main class="bg-dark ms-3 mb-4">
    <router-view />
  </main>


</div>

<div class="col-1 text-center">
 <SideBar/>
</div>

</div>
  </div>


</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import Login from "./components/Login.vue"
import Wordbox from "./components/Wordbox.vue"
import SideBar from "./components/SideBar.vue"

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, Login, Wordbox, SideBar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.titlebar{
  font-size: 60px
}

main{
  background-color: b;
}

</style>
