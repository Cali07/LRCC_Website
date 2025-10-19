<template>
  <div class="lrcc-section lrcc-section--muted">
    <v-container>
      <span class="lrcc-badge mb-4 d-inline-flex">Gatherings</span>
      <h1 class="text-h2 text-sm-h1 mb-6">Services &amp; Events</h1>
      <v-row class="gy-6">
        <v-col cols="12" md="5">
          <v-card class="lrcc-card pa-6 mb-6">
            <h2 class="text-h4 mb-4">Weekly Rhythm</h2>
            <v-timeline density="comfortable" side="end">
              <v-timeline-item color="secondary">
                <template #opposite>
                  <strong>Sunday</strong>
                </template>
                <v-card class="pa-4 lrcc-card--outline">
                  <h3 class="text-subtitle-1 mb-1">Celebration Service</h3>
                  <div class="text-body-2">09:00 – 11:00 | Worship, Word &amp; Communion</div>
                  <div class="text-body-2 mt-2">Kids’ Church &amp; Youth gather during the message.</div>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="secondary">
                <template #opposite>
                  <strong>Friday</strong>
                </template>
                <v-card class="pa-4 lrcc-card--outline">
                  <h3 class="text-subtitle-1 mb-1">Connect Sessions</h3>
                  <div class="text-body-2">18:30 – 20:00 | Prayer, teaching, small groups</div>
                  <div class="text-body-2 mt-2">Open to everyone—bring a friend!</div>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-card>

          <v-card class="lrcc-card pa-6">
            <h2 class="text-h5 mb-3">Stay in the loop</h2>
            <p class="text-body-2 mb-4">Subscribe to our calendar for service reminders and ministry updates.</p>
            <v-btn color="primary" rounded="lg" href="https://calendar.google.com" target="_blank">
              View Google Calendar
            </v-btn>
          </v-card>
        </v-col>

        <v-col cols="12" md="7">
          <h2 class="text-h4 mb-4">Upcoming Highlights</h2>
          <v-row class="lrcc-grid-gap">
            <v-col v-for="event in events" :key="event.title" cols="12" sm="6">
              <v-card class="lrcc-card pa-0">
                <v-img :src="event.image" height="180" cover></v-img>
                <div class="pa-6">
                  <div class="text-subtitle-2 lrcc-text-gold mb-2">{{ event.date }}</div>
                  <h3 class="text-h5 mb-3">{{ event.title }}</h3>
                  <p class="text-body-2 mb-4">{{ event.description }}</p>
                  <v-btn variant="text" color="primary" :href="event.link" target="_blank">Learn more</v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const events = [
  {
    title: 'Light Conference 2025',
    date: '15 February 2025',
    description: 'A day of worship, teaching, and activation as we shine the light of Christ in our city.',
    image: 'https://images.unsplash.com/photo-1529158062015-cad636e69505?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com/light-conference',
  },
  {
    title: 'Community Outreach Saturday',
    date: '1 March 2025',
    description: 'Serve Sunnyside with food parcels, prayer walks, and kids’ activities. Volunteers welcome!',
    image: 'https://images.unsplash.com/photo-1455641374154-422f32b9899c?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com/outreach',
  },
  {
    title: 'Marriage Enrichment Evening',
    date: '22 March 2025',
    description: 'Strengthen your marriage with practical tools, worship, and ministry time for couples.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com/marriage-evening',
  },
]
</script>
