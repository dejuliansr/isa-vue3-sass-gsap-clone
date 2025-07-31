<script>
import DonateButton from '../components/DonateButton.vue';
import HeroSection from '../components/HeroSection.vue';
import OurPartners from '../components/OurPartners.vue';

export default {
  name: 'AboutUs',
  components: {
    DonateButton,
    HeroSection,
    OurPartners
  },
};
</script>

<template>
  <div class="about-us">
    <DonateButton />
    <HeroSection />
    <OurPartners />
  </div>
</template>
