<template>
  <v-footer class="lrcc-footer pa-8 pa-md-12" padless>
    <v-container>
      <v-row class="gy-6">
        <v-col cols="12" md="4">
          <div class="d-flex align-center gap-3 mb-4">
            <v-avatar color="secondary" size="48">
              <v-icon icon="mdi-white-balance-sunny" color="primary"></v-icon>
            </v-avatar>
            <div>
              <h3 class="text-h5 mb-1 text-white">LRCC</h3>
              <p class="mb-0 text-body-2">Drawing more and more people to the Light of Christ.</p>
            </div>
          </div>
          <div class="text-body-2">35 Troye Street, Sunnyside, Pretoria</div>
          <div class="text-body-2 mt-2">Sunday Service: 09:00 - 11:00</div>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <h4 class="text-subtitle-1 mb-3 text-white">Quick Links</h4>
          <div class="d-flex flex-column gap-2">
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/ministries">Ministries</NuxtLink>
            <NuxtLink to="/connect">Connect &amp; Grow</NuxtLink>
            <NuxtLink to="/events">Events</NuxtLink>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <h4 class="text-subtitle-1 mb-3 text-white">Stay Connected</h4>
          <div class="d-flex align-center gap-2 mb-2">
            <v-icon icon="mdi-facebook" size="20"></v-icon>
            <a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a>
          </div>
          <div class="d-flex align-center gap-2 mb-2">
            <v-icon icon="mdi-whatsapp" size="20"></v-icon>
            <a href="https://wa.me/27630000000" target="_blank" rel="noopener">WhatsApp</a>
          </div>
          <div class="d-flex align-center gap-2">
            <v-icon icon="mdi-email" size="20"></v-icon>
            <a href="mailto:hello@lrcc.org">hello@lrcc.org</a>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-6" color="rgba(255,255,255,0.1)"></v-divider>

      <div class="d-flex flex-column flex-md-row align-center justify-space-between text-body-2">
        <div>© {{ new Date().getFullYear() }} The Light Reformed Community Church. All rights reserved.</div>
        <div class="mt-3 mt-md-0">Crafted with grace and excellence.</div>
      </div>
    </v-container>
  </v-footer>
</template>
