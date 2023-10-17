<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Navbar</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/about">about</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/newpage">NewPage</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <img alt="Vue logo" class="logo d-block mx-auto" src="@/assets/logo.svg" width="1024" height="480" />
  <div class="container">
    <div class="row">
      <div class="col mx-auto">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
