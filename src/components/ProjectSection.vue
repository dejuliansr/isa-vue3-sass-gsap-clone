<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default {
  name: 'ProjectSection',

  data() {
    return {
      card1: null,
      card2: null,
      card3: null,
    };
  },

  methods: {
    addCardHoverEffect(cardEl) {
      let shadowColor = 'white';

      if (cardEl.classList.contains('black')) {
        shadowColor = '#000';
      } else if (cardEl.classList.contains('green')) {
        shadowColor = '#31be32';
      } else if (cardEl.classList.contains('pink')) {
        shadowColor = '#ff97d0';
      }

      cardEl.addEventListener('mouseenter', () => {
        gsap.to(cardEl, {
          x: 10,
          y: -10,
          duration: 0.3,
          ease: 'power2.out',
          boxShadow: `-4px 4px 0 ${shadowColor}`,
        });
      });

      cardEl.addEventListener('mouseleave', () => {
        gsap.to(cardEl, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
          boxShadow: '0px 0px 0 transparent',
        });
      });
    },
  },

  mounted() {
    const card1 = this.$refs.card1;
    const card2 = this.$refs.card2;
    const card3 = this.$refs.card3;

    const animateCard = (el, delay = 0) => {
      gsap.fromTo(
        el,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 100%',
            toggleActions: 'restart none restart none',
          },
        }
      );
    };

    animateCard(card1);
    animateCard(card2, 0.2);
    animateCard(card3, 0.4);

    this.addCardHoverEffect(card1);
    this.addCardHoverEffect(card2);
    this.addCardHoverEffect(card3);
  },
};
</script>

<template>
  <section class="project-section">
    <div class="container">
      <div>
        <h2 class="section-title">Our projects</h2>
        <p class="section-desc">
          are very different in terms of priority, scale and
          complexity of implementation
        </p>
      </div>

      <div class="project-card black" ref="card1">
        <h3 class="card-title">Emergency Aid. WAR 2022.</h3>
        <p class="card-desc">
          providing food and medicine to the shelters and
          animals which lost their homes and families due to
          the war
        </p>
      </div>

      <div class="project-card green" ref="card2">
        <h3 class="card-title">Non-commercial feed line</h3>
        <p class="card-desc">
          construction of industrial production base where
          food for shelters will be produced on a free basis
        </p>
      </div>

      <div class="project-card pink" ref="card3">
        <h3 class="card-title">Education and Control</h3>
        <p class="card-desc">
          Education and Control lectures on communication,
          organisation and coordination of processes,
          control over the use of aid
        </p>
      </div>
    </div>
  </section>
</template>
