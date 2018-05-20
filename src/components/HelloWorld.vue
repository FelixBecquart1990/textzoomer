<template>
<div class="dna" style="height:calc(100% + 50px)"  @click="fullScreen()">
  <div style="position:fixed;top:30px;color:white;font-family:arial; margin-left:10px;font-size:40px;text-shadow: 0px 4px #000000, 0px 2px #000000;">DNA & Genes</div>
    <div class="ma-2 pa-3" style=";position:fixed;top:100px;">
        <div class="gesture" style="z-index:999" @click="dialog = true"></div>
        <div class="gesturer"></div>
    <v-touch v-on:pinchout="remove" v-on:pinchin="add" style="overflow: scroll;;padding:12px;border-radius:6px;position:fixed;top:100px;right:10px;left:10px;bottom:10px; background-color:white">
<transition name="fade">
<span key="span-1" v-if="size>2">A section of DNA that contains instructions to make a protein is called a gene.</span>
</transition>
<transition name="fade">
<span key="span-2" v-if="size>=10"> Each gene has the sequence for at least one polypeptide.</span>
</transition>
<transition name="fade">
<span key="span-3" v-if="size>5"> Proteins form structures, and also form enzymes.</span>
</transition>
<transition name="fade">
<span key="span-4"> The enzymes do most of the work in cells.</span>
</transition>
<transition name="fade">
<span key="span-5" v-if="size>8"> Proteins are made out of smaller polypeptides, which are formed of amino acids.</span>
</transition>
<transition name="fade">
<span key="span-6" v-if="size>6"> To make a protein to do a particular job, the correct amino acids have to be joined up in the correct order.</span>
</transition>
<transition name="fade">
<span key="span-7" v-if="size>7"> Proteins are made by tiny machines in the cell called ribosomes.</span>
</transition>
<transition name="fade">
<span key="span-8" v-if="size>1"> Ribosomes are in the main body of the cell, but DNA is only in the nucleus of the cell.</span>
</transition>
<transition name="fade">
<span key="span-9" v-if="size>=10"> The codon is part of the DNA, but DNA never leaves the nucleus.</span>
</transition>
<transition name="fade">
<span key="span-10" v-if="size>9"> Because DNA cannot leave the nucleus, the cell makes a copy of the DNA sequence in RNA.</span>
</transition>
<transition name="fade">
<span key="span-11" v-if="size>8"> This is smaller and can get through the holes – pores – in the membrane of the nucleus and out into the cell.</span>
</transition>
<transition name="fade">
<span key="span-12" v-if="size>7"> Genes encoded in DNA are transcribed into messenger RNA (mRNA) by proteins such as RNA polymerase.</span>
</transition>
<transition name="fade">
<span key="span-13" v-if="size>3"> Mature mRNA is then used as a template for protein synthesis by the ribosome.</span>
</transition>
<transition name="fade">
<span key="span-14" v-if="size>3"> Ribosomes read codons, 'words' made of three base pairs that tell the ribosome which amino acid to add.</span>
</transition>
<transition name="fade">
<span key="span-15" v-if="size>4"> The ribosome scans along an mRNA, reading the code while it makes protein.</span>
</transition>
<transition name="fade">
<span key="span-16" v-if="size>9"> Another RNA called tRNA helps match the right amino acid to each codon.</span>
</transition>
</v-touch>
<v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title style="font-family:arial" class="headline">User experience experimentation</v-card-title>
        <v-card-text style="font-family:arial"><span style="color:red">&#9755; Don't pay attention to the quality of summerization.</span><span style="color:green"> The only prupose of this Web page is to experiment pinch gesture to develop or summerize any texts.</span><br>This UX innovation might be useful for articles, Wikipedia etc. <v-expansion-panel class="elevation-0"><v-expansion-panel-content>
      <div slot="header" style="font-family:arial;font-size:13px;margin-left:-22px;color:rgba(0,0,0,0.8)">More information</div>
      <v-card>
        <v-card-text style="font-family:arial">Click <a target="_blank" href="http://fastforwardlabs.github.io/luhn/">here</a> to understand how a text can be automaticaly summerized (that website is not responsive. Only available from desktop).<br>Obviously, summerization quality is still very poor today. But with AI, we can be sure that it won't take long to get hyper quality automatic summerization.</v-card-text>
      </v-card>
    </v-expansion-panel-content></v-expansion-panel></v-card-text>
    <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn style="font-family:arial" color="primary" flat="flat" @click.native="dialog = false">ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      size: 5,
      dialog: false
    };
  },
  mounted() {
    this.dialog = true;
  },
  methods: {
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
      this.size -= 0.2;
      if (this.size <= 0) {
        this.size = 0;
      }
    },
    remove: function() {
      this.size += 0.2;
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
  border: solid 2px rgba(255, 255, 255, 0.7);
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
.dna {
  background: url("../../static/source.gif") 0 0;
  background-position: center top;
  background-size: 100% auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
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
