<template>

<section class="container-fluid elevation-5 wordbox me-5 d-flex">

  <div class="col-4 p-2 m-1">
      <img class="eventimg img-fluid elevation-5" src="https://thiscatdoesnotexist.com/" alt="">
  </div>
    
    <div class="col-7 pt-4">
      <div class="col d-flex justify-content-between">
    <div><h4>product con</h4>Social Event Center</div>
    <div><h5>10th of month</h5>
    <p>time of event</p></div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos amet consequuntur magnam doloribus sit deleniti reiciendis eos, harum dolorum rem. Non in doloremque aliquam at, maiores nostrum aut impedit architecto! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde saepe labore ea facilis architecto, cum vitae quaerat sequi earum modi officiis recusandae asperiores, mollitia totam sed eligendi doloribus harum aliquam.</p>
    <div class="d-flex justify-content-between">  <div>100 spots left</div> <div><button class="btn btn-warning">Attend</button></div></div>
      </div>
</section>



</template>


<script>
export default {
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>
  // .attending{
  //   justify-content: flex-end;
  // display: flex;
  // align-items: flex-end;
  // }

.wordbox{
  background-color: royalblue;
  max-height: 500px;
}
</style>