<template>
  <div id="app">
    <div>
    <main>
       <router-view></router-view>
    </main>
  </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  /* eslint-disable */
  components:{
  },

  data() {
    return {
      isLoading: true
    }
  },
  beforeCreate(){
    console.log(' Before Created')
     
  },

  beforeMount(){
    console.log(' Before Mount')
  },
  mounted () {
      console.log('Mount')
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  },

}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

main{
  /* margin-top: 2em; */
}

.icon-bar {
  position: fixed;
  top: 30%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.icon-bar a {
  display: block;
  text-align: center;
  padding: 5px;
  padding-top: 6px;
  transition: all 0.3s ease;
  color: white;
  font-size: 10px;
}

.icon-bar a:hover {
  color: gray
}

.facebook {
  background-color: #f07229;
  color: white;
}

.twitter {
  background-color: #f07229;
  color: white;
}

.linkedin {
  background-color: #f07229;
  color: white;
}

.youtube {
  background-color: #f07229;
  color: white;
}
.whatsapp{
  background-color: #f07229;
  color: white;
}

@media only screen and (max-width: 780px) {
  .icon-bar {
  display: flex;
  position: fixed;
  top: 10%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.icon-bar a {
  display: flex;
  text-align: center;
  padding: 2px;
  transition: all 0.3s ease;
  color: white;
  font-size: 10px;
}

 
}



</style>
