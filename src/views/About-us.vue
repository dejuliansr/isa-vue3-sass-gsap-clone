<script>
import DonateButton from '../components/DonateButton.vue';
import HeroSection from '../components/HeroSection.vue';
import MissionSection from '../components/MissionSection.vue';
import OurProjects from '../components/ProjectSection.vue';
import HelpingSection from '../components/HelpingSection.vue';
import OurTeam from '../components/TeamSection.vue';
import SupportersSection from '../components/SupportersSection.vue';
import OurPartners from '../components/OurPartners.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'AboutUs',
  components: {
    DonateButton,
    HeroSection,
    MissionSection,
    OurProjects,
    HelpingSection,
    OurTeam,
    SupportersSection,
    OurPartners,
    Footer,
  },
};
</script>

<template>
  <div class="about-us">
    <DonateButton />
    <HeroSection />
    <MissionSection />
    <OurProjects />
    <HelpingSection />
    <OurTeam />
    <SupportersSection />
    <OurPartners />
    <Footer />
  </div>
</template>
