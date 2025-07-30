<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  const button = document.querySelector('.donate-button');

  gsap.from(button, {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: 'power2.out',
  });

  button.addEventListener('mouseenter', () => {
    gsap.to(button, {
      x: 5,
      y: -5,
      duration: 0.3,
      ease: 'power2.out',
      boxShadow: '-4px 4px 0 white',
    });
  });

  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
      boxShadow: '0px 0px 0 white',
    });
  });
});

</script>

<template>
  <button class="donate-button">donate</button>
</template>
