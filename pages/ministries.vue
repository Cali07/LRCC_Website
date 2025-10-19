<template>
  <div class="lrcc-section">
    <v-container>
      <span class="lrcc-badge mb-4 d-inline-flex">Ministries</span>
      <h1 class="text-h2 text-sm-h1 mb-6">Serving every generation</h1>
      <p class="text-body-1 mb-10">
        LRCC is passionate about building a vibrant community where everyone can discover their purpose. Explore the ministry
        areas designed to help you and your family connect, grow, and serve.
      </p>

      <v-row class="lrcc-grid-gap">
        <v-col v-for="ministry in ministries" :key="ministry.title" cols="12" md="6">
          <v-card class="lrcc-card pa-6 h-100 d-flex flex-column justify-space-between">
            <div>
              <div class="d-flex align-center gap-3 mb-4">
                <v-avatar size="48" class="lrcc-avatar-light">
                  <v-icon :icon="ministry.icon" color="primary" size="26"></v-icon>
                </v-avatar>
                <div>
                  <h3 class="text-h5 mb-1">{{ ministry.title }}</h3>
                  <div class="text-subtitle-2 lrcc-text-gold">{{ ministry.tagline }}</div>
                </div>
              </div>
              <p class="text-body-2 mb-0">{{ ministry.description }}</p>
            </div>
            <div v-if="ministry.highlights" class="mt-6">
              <h4 class="text-subtitle-1 mb-3">Highlights</h4>
              <v-chip-group class="d-flex flex-wrap" column>
                <v-chip
                  v-for="highlight in ministry.highlights"
                  :key="highlight"
                  class="mr-2 mb-2 lrcc-chip"
                  size="small"
                >
                  {{ highlight }}
                </v-chip>
              </v-chip-group>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-card class="lrcc-card lrcc-section--light pa-8 mt-12 d-flex flex-column flex-sm-row align-center gap-6">
        <div>
          <h2 class="text-h4 mb-3">Ready to serve or join a ministry?</h2>
          <p class="text-body-1 mb-0">Complete our connect form and our ministry leaders will reach out to you.</p>
        </div>
        <v-btn rounded="lg" color="primary" size="large" to="/connect">Join a Ministry</v-btn>
      </v-card>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const ministries = [
  {
    title: "Kids' Church",
    tagline: 'Raising little lights',
    icon: 'mdi-baby-face-outline',
    description:
      'Safe, vibrant spaces where children encounter Jesus through storytelling, worship, and hands-on activities inspired by our Kids’ Church brochure.',
    highlights: ['Interactive lessons', 'Parent partnership', 'Worship dance'],
  },
  {
    title: 'Youth Ministry',
    tagline: 'Ignite the next generation',
    icon: 'mdi-fire-circle',
    description:
      'Young people discovering their identity in Christ through connect nights, Bible conversations, and outreach projects.',
    highlights: ['Friday connect sessions', 'Mentorship circles', 'Community outreach'],
  },
  {
    title: 'Ladies’ Ministry',
    tagline: 'Sisters shining together',
    icon: 'mdi-flower-outline',
    description:
      'Building a community of grace where women find encouragement, prayer support, and opportunities to lead.',
    highlights: ['Prayer breakfasts', 'Mentoring groups', 'Community drives'],
  },
  {
    title: 'Men’s Ministry',
    tagline: 'Strength with humility',
    icon: 'mdi-shield-account',
    description:
      'Men sharpening one another in faith, character, and service through authentic brotherhood and accountability.',
    highlights: ['Monthly breakfasts', 'Prayer walks', 'Leadership coaching'],
  },
  {
    title: 'Cell Groups',
    tagline: 'Life together midweek',
    icon: 'mdi-home-group',
    description:
      'Neighborhood groups meeting across Pretoria for prayer, discipleship, and practical care.',
    highlights: ['Weekly gatherings', 'Scripture study', 'Shared meals'],
  },
]
</script>
