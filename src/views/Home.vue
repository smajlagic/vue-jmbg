<template>
  <div class="home">
    
    <div>
      <b-jumbotron header="Vue JMBG" lead="Vue.js analiza jedinstvenog matičnog broja građana">
        <p>Bosna i Hercegovina, Crna Gora, Hrvatska, Srbija, Sjeverna Makedonija i Slovenija.</p>
        <b-button variant="outline-primary" class="pl-3" @click="aboutClick">Više informacija <i class="fas fa-chevron-right ml-2 fa-xs"></i></b-button>
      </b-jumbotron>
      
    </div>
    
    <b-form class="w-75 mx-auto" @submit="onSubmit" @reset="onReset">
      <p>
        <small><i class="fas fa-exclamation-triangle"></i> Uneseni JMBG se ne snima. 
        <br>
        Informacije iz analize koristite na vlastitu odgovornost.</small>
        <br><br>
        <b-form-input 
          id="input-live"
          v-model="jmbg_no" 
          size="lg"
          type="text" 
          class="form-control"
          :required=true
          :state="jmbgState"
          aria-describedby="input-live-feedback"
          placeholder="Unesite 13 brojeva"
          :no-wheel=true
          :min="0"
          maxlength="13"
          autocomplete="off"
          :formatter="jmbgFormat"
        ></b-form-input>

        <b-form-invalid-feedback id="input-live-feedback">
          <p v-if="jmbg_no.length < 13">{{ 13 - jmbg_no.length }} brojeva preostalo za unos.</p>
        </b-form-invalid-feedback>
      </p>

      <p>
        <b-progress v-if="jmbg_no.length == 13" :value="jmbg_no.length" :max="13" variant="success"></b-progress>
        <b-progress v-else :max="13" variant="success">
          <b-progress-bar v-if="jmbg_no.length < 13" :value="jmbg_no.length" variant="success"></b-progress-bar>
          <b-progress-bar  v-if="jmbg_no.length >= 13" :value="13" variant="success"></b-progress-bar>
          <b-progress-bar v-if="jmbg_no.length > 13" :value="jmbg_no.length-13" variant="danger"></b-progress-bar>
        </b-progress>
      </p>
      
      <p>
        <b-button class="mx-2" type="submit" :disabled="!jmbgState" variant="primary">
          <i class="fas fa-play"></i>
          Analiziraj
        </b-button>
        <b-button class="mx-2" type="reset" :disabled="jmbg_number.length === 0" variant="danger">
          <i class="fas fa-reply"></i>
          Ponovi
        </b-button>
      </p>

      <div v-if="jmbgState && jmbg_detalji && !jmbg_detalji.err">
        <b-card-group deck>
          <b-card :title="''+jmbg_detalji.data.day+'. '+jmbg_detalji.data.month+'. '+jmbg_detalji.data.year+'.'" header-tag="header" footer-tag="footer">
            <template v-slot:header>
              <h6 class="mb-0">Rezultat analize</h6>
            </template>
            <b-card-text>
              <small v-if="jmbg_detalji.data.gender === 'Male'">Spol: Muški</small>
              <br  v-if="jmbg_detalji.data.gender === 'Male'">
              <i class="fas fa-male" v-if="jmbg_detalji.data.gender === 'Male'"></i>
              <small v-if="jmbg_detalji.data.gender === 'Female'">Spol: Ženski</small>
              <br  v-if="jmbg_detalji.data.gender === 'Female'">
              <i class="fas fa-female" v-if="jmbg_detalji.data.gender === 'Female'"></i>
              <br><br>
              <p>{{ jmbg_detalji.data.place }},
              {{ jmbg_detalji.data.region }}</p>
            </b-card-text>
            <template v-slot:footer>
              JMBG: {{ jmbg_number }}
            </template>
          </b-card>
        </b-card-group>
      </div>
      <div v-else>
        <br>
        <p v-if="!jmbgState">Izgleda da JMBG nije ispravan ili unesen.</p>
      </div>
      <br><br>
    </b-form>

  </div>
</template>

<script>
// @ is an alias to /src
const jmbg = require('jmbg');

export default {
  name: 'home',
  data(){
    return {
       jmbg_number: this.$store.getters.jmbg_number,
       jmbg_count: this.$store.getters.jmbg_count,
       jmbg_detalji: '',
    }
  },
  computed: {
    jmbgState() {
      let state = this.jmbg_number.length === 13 ? true : false
      if(state) {
        state = jmbg.isValid(this.jmbg_number)
      }
      return state
    },

    jmbg_no: {
      get() {
        return this.jmbg_number
      },
      set(value) {
        this.jmbg_number = value
      }
    },

  },
  methods: {
    jmbgFormat(value, event) {
      const jmbg_no = value.replace(/\D/g,'')
      return jmbg_no
    },

    aboutClick(evt) {
      this.$router.push({ path:'about' });
    },

    onSubmit(evt) {
      evt.preventDefault()
      this.$store.commit('snimiJMBG', evt.target[0].value)
      this.$store.commit('decodeJMBG', evt.target[0].value)
      this.jmbg_detalji = this.$store.state.jmbg_data
    },

    onReset(evt) {
      evt.preventDefault()
      this.jmbg_number = ''
      this.jmbg_detalji = ''
      this.$store.commit('resetJMBG', evt.value)
    },

  }
}
</script>
