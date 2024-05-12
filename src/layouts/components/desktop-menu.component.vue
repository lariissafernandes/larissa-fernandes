<template>
  <div id="menu" class="flex flex-col items-center max-w-80 bg-base-200 ml-24 p-8 gap-4">
    <img src="@/assets/home-page/happy-music.svg" id="menu__happy-music" />
    <div
      style="
        font-variation-settings:
          'FILL' 1,
          'wght' 700,
          'GRAD' 0,
          'opsz' 48;
      "
      class="flex flex-col items-center w-full"
    >
      <div class="flex items-center w-full">
        <div class="divider divider-primary w-10" />
        <span class="material-symbols-outlined text-primary text-sm">circle</span>
        <div class="divider w-full" />
      </div>
      <div class="flex items-center -mt-2 gap-8">
        <span class="material-symbols-outlined text-secondary text-sm">favorite</span>
        <div class="flex items-center gap-4">
          <span class="material-symbols-outlined text-primary text-sm">skip_previous</span>
          <span class="material-symbols-outlined text-primary text-lg">play_arrow</span>
          <span class="material-symbols-outlined text-primary text-sm">skip_next</span>
        </div>
        <span class="material-symbols-outlined text-primary text-sm">replay</span>
      </div>
    </div>
    <iframe
      style="border-radius: 12px"
      src="https://open.spotify.com/embed/playlist/61qDWfqyxRH95yHgwa7oLl?utm_source=generator"
      width="100%"
      height="352"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  </div>
</template>

<style scoped lang="scss">
#menu {
  &__happy-music {
    max-width: 170px;
  }
}
</style>
