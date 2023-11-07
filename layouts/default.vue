<template>
  <Head>
    <Title>OOMORI.LUNCH</Title>
    <Meta name="description" :content="'renoinn\'s blog'" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;600&display=swap" rel="stylesheet">
  </Head>
  <div class="container max-w-screen-lg mx-auto px-5 bg-white">
    <nb-header class="pt-8 pb-24" />
    <slot />
    <nb-menu />
    <NbFooter />
  </div>
</template>

<style></style>
