<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'FooterSection',

  data() {
    return {
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
        <a ref="emailRef" href="mailto:mail@isa.co.ua"
          >mail@isa.co.ua</a
        >
        <div class="footer-icons">
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
