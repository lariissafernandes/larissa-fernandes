<template>
  <div id="root" class="h-screen">
    <div id="header-line" class="mb-52">
      <p id="header-line__text" class="text-center py-1">Dreaming of an escape from reality</p>
    </div>
    <desktop-menu />
    <!-- add area principal de conteudo -->
    <div id="main-container" class="bg-base-200 mx-24"></div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import DesktopMenu from './components/desktop-menu.component.vue'
</script>

<style scoped lang="scss">
#root {
  background: repeating-linear-gradient(
    to right,
    oklch(var(--b3)),
    oklch(var(--b3)) 20px,
    oklch(var(--b2)) 20px,
    oklch(var(--b2)) 40px
  );
}

#header-line {
  background-color: oklch(var(--s));

  &__text {
    font-size: 12px;
    font-weight: 800;
    color: oklch(var(--b1));
    letter-spacing: 5px;
    text-transform: uppercase;
  }
}
</style>
