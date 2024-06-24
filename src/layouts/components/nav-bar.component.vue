<template>
  <div id="nav-bar" class="mt-6 mb-4">
    <button
      v-for="(tab, key) in tabs"
      class="px-4 nav-bar__text"
      :key="key"
      @click="$router.push({ name: tab.name })"
    >
      {{ tab.meta.title }}
      <hr class="nav-bar__bottom-border nav-bar__hover-animation" />
    </button>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
const tabs = router.getRoutes()
</script>

<style scoped lang="scss">
.nav-bar {
  &__text {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    &:hover {
      .nav-bar__hover-animation {
        width: calc(100% - 3px);
        transition: width 500ms linear;
      }
    }
  }
  &__bottom-border {
    border-color: oklch(var(--s));
    width: 0;
  }
}
</style>
