<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const card1 = ref(null);
const card2 = ref(null);
const card3 = ref(null);

function addCardHoverEffect(cardEl) {
  let shadowColor = 'white';

  if (cardEl.classList.contains('black')) {
    shadowColor = '#000';
  } else if (cardEl.classList.contains('green')) {
    shadowColor = '#31be32';
  } else if (cardEl.classList.contains('pink')) {
    shadowColor = '#ff97d0';
  }

  cardEl.addEventListener('mouseenter', () => {
    gsap.to(cardEl, {
      x: 10,
      y: -10,
      duration: 0.3,
      ease: 'power2.out',
      boxShadow: `-4px 4px 0 ${shadowColor}`,
    });
  });

  cardEl.addEventListener('mouseleave', () => {
    gsap.to(cardEl, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
      boxShadow: '0px 0px 0 transparent',
    });
  });
}

onMounted(() => {
  gsap.from(card1.value, {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
  });

  gsap.from(card2.value, {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    delay: 0.5,
  });

  gsap.from(card3.value, {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    delay: 1,
  });

  addCardHoverEffect(card1.value);
  addCardHoverEffect(card2.value);
  addCardHoverEffect(card3.value);
});
</script>

<template>
  <section class="project-section">
    <div class="container">
      <div>
        <h2 class="section-title">Our projects</h2>
        <p class="section-desc">
          are very different in terms of priority, scale and
          complexity of implementation
        </p>
      </div>

      <div class="project-card black" ref="card1">
        <h3 class="card-title">Emergency Aid. WAR 2022.</h3>
        <p class="card-desc">
          providing food and medicine to the shelters and
          animals which lost their homes and families due to
          the war
        </p>
      </div>

      <div class="project-card green" ref="card2">
        <h3 class="card-title">Non-commercial feed line</h3>
        <p class="card-desc">
          construction of industrial production base where
          food for shelters will be produced on a free basis
        </p>
      </div>

      <div class="project-card pink" ref="card3">
        <h3 class="card-title">Education and Control</h3>
        <p class="card-desc">
          Education and Control lectures on communication,
          organisation and coordination of processes,
          control over the use of aid
        </p>
      </div>
    </div>
  </section>
</template>
