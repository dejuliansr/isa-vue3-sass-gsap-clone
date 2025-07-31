<script>
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'TeamSection',

  data() {
    return {
      team: [
        {
          name: 'Daryna Deriy',
          role: 'Chairman of the Board',
          photo: new URL(
            '../assets/images/team/daryna.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Polina Snisarenko-Kulchytska',
          role: 'Curator of the Foundation',
          photo: new URL(
            '../assets/images/team/polina.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Bohdan Kulchytsky',
          role: 'Executive Manager',
          photo: new URL(
            '../assets/images/team/bohdan.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Mykhaylo Deriy',
          role: 'Operation Manager',
          photo: new URL(
            '../assets/images/team/mykhaylo.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Ksenia Nikishina',
          role: 'Office manager',
          photo: new URL(
            '../assets/images/team/ksenia.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Anna Andriychuk',
          role: 'SMM-manager',
          photo: new URL(
            '../assets/images/team/anna.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Anastasia Kovalchuk',
          role: 'Director',
          photo: new URL(
            '../assets/images/team/anastasia.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Basil Gloo',
          role: 'Web Developer',
          photo: new URL(
            '../assets/images/team/basil.png',
            import.meta.url
          ).href,
        },
        {
          name: 'Lina Yakobchuk',
          role: 'Designer',
          photo: new URL(
            '../assets/images/team/lina.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Anastasia Yevchenko',
          role: 'Translator',
          photo: new URL(
            '../assets/images/team/yevchenko.jpg',
            import.meta.url
          ).href,
        },
        {
          name: 'Office Manager',
          role: 'open vacancy',
          photo: new URL(
            '../assets/images/dog-1.svg',
            import.meta.url
          ).href,
        },
        {
          name: 'SEO specialist',
          role: 'open vacancy',
          photo: new URL(
            '../assets/images/dog-2.svg',
            import.meta.url
          ).href,
        },
      ],
      teamRefs: [],
      sectionRef: null,
    };
  },

  mounted() {
    this.teamRefs.forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 100%',
            toggleActions: 'restart none restart none',
          },
        }
      );

      el.addEventListener('mouseenter', () => {
        gsap.to(el, {
          scale: 0.95,
          boxShadow: '0 0 10px 10px rgba(252, 249, 68, 1)',
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          scale: 1,
          boxShadow: '0 0 0px 0px transparent',
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });
  },

  methods: {
    setTeamRef(el) {
      if (el && !this.teamRefs.includes(el)) {
        this.teamRefs.push(el);
      }
    },
    setSectionRef(el) {
      this.sectionRef = el;
    },
  },
};
</script>

<template>
  <section class="team-section" ref="setSectionRef">
    <div class="container">
      <h2 class="team-title">Our team</h2>
      <p class="team-desc">
        consists of completely different people who are
        united by a common desire – to help
      </p>

      <div class="team-grid">
        <div
          v-for="(member, index) in team"
          :key="index"
          class="team-card"
          :ref="setTeamRef"
        >
          <img
            :src="member.photo"
            :alt="member.name"
            class="photo"
          />
          <h3 class="team-name">{{ member.name }}</h3>
          <p class="team-role">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
