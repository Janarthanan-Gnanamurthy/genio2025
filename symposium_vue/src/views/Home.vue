<template>
  <div>
    <Hero />
    <EventDetails />
    <EventGallery />
    <AboutSection />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import EventDetails from '../components/EventDetails.vue';
import EventGallery from '../components/EventGallery.vue';
import AboutSection from '../components/AboutSection.vue';

export default {
  name: 'Home',
  components: {
    Hero,
    EventDetails,
    EventGallery,
    AboutSection
  }
}
</script> 