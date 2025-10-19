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
    name: 'Rev. Michael Dlamini',
    title: 'Lead Pastor',
    bio: 'Passionate about biblical preaching and raising disciples who shine brightly in everyday life.',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Pastor Lerato Mokoena',
    title: 'Assistant Pastor',
    bio: 'Loves walking with families and helping them discover the transformative hope of the gospel.',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Thabo Radebe',
    title: 'Youth &amp; Young Adults Leader',
    bio: 'Equipping the next generation to live confidently for Christ and influence culture.',
    photo: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Nomsa Khumalo',
    title: 'Ladies’ Ministry Director',
    bio: 'Creating safe spaces for women to flourish through prayer, mentoring, and service.',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sipho Mthembu',
    title: 'Men’s Ministry Coordinator',
    bio: 'Encouraging men to lead with integrity, courage, and servant hearts.',
    photo: 'https://images.unsplash.com/photo-1519340333755-56e9c77038f8?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Naledi Maseko',
    title: 'Kids’ Church Pastor',
    bio: 'Helping children encounter Jesus through creative storytelling and worship.',
    photo: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
  },
]
</script>
