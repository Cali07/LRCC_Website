<template>
  <v-app-bar flat color="transparent" density="comfortable" class="px-6">
    <v-container class="d-flex align-center justify-space-between px-0">
      <NuxtLink to="/" class="text-decoration-none d-flex align-center gap-3">
        <v-avatar color="primary" size="42">
          <v-icon icon="mdi-cross" color="secondary"></v-icon>
        </v-avatar>
        <div class="lrcc-nav-logo text-h6 text-sm-h5 text-capitalize">The Light Reformed Community Church</div>
      </NuxtLink>

      <div class="d-none d-lg-flex align-center gap-6">
        <NuxtLink v-for="item in links" :key="item.to" :to="item.to" class="text-body-2 font-weight-medium">
          {{ item.label }}
        </NuxtLink>
      </div>

      <v-btn icon="mdi-menu" variant="text" class="d-lg-none" @click="drawer = !drawer"></v-btn>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list density="comfortable">
      <v-list-item v-for="item in links" :key="item.to" :to="item.to" link @click="drawer = false">
        <v-list-item-title class="text-body-1">{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const drawer = ref(false)

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Ministries', to: '/ministries' },
  { label: 'Connect & Grow', to: '/connect' },
  { label: 'Events', to: '/events' },
  { label: 'Media', to: '/media' },
  { label: 'Contact', to: '/contact' },
]
</script>
