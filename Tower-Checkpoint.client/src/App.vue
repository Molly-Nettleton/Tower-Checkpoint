<template>

  <div class="container-fluid bg-dark maincnt">
  <div class="row">
  <div class="col-11">
   <TitleBar/>

  <main class="ms-3 mb-4">
    <router-view />
  </main>
</div>

<div class="col-1 text-center sidebar">
 <SideBar/>
</div>

</div>
  </div>

<div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
    id="eventsCanvas" aria-labelledby="eventsCanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="eventsCanvasLabel">Add your Listing</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <CreateEvent />
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
import CreateEvent from "./components/CreateEvent.vue"

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, Login, Wordbox, SideBar, TitleBar, CreateEvent }
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
  margin-right: 10px;
}
.sidebar{
  background: linear-gradient(180deg, #474C61 0%, rgba(71, 76, 97, 0) 100%);
}

</style>
