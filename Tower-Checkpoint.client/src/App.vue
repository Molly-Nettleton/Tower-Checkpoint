<template>

  <div class="container-fluid bg-grey maincnt">
    <div class="row">
      <div class="col-11">
        <TitleBar />

        <main class="ms-3 mb-4">
          <router-view />
        </main>
      </div>

      <div class="col-1 text-center sidebar">
        <SideBar />
      </div>

    </div>
  </div>

  <div class="offcanvas offcanvas-end bg-grey" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
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

.titlebar {
  font-size: 60px
}

*::-webkit-scrollbar {
  width: 13px;
  width: 13px;
}


*::-webkit-scrollbar-track {
  border-radius: 7px;
  background-color: #474C61;
  cursor: pointer;
}

*::-webkit-scrollbar-thumb {
  width: 100px;
  border-radius: 10px;
  background-color: #79E7AB;
}

.maincnt {
  margin-right: 10px;
}

.sidebar {
background: rgb(64, 92, 245);
  background: linear-gradient(0deg, rgba(64, 92, 245, 1) 26%, rgba(42, 45, 58, 1) 82%);
}
</style>
