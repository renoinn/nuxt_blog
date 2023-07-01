<template>
  <div class="container max-w-screen-lg mx-auto px-5 bg-white font-sans">
    <nb-header />
    <slot />
    <nb-menu />
  </div>
</template>

<style>
@font-face {
  font-family: 'OpenSans';
  font-style: normal;
  font-weight: 300;
  src: local('OpenSans'),
    url('~/public/fonts/OpenSans-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'OpenSans';
  font-style: normal;
  font-weight: 400;
  src: local('OpenSans'),
    url('~/public/fonts/OpenSans-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'OpenSans';
  font-style: normal;
  font-weight: 600;
  src: local('OpenSans'),
    url('~/public/fonts/OpenSans-Regular.ttf') format('truetype');
}
</style>
