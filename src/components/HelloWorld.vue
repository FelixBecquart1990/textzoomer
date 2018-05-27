<template>
<div @click="fullScreen">
    <div  class="gesturer"></div>

  <v-tooltip left>
      <div slot="activator" class="gesture" style="z-index:999"></div>

        <span style="color:white">Pinch the article text</span>
    </v-tooltip>
  <div style="padding:15px; border-bottom:solid 1px rgba(0,0,0,0.1)" >
    <svg class="svgIcon-use" width="138" height="27" viewBox="0 0 138 27"><path d="M130 27V16.96c0-3.26-.154-5.472-2.437-5.472-1.16 0-2.138.57-2.863 1.512.217.906.3 1.968.3 3.127 0 2.247.036 5.11 0 7.973 0 .472-.046.58.244.87L127 27h-8V16.96c0-3.297-.461-5.472-2.708-5.472-1.16 0-1.64.653-2.292 1.595V24.1c0 .472-.026.58.3.87L116 27h-8V11.56c0-.47-.07-.579-.36-.905L106 9h8v3.612c.906-2.537 2.437-4.112 5.372-4.112 2.682 0 4.494 1.466 5.255 4.257.834-2.392 3.008-4.257 6.053-4.257 3.588 0 5.32 2.626 5.32 7.627 0 2.392.036 5.11 0 7.973 0 .472.004.652.25.87L138 27h-8zm-27-3.045c0 .472-.149.617.178.906L105 27h-8v-4c-.906 2.465-2.956 4-5.637 4C87.775 27 86 24.39 86 19.461c0-2.391-.036-5 0-7.936 0-.471-.11-.58-.4-.87L84 9h8v9.628c0 3.225.269 5.4 2.298 5.4 1.16 0 2.086-.725 2.702-1.63V11.56c0-.471-.129-.58-.419-.906L95 9h8v14.955zM78.002.25A3.248 3.248 0 0 1 81.25 3.5 3.25 3.25 0 1 1 78.002.25zM75 27V11.56c0-.47.168-.579-.122-.905L73 9h8v15.1c0 .472-.01.678.24.9L83 27h-8zM64 11.706c-.507-.652-1.418-1.123-2.396-1.123-1.957 0-3.842 1.775-3.842 7.03 0 4.93 1.631 6.669 3.66 6.669.907 0 1.853-.436 2.578-1.378V11.706zm6 12.286c0 .47-.026.58.3.87L72 27h-8v-3.697C62.913 25.804 60.951 27 58.632 27 54.5 27 51.5 23.738 51.5 17.795c0-5.582 3.254-9.314 7.784-9.314 2.356 0 3.919 1.123 4.716 2.899V3.878c0-.471-.077-.617-.403-.906L62 1.305 70 .29v23.702zM43.9 16c.037-.471.037-.67.037-.815 0-4.747-.937-5.435-2.437-5.435-1.5 0-2.854.995-2.927 6.25h5.328zm-5.327 1c0 4.711 2.392 6.63 5.183 6.63 2.174 0 4.313-.943 5.509-3.335h.072c-.942 4.566-3.77 6.705-8.01 6.705-4.566 0-8.879-2.755-8.879-9.133 0-6.705 4.277-9.386 9.097-9.386 3.842 0 7.937 1.811 7.937 7.646 0 .109 0 .438-.036.873H38.573zM31.5 27h-12l2.39-2.646c.084-.084.11-.399.11-.87V7l-7.866 20L5.581 8.372C5.364 7.9 5.181 7.285 5 6.777V20.62c0 .58-.035.653.364 1.196L9 27H0l3.64-5.183c.399-.543.36-.616.36-1.196V6.27c0-.617.095-.69-.195-1.051L1 1h8.495l7.355 16.3L23.24 1h8.26l-2.2 2.75c-.326.326-.3.599-.3 1.106v18.629c0 .47.005.75.138.87L31.5 27z"></path></svg>
  </div>
  <!--img src="../../static/img.jpg" style="width:100%"/>
  <v-btn @click="add">add</v-btn>
  <v-btn @click="remove">remove</v-btn-->
  <div style="padding:18px">
    <h1 style="font-weight:bold;font-size:30px;margin-top:-20px;margin-bottom:10px;margin-top:0px">Zoom in or zoom out on the text bellow</h1>
    <v-touch style="min-height:400px;" v-on:pinchout="remove" v-on:pinchin="add" v-on:swipeup="swipeup" v-on:swipedown="swipedown">
      <div v-for="line in arrayComputed" :key="line+Math.random()" style="display:inline-block;">
          <span  v-if="size>=line.size" style="margin-right:4px; font-size:17px">
            {{ line.word }}
          </span>
      </div>
    </v-touch>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      size: 5,
      text:
        "Etenim si attendere diligenter, existimare vere de omni hac causa volueritis, sic constituetis, iudices, nec descensurum quemquam ad hanc accusationem fuisse, cui, utrum vellet, liceret, nec, cum descendisset, quicquam habiturum spei fuisse, nisi alicuius intolerabili libidine et nimis acerbo odio niteretur. Sed ego Atratino, humanissimo atque optimo adulescenti meo necessario, ignosco, qui habet excusationem vel pietatis vel necessitatis vel aetatis. Si voluit accusare, pietati tribuo, si iussus est, necessitati, si speravit aliquid, pueritiae. Ceteris non modo nihil ignoscendum, sed etiam acriter est resistendum. Quam ob rem id primum videamus, si placet, quatenus amor in amicitia progredi debeat. Numne, si Coriolanus habuit amicos, ferre contra patriam arma illi cum Coriolano debuerunt? num Vecellinum amici regnum adpetentem, num Maelium debuerunt iuvare? Nam quibusdam, quos audio sapientes habitos in Graecia, placuisse opinor mirabilia quaedam (sed nihil est quod illi non persequantur argutiis): partim fugiendas esse nimias amicitias, ne necesse sit unum sollicitum esse pro pluribus; satis superque esse sibi suarum cuique rerum, alienis nimis implicari molestum esse; commodissimum.",
      array: [],
      arrayComputed: []
    };
  },
  mounted() {
    this.array = this.text.split(" ");
    for (let word in this.array) {
      this.arrayComputed.push({
        word: this.array[word] + " ",
        size: Math.floor(Math.random() * 10) + 0.5
      });
    }
  },
  methods: {
    swipeup(){
      window.document.documentElement.scrollTop+=1000
    },
    swipedown(){
      window.document.documentElement.scrollTop-=1000
    },
    fullScreen() {
      // auto fullscreen
      var doc = window.document;
      var docEl = doc.documentElement;
      var requestFullScreen =
        docEl.requestFullscreen ||
        docEl.mozRequestFullScreen ||
        docEl.webkitRequestFullScreen ||
        docEl.msRequestFullscreen;
      if (
        !doc.fullscreenElement &&
        !doc.mozFullScreenElement &&
        !doc.webkitFullscreenElement &&
        !doc.msFullscreenElement
      ) {
        requestFullScreen.call(window.document.documentElement);
      }
    },
    add: function() {
      this.size -= 0.5;
      if (this.size <= 0.5) {
        this.size = 0.5;
      }
    },
    remove: function() {
      this.size += 0.5;
      if (this.size >= 10) {
        this.size = 10;
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.gesture {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background: url("../../static/pinch1.gif") no-repeat 0 0;
  background-size: 45px;
  position: fixed;
  top: 10px;
  right: 10px;
}
.gesturer {
  height: 55px;
  width: 55px;
  border-radius: 50%;
  position: fixed;
  top: 5px;
  right: 5px;
  border: solid 2px rgba(0, 0, 0, 0.1);
  animation: Test 4s infinite;
}
@keyframes Test {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

