<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'PartnerSection',

  data() {
    return {
      logos: [
        '../src/assets/images/advires.jpg',
        '../src/assets/images/ovidwind.png',
        '../src/assets/images/tbsindustry.png',
        '../src/assets/images/accurl.png',
        '../src/assets/images/laudis.png',
        '../src/assets/images/kickbite.png',
      ],
      partnerRef: null,
    };
  },

  mounted() {
    this.partnerRef = this.$refs.partnerRef;

    gsap.fromTo(
      this.partnerRef,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: this.partnerRef,
          start: 'top 100%',
          toggleActions: 'restart none restart none',
        },
      }
    );
  },
};
</script>

<template>
  <section class="partner-section">
    <div class="container">
      <h2 class="partner-title">Our partners</h2>
      <p class="partner-desc">
        take care of our fund and help us with many
        questions
      </p>
      <div class="partner-wrapper" ref="partnerRef">
        <img
          v-for="(logo, index) in logos"
          :key="index"
          :src="logo"
          alt="partner logo"
          class="partner-logo"
        />
      </div>
    </div>
  </section>
</template>
