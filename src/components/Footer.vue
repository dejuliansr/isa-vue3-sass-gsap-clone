<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import youtube from '@/assets/images/youtube.svg';
import instagram from '@/assets/images/instagram.svg';
import facebook from '@/assets/images/facebook.svg';
import patreon from '@/assets/images/patreon.svg';
import telegram from '@/assets/images/telegram.svg';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'FooterSection',

  data() {
    return {
      youtube,
      instagram,
      facebook,
      patreon,
      telegram,
      animalsRef: null,
      emailRef: null,
    };
  },

  mounted() {
    this.animalsRef = this.$refs.animalsRef;

    gsap.fromTo(
      this.animalsRef,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.animalsRef,
          start: 'top 90%',
          toggleActions: 'restart none restart none',
        },
      }
    );
  },
};
</script>

<template>
  <section class="footer-section">
    <div class="container">
      <div class="footer-left">
        <h2>Contact us</h2>
        <p>Kyiv, Ukraine</p>
        <a ref="emailRef" href="#"
          >mail@isa.co.ua</a
        >
        <div class="footer-icons">
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
      <div class="footer-right">
        <img
          ref="animalsRef"
          src="../assets/images/animals.svg"
          alt="Animals"
        />
      </div>
    </div>
  </section>
</template>
