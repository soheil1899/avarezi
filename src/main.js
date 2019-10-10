import Vue from 'vue'
import App from './App.vue'


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

window.$ = require('jquery');
window.PlateList={
  1:{
    item:'الف',
    code:'01'
  },
  2:{
    item:'ب',
    code:'02'
  },
  3:{
    item:'پ',
    code:'03'
  },
  4:{
    item:'ت',
    code:'04'
  },
  5:{
    item:'ث',
    code:'05'
  },
  6:{
    item:'ج',
    code:'06'
  },
  7:{
    item:'چ',
    code:'07'
  },
  8:{
    item:'ح',
    code:'08'
  },
  9:{
    item:'خ',
    code:'09'
  },
  10:{
    item:'د',
    code:'10'
  },
  11:{
    item:'ذ',
    code:'11'
  },
  12:{
    item:'ر',
    code:'12'
  },
  13:{
    item:'ز',
    code:'13'
  },

  15:{
    item:'س',
    code:'15'
  },
  16:{
    item:'ش',
    code:'16'
  },
  17:{
    item:'ص',
    code:'17'
  },
  18:{
    item:'ض',
    code:'18'
  },
  19:{
    item:'ط',
    code:'19'
  },
  20:{
    item:'ظ',
    code:'20'
  },
  21:{
    item:'ع',
    code:'21'
  },
  22:{
    item:'غ',
    code:'22'
  },
  23:{
    item:'ف',
    code:'23'
  },
  24:{
    item:'ق',
    code:'24'
  },
  25:{
    item:'ک',
    code:'25'
  },
  26:{
    item:'گ',
    code:'26'
  },
  27:{
    item:'ل',
    code:'27'
  },
  28:{
    item:'م',
    code:'28'
  },
  29:{
    item:'ن',
    code:'29'
  },
  30:{
    item:'و',
    code:'30'
  },
  31:{
    item:'ه',
    code:'31'
  },
  32:{
    item:'ی',
    code:'32'
  },
  33:{
    item:'<i class="fas fa-wheelchair"></i>',
    code:'14'
  },
};

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
