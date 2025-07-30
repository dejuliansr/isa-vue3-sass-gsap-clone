<script>
import DonateButton from '../components/DonateButton.vue';
import HeroSection from '../components/HeroSection.vue';

export default {
  name: 'AboutUs',
  components: {
    DonateButton,
    HeroSection,
  },
};
</script>

<template>
  <div class="about-us">
    <DonateButton />
    <HeroSection />
  </div>
</template>
