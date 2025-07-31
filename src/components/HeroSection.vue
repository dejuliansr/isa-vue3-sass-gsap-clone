<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const dogImages = [
  new URL('../assets/images/dog-1.svg', import.meta.url).href,
  new URL('../assets/images/dog-2.svg', import.meta.url).href,
];

const currentDogImage = ref(dogImages[0]);

onMounted(() => {
  const animateHero = () => {
    gsap.from('.dog-icon', {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.from('.heading-text', {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.from(['.subtitle', '.social-icons'], {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.2,
    });
  };

  ScrollTrigger.create({
    trigger: '.hero-section',
    start: 'top 80%',
    onEnter: () => animateHero(),
    onEnterBack: () => animateHero(),
    once: true,
  });

  let index = 0;
  setInterval(() => {
    gsap.to('.dog-icon', {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: 'power1.in',
      onComplete: () => {
        index = (index + 1) % dogImages.length;
        currentDogImage.value = dogImages[index];

        gsap.fromTo(
          '.dog-icon',
          { opacity: 0, y: -50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
          }
        );
      },
    });
  }, 4000);
});
</script>

<template>
  <section class="hero-section">
    <div class="content">
      <div class="top-row">
        <img
          :src="currentDogImage"
          alt="dog icon"
          class="dog-icon"
          key="dog-image"
        />
        <h1 class="heading-text">
          Innovative Solutions for Animals
        </h1>
      </div>

      <div class="bottom-row">
        <p class="subtitle">charity organization</p>
        <div class="social-icons">
          <a
            href="https://www.youtube.com/channel/UCflad3HMzVzumevfDEqJFFQ/featured"
            target="_blank"
            rel="noopener"
          >
            <img
              src="../assets/images/youtube.svg"
              alt="YouTube"
            />
          </a>
          <a
            href="https://www.instagram.com/isa.official.ua/"
            target="_blank"
            rel="noopener"
          >
            <img
              src="../assets/images/instagram.svg"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.facebook.com/isa.co.ua"
            target="_blank"
            rel="noopener"
          >
            <img
              src="../assets/images/facebook.svg"
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.patreon.com/isa_co_ua"
            target="_blank"
            rel="noopener"
          >
            <img
              src="../assets/images/patreon.svg"
              alt="Patreon"
            />
          </a>
          <a
            href="https://t.me/isa_co_ua"
            target="_blank"
            rel="noopener"
          >
            <img
              src="../assets/images/telegram.svg"
              alt="Telegram"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
