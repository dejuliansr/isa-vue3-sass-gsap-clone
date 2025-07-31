<script>
import DonateButton from '../components/DonateButton.vue';
import HeroSection from '../components/HeroSection.vue';
import OurProjects from '../components/ProjectSection.vue'
import OurPartners from '../components/OurPartners.vue';

export default {
  name: 'AboutUs',
  components: {
    DonateButton,
    HeroSection,
    OurProjects,
    OurPartners
  },
};
</script>

<template>
  <div class="about-us">
    <DonateButton />
    <HeroSection />
    <OurProjects />
    <OurPartners />
  </div>
</template>
