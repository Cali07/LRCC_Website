<template>
  <div>
    <section class="lrcc-section lrcc-section--light">
      <v-container>
        <span class="lrcc-badge mb-4 d-inline-flex">Media</span>
        <h1 class="text-h2 text-sm-h1 mb-6">Watch, Listen &amp; Celebrate</h1>
        <p class="text-body-1 mb-8">
          Catch up on recent sermons, join the livestream, and browse highlights from recent gatherings. Share the light with
          friends and family.
        </p>
        <v-row class="gy-6">
          <v-col cols="12" md="7">
            <v-card class="lrcc-card pa-0 overflow-hidden">
              <div class="ratio ratio-16x9">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebookapp%2Fvideos%2F10153231379946729%2F&show_text=0&width=560"
                  width="100%"
                  height="360"
                  style="border:none;overflow:hidden"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div class="pa-6">
                <h2 class="text-h5 mb-2">Sunday Livestream</h2>
                <p class="text-body-2 mb-0">Join us live every Sunday at 09:00 or watch the replay at your convenience.</p>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="5">
            <v-card class="lrcc-card pa-6 h-100">
              <h2 class="text-h4 mb-3">Sermon Playlist</h2>
              <p class="text-body-2 mb-4">
                Dive into curated teachings from recent series. Stream directly on YouTube and share with your connect group.
              </p>
              <v-btn rounded="lg" color="primary" href="https://www.youtube.com" target="_blank">
                Watch on YouTube
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="lrcc-section">
      <v-container>
        <h2 class="text-h3 text-sm-h2 mb-6">Gallery</h2>
        <v-row class="lrcc-grid-gap">
          <v-col v-for="image in gallery" :key="image.alt" cols="12" sm="6" md="4">
            <v-card class="lrcc-card pa-0 overflow-hidden">
              <v-img :src="image.src" :alt="image.alt" height="220" cover></v-img>
              <div class="pa-4">
                <p class="text-body-2 mb-0">{{ image.alt }}</p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1000&q=80',
    alt: 'Worship night at LRCC',
  },
  {
    src: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=1000&q=80',
    alt: 'Community outreach in Sunnyside',
  },
  {
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
    alt: 'Youth connect session',
  },
  {
    src: 'https://images.unsplash.com/photo-1518887575-5b7d5a293ba4?auto=format&fit=crop&w=1000&q=80',
    alt: 'Ladies’ ministry gathering',
  },
  {
    src: 'https://images.unsplash.com/photo-1529328163533-1a0be2487cc8?auto=format&fit=crop&w=1000&q=80',
    alt: 'Sunday fellowship moments',
  },
  {
    src: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1000&q=80',
    alt: 'Men’s prayer breakfast',
  },
]
</script>
