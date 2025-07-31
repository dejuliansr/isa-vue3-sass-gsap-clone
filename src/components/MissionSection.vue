<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const supportersRefs = ref([])
const sectionRef = ref(null)
const videoWrapperRef = ref(null)

onMounted(() => {
  gsap.from(supportersRefs.value, {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%',
    },
  })

  gsap.from(videoWrapperRef.value, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%',
      toggleActions: 'restart none restart none',
    },
  })
})
</script>


<template>
  <section class="mission-section">
    <div class="container">
      <div class="team-identity">
        <h1 class="identity-title">We are</h1>
        <p class="identity-desc">
          team of like-minded people, socially active
          companies, media personalities, volunteers who
          help low-income shelters and foster carers to
          support homeless animals.
        </p>
      </div>

      <div class="goals">
        <h1 class="goal-title">Our primary goal</h1>
        <p class="goal-desc">
          is to provide animals with the most necessary
          things - food, medicine, and urgent needs for the
          livelihood of shelters. We believe in our power
          and the power of conscious citizens who care about
          the environment and their health, who understand
          the importance of helping each other, especially
          our little friends. Growth begins with your care
          for your loved ones. Animals are one of the
          closest creatures to humans who remain with us
          throughout our lives. We all know the healing
          power of warmth, grace, and big loving eyes.
        </p>

        <div class="line-wrapper">
          <div class="line">
            "Animals need to have friends. Just like
            humans." <br />
            - James Herriot, All Creatures Great and Small
          </div>
        </div>

        <p class="goal-desc">
          Who else if not we should support our younger
          brothers, especially in difficult times? Let's be
          friends!
        </p>
      </div>

      <div ref="sectionRef">
        <div ref="videoWrapperRef" class="video-wrapper">
          <iframe
            width="100%"
            height="400"
            :src="'https://www.youtube.com/embed/5Wk1rp99B7o?start=3'"
            title="YouTube video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
