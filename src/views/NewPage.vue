<template>
  <div class="row">
    <div class="col-12 text-center mb-5">
      <h1>NewPage</h1>
    </div>
    <div class="col-4">
      <div class="list-group">
        <router-link to="/newpage/componentA" class="list-group-item list-group-item-action " aria-current="true">
          ComponentA
        </router-link>
        <router-link to="/newpage/componentB" class="list-group-item list-group-item-action " aria-current="true">
          ComponentB
        </router-link>
        <router-link to="/newpage/namedview/AtoB" class="list-group-item list-group-item-action " aria-current="true">
          AtoB
        </router-link>
        <router-link to="/newpage/namedview/BtoA" class="list-group-item list-group-item-action " aria-current="true">
          BtoA
        </router-link>
       
      </div>
    </div>
    <div class="col-8">
        <router-view></router-view>
    </div>
  </div>
</template>