<template>
  <div id="root" class="flex flex-col h-screen">
    <div id="header-line" class="mb-48">
      <p id="header-line__text" class="text-center py-1">Dreaming of an escape from reality</p>
    </div>
    <div class="flex flex-row w-3/4 self-center bg-base-200" style="min-height: calc(100% - 384px)">
      <desktop-menu />
      <div id="main-container" class="w-full py-8 pl-8 pr-16">
        <router-view />
      </div>
    </div>
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
