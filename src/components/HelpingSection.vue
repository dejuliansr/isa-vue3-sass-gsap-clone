<script>
import { gsap } from 'gsap'
import arrowIcon from '../assets/images/arrow.png'

export default {
  name: 'HelpingSection',

  data() {
    return {
      helping: [
        'Shelter of Victoria Bulbyna',
        'City of faithful hearts',
        'Shelter of Natalia Tymoshenko',
        'Shelter of Jeanne Sass',
        'Shelter of Victoria Bondarenko',
        'Sterilization center',
        'Zoo chance',
        'Save lives',
        'City Center for the Treatment of Animals',
        'Society for the Protection of Animals in Sumy',
        'The right to life',
        '4 paws',
        'The kingdom of cats',
        'Zvir',
        'Mercy',
        'Happy dog',
        'Give me a paw, friend',
        'Friend',
        'Hope',
        'We are for the right to life',
        'Planeta',
        'Second Life',
        'Happy shore',
        'Retrieverteam',
        'Shelter of Irina Dobrolyubova',
        'Matilda',
        'Life',
        'Second chance',
        'SOS',
        'Best friends',
      ],
      arrowIcon,
    }
  },

  mounted() {
    const cards = this.$refs.cardRefs
    const button = this.$refs.buttonRef
    const arrow = this.$refs.arrowRef

    gsap.from(cards, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out',
    })

    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          x: 10,
          y: -10,
          boxShadow: '-10px 10px 0 white',
          duration: 0.3,
          ease: 'power1.out',
        })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          x: 0,
          y: 0,
          boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
          duration: 0.3,
          ease: 'power1.out',
        })
      })
    })

    gsap.from(button, {
      x: -100,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: 'power2.out',
    })

    button.addEventListener('mouseenter', () => {
      gsap.to(arrow, {
        x: 10,
        duration: 0.3,
        ease: 'power1.out',
      })
    })

    button.addEventListener('mouseleave', () => {
      gsap.to(arrow, {
        x: 0,
        duration: 0.3,
        ease: 'power1.out',
      })
    })
  },
}
</script>

<template>
  <section class="helping-section">
    <div class="container">
      <h2 class="helping-title">We want to help</h2>
      <p class="helping-desc">
        homeless packs, volunteers, guardians, overstayers,
        shelters and other organisations
      </p>

      <div class="helping-grid">
        <div
          v-for="(item, index) in helping"
          :key="index"
          class="helping-card"
          ref="cardRefs"
        >
          {{ item }}
        </div>
      </div>

      <div class="helping-button-wrapper">
        <button class="helping-button" ref="buttonRef">
          apply for help
          <img :src="arrowIcon" alt="arrow" class="arrow-icon" ref="arrowRef" />
        </button>
      </div>
    </div>
  </section>
</template>
