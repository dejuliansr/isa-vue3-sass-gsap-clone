<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const sponsorsRef = ref(null);

const logos = [
  '/src/assets/images/advires.jpg',
  '/src/assets/images/ovidwind.png',
  '/src/assets/images/tbsindustry.png',
  '/src/assets/images/accurl.png',
  '/src/assets/images/laudis.png',
  '/src/assets/images/kickbite.png',
];

onMounted(() => {
  gsap.from('.logo', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: sponsorsRef.value,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
});
</script>

<template>
  <section class="partner-section" ref="partnerSection">
    <div class="container">
      <h2 class="title">Our partners</h2>
      <p class="subtitle">
        take care of our fund and help us with many questions
      </p>
      <div class="logos">
        <img
          v-for="(logo, index) in logos"
          :key="index"
          :src="logo"
          alt="partner logo"
          class="logo"
        />
      </div>
    </div>
  </section>
</template>
