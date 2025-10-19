<template>
  <div>
    <v-container class="py-12">
      <div class="lrcc-hero">
        <v-img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80"
          cover
          height="520"
        ></v-img>
        <div class="lrcc-hero__content">
          <div class="lrcc-badge mb-4">
            <v-icon icon="mdi-white-balance-sunny" size="18"></v-icon>
            Welcome home
          </div>
          <h1 class="text-h2 text-sm-h1 mb-4">The Light Reformed Community Church</h1>
          <p class="text-body-1 text-md-h6 mb-6">
            A Christ-centered family in the heart of Sunnyside, journeying together as we shine the light of Christ into our
            city and beyond.
          </p>
          <div class="d-flex flex-column flex-sm-row align-center gap-4">
            <v-btn color="secondary" class="text-body-1" rounded="lg" size="large" to="/connect">
              Plan a Visit
            </v-btn>
            <v-btn variant="text" class="text-white text-body-1" href="#vision">Discover our vision</v-btn>
          </div>
        </div>
      </div>
    </v-container>

    <section id="vision" class="lrcc-section lrcc-section--light">
      <v-container>
        <v-row class="align-center gy-6">
          <v-col cols="12" md="6">
            <span class="lrcc-badge mb-3">Our Heartbeat</span>
            <h2 class="text-h3 text-sm-h2 mb-4">Vision &amp; Mission</h2>
            <v-card class="pa-6 lrcc-card lrcc-card--outline mb-4">
              <h3 class="text-h5 mb-2">Vision</h3>
              <p class="text-body-1 mb-0">
                To be a contemporary reformed church that draws more and more people to the light of Christ.
              </p>
            </v-card>
            <v-card class="pa-6 lrcc-card lrcc-card--outline">
              <h3 class="text-h5 mb-2">Mission</h3>
              <p class="text-body-1 mb-0">
                To be a light of Christ to our communities by displaying the love of God towards one another and towards our
                communities.
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-row class="lrcc-grid-gap">
              <v-col cols="12" sm="6">
                <v-card class="lrcc-card text-center pa-6">
                  <v-icon icon="mdi-clock-time-five-outline" color="secondary" size="42" class="mb-4"></v-icon>
                  <h3 class="text-h6 mb-2">Sunday Services</h3>
                  <p class="text-body-2 mb-0">09:00 - 11:00 | Worship, Word &amp; Fellowship</p>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6">
                <v-card class="lrcc-card text-center pa-6">
                  <v-icon icon="mdi-map-marker-radius" color="secondary" size="42" class="mb-4"></v-icon>
                  <h3 class="text-h6 mb-2">Location</h3>
                  <p class="text-body-2 mb-0">35 Troye Street, Sunnyside, Pretoria</p>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card class="lrcc-card pa-6">
                  <div class="d-flex flex-column flex-sm-row align-center justify-space-between gap-4">
                    <div>
                      <h3 class="text-h6 mb-2">First time at LRCC?</h3>
                      <p class="text-body-2 mb-0">
                        We would love to welcome you personally and help you plug into the community.
                      </p>
                    </div>
                    <v-btn color="primary" rounded="lg" size="large" to="/connect">
                      Join Us
                    </v-btn>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="lrcc-section lrcc-section--muted">
      <v-container>
        <v-row class="gy-6">
          <v-col cols="12" md="5">
            <span class="lrcc-badge mb-3">Visit Us</span>
            <h2 class="text-h3 text-sm-h2 mb-4">Worship with us this Sunday</h2>
            <p class="text-body-1 mb-6">
              We gather every Sunday for authentic worship, Spirit-filled teaching, and community moments that restore hope.
              Families are welcome—kids and youth have dedicated spaces to learn about Jesus in a life-giving environment.
            </p>
            <div class="d-flex flex-column gap-3">
              <div class="d-flex align-center gap-3">
                <v-avatar size="44" class="lrcc-avatar-light">
                  <v-icon icon="mdi-calendar" color="primary"></v-icon>
                </v-avatar>
                <div>
                  <strong>Service Times</strong>
                  <div>Sunday 09:00 – 11:00 | Friday Connect Sessions 18:30</div>
                </div>
              </div>
              <div class="d-flex align-center gap-3">
                <v-avatar size="44" class="lrcc-avatar-light">
                  <v-icon icon="mdi-account-group" color="primary"></v-icon>
                </v-avatar>
                <div>
                  <strong>Community</strong>
                  <div>Cell groups meet across Pretoria every week.</div>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="7">
            <iframe
              class="lrcc-map"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.855170034809!2d28.191394376058805!3d-25.753362677387682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9561e42f7a3c15%3A0x8f7af5120a0610f2!2s35%20Troye%20St%2C%20Sunnyside%2C%20Pretoria%2C%200000!5e0!3m2!1sen!2sza!4v1736025600000!5m2!1sen!2sza"
            ></iframe>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="lrcc-section">
      <v-container>
        <v-row class="align-center gy-6">
          <v-col cols="12" md="5">
            <span class="lrcc-badge mb-3">Why LRCC?</span>
            <h2 class="text-h3 text-sm-h2 mb-4">A home for every generation</h2>
            <p class="text-body-1 mb-6">
              From vibrant worship to intentional discipleship, LRCC is a place to grow, serve, and be transformed. Discover
              ministries tailored for every age and season of life.
            </p>
            <v-btn rounded="lg" color="primary" size="large" to="/ministries">Explore Ministries</v-btn>
          </v-col>
          <v-col cols="12" md="7">
            <v-row class="lrcc-grid-gap">
              <v-col cols="12" sm="6">
                <v-card class="lrcc-card pa-6">
                  <v-icon icon="mdi-head-heart" color="secondary" size="36" class="mb-3"></v-icon>
                  <h3 class="text-h6 mb-2">Pastoral Care</h3>
                  <p class="text-body-2 mb-0">Shepherding hearts with biblical counsel and prayer support.</p>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6">
                <v-card class="lrcc-card pa-6">
                  <v-icon icon="mdi-human-male-child" color="secondary" size="36" class="mb-3"></v-icon>
                  <h3 class="text-h6 mb-2">Next Generation</h3>
                  <p class="text-body-2 mb-0">Kids and youth discovering Jesus through fun, creative teaching.</p>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6">
                <v-card class="lrcc-card pa-6">
                  <v-icon icon="mdi-hands-pray" color="secondary" size="36" class="mb-3"></v-icon>
                  <h3 class="text-h6 mb-2">Prayer &amp; Worship</h3>
                  <p class="text-body-2 mb-0">Weekly rhythms that anchor us in the presence of God.</p>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6">
                <v-card class="lrcc-card pa-6">
                  <v-icon icon="mdi-hand-heart" color="secondary" size="36" class="mb-3"></v-icon>
                  <h3 class="text-h6 mb-2">Community Outreach</h3>
                  <p class="text-body-2 mb-0">Serving Sunnyside and surrounding communities with compassion.</p>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>
