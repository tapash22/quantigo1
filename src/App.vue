<template>
<div id="app">
    <div :class="theme === 'light' ? 'light-theme' : 'dark-theme'" class="main-body">
        <div class="nav">
          <h1>Video Annotation</h1>
            <label class="switch">
                <input type="checkbox" @click="changeTheam" checked>
                <span class="slider round"></span>
            </label>
        </div>
        <div class="video">
          <div class="vdo">
            <Video />
          </div>
          
        </div>
        
    </div>

</div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
import Video from './components/Video.vue';

export default defineComponent({
    name: 'App',
    components: {
        Video
    },
    data() {
        return {
            theme: 'light'
        }
    },

    methods: {
        changeTheam() {
            console.log('click')
            this.theme = this.theme === "dark" ? "light" : "dark";
        }
    }
});
</script>

<style scoped>
#app {
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
}

.main-body {
    height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
    position: relative;
}

.light-theme {
    background-color: white;
    color: black;
}

.dark-theme {
    background-color:rgb(61, 58, 58);
    color: white;
}

.main-body .nav {

  width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0;
    background: rgb(61, 58, 58);
    box-shadow: 0 0 10px red;
}
.main-body .nav h1{
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  margin-left: 50px;
}
.main-body .video{
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  position: relative;
}
.video .vdo{
  position: sticky;
  top: 0;
  left: 0;
  width: 70%;
  height: 80%;
}

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-right: 50px;
    margin-top: 10px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #2196F3;
}

input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>
