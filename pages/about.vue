<template>
  <div>
    <v-container class="py-12">
      <span class="lrcc-badge mb-4 d-inline-flex">About LRCC</span>
      <h1 class="text-h2 text-sm-h1 mb-6">What the Church is About</h1>
      <v-row class="gy-6">
        <v-col cols="12" md="7">
          <p class="text-body-1 mb-4">
            The Light Reformed Community Church is a Christ-centered, Bible-grounded community committed to seeing every
            person live in the radiance of God's grace. We worship passionately, teach Scripture faithfully, and cultivate
            authentic relationships that reflect the heart of Christ.
          </p>
          <p class="text-body-1 mb-4">
            Our community is multi-generational and multicultural, embodying the unity we have in Christ. Through prayer,
            discipleship, and intentional outreach, we equip believers to bring hope into homes, workplaces, and the broader
            city of Pretoria.
          </p>
          <v-alert color="secondary" border="start" border-color="var(--lrcc-gold)" variant="tonal" class="mb-6">
            "You are the light of the world. A town built on a hill cannot be hidden." — Matthew 5:14
          </v-alert>
        </v-col>
        <v-col cols="12" md="5">
          <v-card class="lrcc-card pa-6">
            <h2 class="text-h5 mb-2">Confession of Faith</h2>
            <p class="text-body-2 mb-0">
              We confess Jesus Christ as Lord and Savior, the light of the world who reconciles us to the Father. We believe in
              the authority of Scripture, the power of the Holy Spirit, and the call for every believer to embody the love of
              Christ in word and deed. In humility and obedience, we declare our dependence on God's grace for life and
              godliness.
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <section class="lrcc-section lrcc-section--muted">
      <v-container>
        <h2 class="text-h3 text-sm-h2 mb-6">Love Principle</h2>
        <v-row class="gy-6">
          <v-col cols="12" md="7">
            <v-card class="pa-6 lrcc-card lrcc-card--outline">
              <p class="text-body-1 mb-0">
                "This is how we know what love is: Jesus Christ laid down his life for us. And we ought to lay down our lives
                for our brothers and sisters." — 1 John 3:16
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" md="5">
            <p class="text-body-1 mb-4">
              Each week we highlight a scripture that shapes our communal practice of love. Leaders can update this text to
              reflect seasonal themes, sermon series, or specific prayer focuses for the congregation.
            </p>
            <v-btn to="/connect" rounded="lg" color="primary">Share Your Testimony</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="lrcc-section lrcc-section--light">
      <v-container>
        <span class="lrcc-badge mb-4 d-inline-flex">Our Core Values</span>
        <h2 class="text-h3 text-sm-h2 mb-8">What anchors us</h2>
        <v-row class="lrcc-grid-gap">
          <v-col v-for="value in values" :key="value.title" cols="12" sm="6" md="3">
            <v-card class="lrcc-card lrcc-card--outline pa-6 text-center">
              <v-avatar class="mx-auto mb-4 lrcc-avatar-light" size="56">
                <v-icon :icon="value.icon" color="primary" size="28"></v-icon>
              </v-avatar>
              <h3 class="text-h6 mb-3">{{ value.title }}</h3>
              <p class="text-body-2 mb-0">{{ value.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
const values = [
  {
    title: 'Faith',
    description: 'Rooted in the authority of Scripture and the finished work of Christ.',
    icon: 'mdi-book-cross',
  },
  {
    title: 'Fellowship',
    description: 'Growing together through authentic community and discipleship.',
    icon: 'mdi-account-heart',
  },
  {
    title: 'Service',
    description: 'Serving our city with compassion and practical love.',
    icon: 'mdi-hand-heart',
  },
  {
    title: 'Love',
    description: 'Reflecting the love of Jesus in every relationship and gathering.',
    icon: 'mdi-heart-outline',
  },
]
</script>
