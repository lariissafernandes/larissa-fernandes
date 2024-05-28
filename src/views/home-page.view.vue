<template>
  <div class="prose text-justify">
    <h2>Hello World :)</h2>
    <div class="grid grid-cols-2 gap-8">
      <div class="flex flex-col">
        <img
          src="@/assets/home-page/about-me_1.jpg"
          class="!m-0 aspect-video w-full object-cover"
        />
        <div class="divider divider-secondary w-20 self-center" />
        <p class="border border-primary p-2 text-center !my-0" id="about-me__text">
          Larissa <span class="text-secondary">•</span> 25 anos
          <span class="text-secondary">•</span> Potiguar
        </p>
        <div class="divider divider-secondary w-20 self-center" />
        <p class="!my-0 text-center">
          Oii! Muito prazer eu sou a <span class="text__highlight">Larissa</span>, uma dev front-end
          :)
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#about-me {
  &__text {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
}
</style>
