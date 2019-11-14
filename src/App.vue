<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  a,
  button,
  h1,
  p.lead {
    font-weight: 800;
  }

  button {
    i {
      font-size: 80%;
      margin-right: 10px;
      position: relative;
      top: -1px;
    }
  }

  .btn-primary.disabled, 
  .btn-primary:disabled,
  .btn-danger.disabled, 
  .btn-danger:disabled {
    background: #999;
    border-color: #999;
  }

  .list-group {
    .list-group-item {
      text-align: left;
    }
  }

  .card-text {
    i {
      font-size: 32px;
    }

    ul {
      list-style-position: inside; 
    }
  }
}
</style>
