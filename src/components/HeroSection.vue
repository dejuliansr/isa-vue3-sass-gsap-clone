<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import youtube from '@/assets/images/youtube.svg';
import instagram from '@/assets/images/instagram.svg';
import facebook from '@/assets/images/facebook.svg';
import patreon from '@/assets/images/patreon.svg';
import telegram from '@/assets/images/telegram.svg';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'HeroSection',

  data() {
    return {
      dogImages: [
        new URL(
          '../assets/images/dog-1.svg',
          import.meta.url
        ).href,
        new URL(
          '../assets/images/dog-2.svg',
          import.meta.url
        ).href,
      ],
      youtube,
      instagram,
      facebook,
      patreon,
      telegram,
      currentDogImage: null,
      intervalId: null,
    };
  },

  mounted() {
    this.currentDogImage = this.dogImages[0];

    const animateHero = () => {
      gsap.fromTo(
        '.dog-icon',
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top 100%',
            toggleActions: 'restart none restart none',
          },
        }
      );

      gsap.fromTo(
        '.heading-text',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top 100%',
            toggleActions: 'restart none restart none',
          },
        }
      );

      gsap.fromTo(
        ['.social-desc', '.social-icons'],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top 100%',
            toggleActions: 'restart none restart none',
          },
        }
      );
    };

    ScrollTrigger.create({
      trigger: '.hero-section',
      start: 'top 100%',
      onEnter: () => animateHero(),
      onEnterBack: () => animateHero(),
    });

    let index = 0;
    this.intervalId = setInterval(() => {
      gsap.to('.dog-icon', {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: 'power1.in',
        onComplete: () => {
          index = (index + 1) % this.dogImages.length;
          this.currentDogImage = this.dogImages[index];

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
  },

  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
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
        <p class="social-desc">charity organization</p>
        <div class="social-icons">
          <a
            href="https://www.youtube.com/channel/UCflad3HMzVzumevfDEqJFFQ/featured"
            target="_blank"
            rel="noopener"
          >
            <img :src="youtube" alt="YouTube" />
          </a>
          <a
            href="https://www.instagram.com/isa.official.ua/"
            target="_blank"
            rel="noopener"
          >
            <img :src="instagram" alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/isa.co.ua"
            target="_blank"
            rel="noopener"
          >
            <img :src="facebook" alt="Facebook" />
          </a>
          <a
            href="https://www.patreon.com/isa_co_ua"
            target="_blank"
            rel="noopener"
          >
            <img :src="patreon" alt="Patreon" />
          </a>
          <a
            href="https://t.me/isa_co_ua"
            target="_blank"
            rel="noopener"
          >
            <img :src="telegram" alt="Telegram" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
