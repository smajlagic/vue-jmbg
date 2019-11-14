<template>
  <div class="about">
    <div>
      <b-jumbotron header="Vue JMBG" lead="Vue.js analiza jedinstvenog matičnog broja građana">
        <p>Bosna i Hercegovina, Crna Gora, Hrvatska, Srbija, Sjeverna Makedonija i Slovenija.</p>
        <b-button variant="outline-primary" class="pr-3" @click="homeClick"><i class="fas fa-chevron-left mr-2 fa-xs"></i> Idi nazad</b-button>
      </b-jumbotron>
      
    <div class="w-75 mx-auto">
        <b-card title="JMBG" sub-title="Jedinstveni matični broj građana">
          <br>
          <b-card-text>
             Kao identifikacijski broj, uveden je 31. decembra 1976. i dodjeljivan je svim novorođenim građanima tadašnje SFRJ. Svi ranije rođeni građani također su dobili taj broj, koji je ostao u upotrebi u svim novonastalim državama nakon raspada SFRJ.
          </b-card-text>

          <b-card-text>
            Sastoji se od trinaest brojeva, u formi<br>
            <b-badge variant="primary">DD</b-badge>
            <b-badge variant="secondary">MM</b-badge>
            <b-badge variant="success">GGG</b-badge>
            <b-badge variant="danger">RR</b-badge>
            <b-badge variant="warning">BBB</b-badge>
            <b-badge variant="info">K</b-badge>
            <br>gdje je legenda:
            <br><br>
            <b-list-group class="w-responsive mx-auto w-auto">
              <b-list-group-item class="d-flex justify-content-between align-items-start">
                Dan rođenja
                <b-badge variant="primary" pill>DD</b-badge>
              </b-list-group-item>
              <b-list-group-item class="d-flex justify-content-between align-items-start">
                Mjesec rođenja
                <b-badge variant="secondary" pill>MM</b-badge>
              </b-list-group-item>
              <b-list-group-item class="d-flex justify-content-between align-items-start">
                Posljednja tri broja godine rođenja
                <b-badge variant="success" pill>GGG</b-badge>
              </b-list-group-item>
              <b-list-group-item class="d-flex justify-content-between align-items-start">
                Politički region rođenja<br>(za građane rođene prije 1977. godine politički region trenutnog mjesta prebivališta; <br>za Srbiju od 70 do 79),
                <b-badge variant="danger" pill>RR</b-badge>
              </b-list-group-item>
              <b-list-group-item class="d-flex justify-content-between align-items-start">
                Jedinstveni broj<br>(000–499 muškarci, 500–999 žene)
                <b-badge variant="warning" pill>BBB</b-badge>
              </b-list-group-item>
              <b-list-group-item class="d-flex justify-content-between align-items-start">
                Kontrolni broj
                <b-badge variant="info" pill>K</b-badge>
              </b-list-group-item>
            </b-list-group>

          </b-card-text>

          <a href="https://sh.wikipedia.org/wiki/Jedinstveni_mati%C4%8Dni_broj_gra%C4%91ana" target="_blank" class="card-link">Izvor: Wikipedia</a>
        </b-card>
      </div>
    </div>
    <br><br>
  </div>
</template>

<script>

export default {
  name: 'about',
  data(){
    return {
       jmbg_number: this.$store.getters.jmbg_number,
       jmbg_count: this.$store.getters.jmbg_count,
    }
  },
  methods: {
    homeClick(evt) {
      this.$router.push({ path:'/' });
    }
  }
}
</script>
