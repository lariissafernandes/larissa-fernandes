<template>
  <div id="menu" class="flex flex-col items-center w-96 bg-base-200 p-8 gap-4">
    <img
      src="@/assets/home-page/music-menu.jpg"
      id="menu__happy-music"
      style="width: 100%; aspect-ratio: 16/9; object-fit: cover"
    />
    <div class="flex flex-col items-center w-full icon__fill">
      <div class="flex items-center w-full">
        <div class="divider divider-primary w-10" />
        <span class="material-symbols-outlined text-primary text-sm">circle</span>
        <div class="divider w-full" />
      </div>
      <div class="flex items-center -mt-2 gap-8">
        <span class="material-symbols-outlined text-secondary text-sm">favorite</span>
        <div class="flex items-center gap-4">
          <span class="material-symbols-outlined text-primary text-sm">skip_previous</span>
          <span class="swap-off fill-current material-symbols-outlined text-primary text-lg">
            play_arrow
          </span>

          <span class="material-symbols-outlined text-primary text-sm">skip_next</span>
        </div>
        <span class="material-symbols-outlined text-primary text-sm">replay</span>
      </div>
    </div>
    <div>
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/playlist/61qDWfqyxRH95yHgwa7oLl?utm_source=generator"
        width="340"
        height="80"
        loading="lazy"
      />
    </div>
  </div>
</template>
