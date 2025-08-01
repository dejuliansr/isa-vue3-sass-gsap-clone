<script>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import iconImage from '@/assets/images/webflow-badge-icon.svg'
import iconText from '@/assets/images/webflow-badge-text.svg'

export default {
  name: 'DonateButton',
  data() {
    return {
      iconImage,
      iconText
    };
  },

  setup() {
    const donateButton = ref(null);

    onMounted(() => {
      const button = donateButton.value;

      gsap.from(button, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power2.out',
      });

      const onMouseEnter = () => {
        gsap.to(button, {
          x: 5,
          y: -5,
          duration: 0.3,
          ease: 'power2.out',
          boxShadow: '-4px 4px 0 white',
        });
      };

      const onMouseLeave = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
          boxShadow: '0px 0px 0 white',
        });
      };

      button.addEventListener('mouseenter', onMouseEnter);
      button.addEventListener('mouseleave', onMouseLeave);
    });

    return {
      donateButton,
    };
  },
};
</script>

<template>
  <button ref="donateButton" class="donate-button">
    donate
  </button>
  <a
    class="btn"
    href="https://webflow.com/?utm_campaign=brandjs"
    target="_blank"
    rel="noopener"
  >
    <img
      :src="iconImage"
      alt="Icon 1"
      class="icon-image"
    />
    <img
      :src="iconText"
      alt="Icon 2"
      class="icon-text"
    />
  </a>
</template>
