<template>

  <div class="container-fluid bg-dark maincnt">
  <div class="row">
  <div class="col-11">
   <TitleBar/>

  <main class="ms-3 mb-4">
    <router-view />
  </main>
</div>

<div class="col-1 text-center bg-grey sidebar">
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
import TitleBar from "./components/TitleBar.vue"

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, Login, Wordbox, SideBar, TitleBar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.titlebar{
  font-size: 60px
}

::-webkit-scrollbar{
    display: none;
}

.maincnt{
  margin-left: 10px;
}


</style>
