import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const jmbg = require('../../node_modules/jmbg/index');

export default new Vuex.Store({
  state: {
    jmbg_number: '',
    jmbg_data: ''
  },
  mutations: {
    snimiJMBG (state, jmbg_number) {
      state.jmbg_number = jmbg_number
    },
    resetJMBG (state, jmbg_number) {
      state.jmbg_number = ''
      state.jmbg_data = ''
    },
    decodeJMBG (state, jmbg_number) {
      state.jmbg_data = ''
      let jmbg_valid = jmbg.isValid(jmbg_number)
      if(jmbg_valid) {
        state.jmbg_data = jmbg.decode(jmbg_number)
      } else {
        state.jmbg_data = {
          err: true, 
          data: {
            year: ' ', 
            month: ' ', 
            day: ' ', 
            gender: ' ', 
            region: ' ', 
            place: ' '
          }
        }  
      }
    }
  },
  actions: {

  },
  getters: { 
    
    jmbg_number: state => {
      return state.jmbg_number
    },
    jmbg_count: state => {
      return state.jmbg_number.length
    }
  }
})
