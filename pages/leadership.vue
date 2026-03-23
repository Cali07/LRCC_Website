<template>
  <div class="lrcc-section lrcc-section--light">
    <v-container>
      <span class="lrcc-badge mb-4 d-inline-flex">Our Shepherds</span>
      <h1 class="text-h2 text-sm-h1 mb-6">Leadership Team</h1>
      <p class="text-body-1 mb-10">
        Our leaders serve with humility, guiding the LRCC family to live out the light of Christ in every sphere of life.
        Meet the pastors, ministers, and coordinators who champion discipleship, care, and outreach.
      </p>
      <v-row class="lrcc-grid-gap">
        <v-col v-for="leader in leaders" :key="leader.name" cols="12" sm="6" md="4">
          <v-card class="lrcc-card pa-6 h-100 d-flex flex-column">
            <v-img :src="leader.photo" height="220" cover class="mb-4 rounded-xl"></v-img>
            <h3 class="text-h5 mb-1">{{ leader.name }}</h3>
            <div class="text-subtitle-2 lrcc-text-gold mb-3">{{ leader.title }}</div>
            <p class="text-body-2 mb-0">{{ leader.bio }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const leaders = [
  {
    name: 'Professor H. Ramantswana',
    title: 'Pastor',
    bio: 'Passionate about biblical preaching and raising disciples who shine brightly in everyday life.',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Chaplain N. Ramufhi',
    title: 'Pastor',
    bio: 'Passionate about biblical preaching and raising disciples who shine brightly in everyday life.',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Mrs. T. Ramantswana',
    title: 'Church Elder',
    bio: 'One of the leaders of the Light Reformed Community Church.',
    photo: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Mr. T.E Ngoveni',
    title: 'Church Elder',
    bio: 'One of the leaders of the Light Reformed Community Church.',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
  },
   {
    name: 'Dr N.F Mphephu',
    title: 'Church Elder',
    bio: 'One of the leaders of the Light Reformed Community Church.',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Mr. N.K Netshimbupfe',
    title: 'Church Elder',
    bio: 'One of the leaders of the Light Reformed Community Church.',
    photo: 'https://images.unsplash.com/photo-1519340333755-56e9c77038f8?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Mr. M.T Magoro',
    title: 'Church Elder',
    bio: 'One of the leaders of the Light Reformed Community Church.',
    photo: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Mrs. H. Shai',
    title: 'Church Deacon',
    bio: 'One of the leaders of the Light Reformed Community Church.',
    photo: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Ms M. Phaswana',
    title: 'Church Elder',
    bio: 'One of the leaders of the Light Reformed Community Church.',
    photo: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Mr. M. Moshapo',
    title: 'Youth Leader',
    bio: 'One of the leaders of the LRCC Youth.',
    photo: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
  },
   {
    name: 'Miss. G. Rasivhetshele',
    title: 'Youth Leader',
    bio: 'One of the leaders of the LRCC Youth.',
    photo: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Mr M. Magoro',
    title: 'Youth Leader',
    bio: 'One of the leaders of the LRCC Youth.',
    photo: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
  }
] 
</script>
