<script>
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'SupportersSection',

  data() {
    return {
      supporters: [
        {
          name: 'Oleksiy Tritenko',
          title: 'theater and film actor',
          image: new URL(
            '../assets/images/supporters/oleksiy.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Stanislav Boklan',
          title: "People's Artist of Ukraine",
          image: new URL(
            '../assets/images/supporters/stanislav.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Alexander Rudinsky',
          title: 'theater and film actor',
          image: new URL(
            '../assets/images/supporters/alexander.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Oksana Zhdanova',
          title: 'theater and film actress',
          image: new URL(
            '../assets/images/supporters/oksana.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Natalka Denisenko',
          title: 'theater and film actress',
          image: new URL(
            '../assets/images/supporters/natalka.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Maksym Samchyk',
          title: 'theater and film actor',
          image: new URL(
            '../assets/images/supporters/maksym.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Kateryna Vyshneva',
          title: 'theater and film actress',
          image: new URL(
            '../assets/images/supporters/kateryna.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Irma Vitovska',
          title: 'theater and film actress',
          image: new URL(
            '../assets/images/supporters/irma.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Igor Portyanko',
          title: 'actor of theater and cinema',
          image: new URL(
            '../assets/images/supporters/igor.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Dmytro Surzhikov',
          title: 'Honored Actress of Ukraine',
          image: new URL(
            '../assets/images/supporters/dmytro.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Daria Barihashvili',
          title: 'theater and film actress',
          image: new URL(
            '../assets/images/supporters/daria.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Vera Kobzar',
          title: 'theater and film actress',
          image: new URL(
            '../assets/images/supporters/vera.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Andriy Fedynchyk',
          title: 'theater and film actor',
          image: new URL(
            '../assets/images/supporters/andriy.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Anastasia Nesterenko',
          title: 'theater and film actress',
          image: new URL(
            '../assets/images/supporters/anastasia.jpg',
            import.meta.url
          ).href,
        },
      ],
    };
  },

  mounted() {
    const supporterEls = this.$refs.supportersRefs;
    const sectionEl = this.$refs.sectionRef;
    const elements = Array.isArray(supporterEls)
      ? supporterEls
      : [supporterEls];

    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 100%',
            toggleActions: 'restart none restart none',
          },
        }
      );
    });
  },
};
</script>

<template>
  <section class="supporters-section" ref="sectionRef">
    <div class="container">
      <h2 class="supporters-title">
        Socially active citizens
      </h2>
      <p class="supporters-desc">support us</p>

      <div class="supporters-grid">
        <div
          v-for="(supporter, index) in supporters"
          :key="index"
          class="supporter-card"
          ref="supportersRefs"
        >
          <img
            :src="supporter.image"
            :alt="supporter.name"
            class="supporter-image"
          />
          <p class="supporter-name">{{ supporter.name }}</p>
          <p class="supporter-role">
            {{ supporter.title }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
