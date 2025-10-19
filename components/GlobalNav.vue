<template>
  <v-app-bar
    flat
    color="transparent"
    density="comfortable"
    height="80"
    scroll-behavior="elevate"
    class="lrcc-nav px-4 px-sm-6"
  >
    <v-container class="d-flex align-center justify-space-between px-0">
      <NuxtLink to="/" class="text-decoration-none d-flex align-center gap-3 lrcc-nav__brand">
        <v-avatar class="lrcc-nav__avatar" size="46">
          <span class="lrcc-nav__avatar-glow"></span>
          <v-icon icon="mdi-cross" color="white" size="28"></v-icon>
        </v-avatar>
        <div class="lrcc-nav-logo text-h6 text-sm-h5 text-capitalize">
          The Light Reformed Community Church
        </div>
      </NuxtLink>

      <div class="lrcc-nav-links d-none d-lg-flex align-center">
        <NuxtLink
          v-for="item in links"
          :key="item.to"
          :to="item.to"
          class="lrcc-nav-link text-body-2 font-weight-medium"
          :class="{ 'lrcc-nav-link--active': isActive(item.to) }"
        >
          <span>{{ item.label }}</span>
        </NuxtLink>
      </div>

      <div class="d-none d-lg-flex align-center gap-4">
        <v-divider vertical length="28" class="lrcc-nav-divider"></v-divider>
        <v-btn
          class="text-none lrcc-nav-cta"
          color="secondary"
          variant="flat"
          rounded="pill"
          size="large"
          :to="ctaLink"
          nuxt
        >
          Plan a Visit
        </v-btn>
      </div>

      <v-btn icon="mdi-menu" variant="text" class="d-lg-none" @click="drawer = !drawer"></v-btn>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" temporary class="lrcc-nav-drawer">
    <div class="d-flex align-center justify-space-between px-6 py-4">
      <div class="text-subtitle-1 font-weight-semibold">Explore</div>
      <v-btn icon="mdi-close" variant="text" @click="drawer = false"></v-btn>
    </div>
    <v-divider class="mx-6"></v-divider>
    <v-list density="comfortable">
      <v-list-item
        v-for="item in links"
        :key="item.to"
        :to="item.to"
        link
        class="lrcc-nav-drawer__item"
        :class="{ 'lrcc-nav-drawer__item--active': isActive(item.to) }"
        @click="drawer = false"
      >
        <template #prepend>
          <v-icon icon="mdi-chevron-right" class="lrcc-nav-drawer__icon"></v-icon>
        </template>
        <v-list-item-title class="text-body-1">{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <div class="px-6 pb-6 pt-4">
      <v-btn
        block
        color="secondary"
        variant="flat"
        rounded="pill"
        size="large"
        class="text-none"
        :to="ctaLink"
        nuxt
        @click="drawer = false"
      >
        Plan a Visit
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const drawer = ref(false)
const route = useRoute()

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

const ctaLink = '/connect'

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }

  return route.path === path || route.path.startsWith(`${path}/`)
}
</script>

<style scoped>
.lrcc-nav {
  position: sticky;
  top: 0;
  z-index: 10;
  border-radius: 20px;
  margin: 12px auto;
  max-width: min(1240px, 92vw);
  backdrop-filter: blur(18px);
  background: linear-gradient(135deg, rgba(27, 35, 58, 0.92), rgba(54, 80, 145, 0.88));
  box-shadow: 0 14px 45px -20px rgba(20, 25, 44, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.lrcc-nav:hover {
  transform: translateY(-2px);
  box-shadow: 0 24px 55px -20px rgba(19, 33, 68, 0.85);
}

.lrcc-nav__brand {
  position: relative;
}

.lrcc-nav__avatar {
  position: relative;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 30% 30%, #f7d794, #d69b3d);
  box-shadow: 0 10px 25px -10px rgba(214, 155, 61, 0.8);
  overflow: visible;
}

.lrcc-nav__avatar-glow {
  position: absolute;
  inset: -18px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 237, 188, 0.35), rgba(255, 255, 255, 0));
  filter: blur(2px);
  z-index: -1;
}

.lrcc-nav-links {
  gap: 1.5rem;
}

.lrcc-nav-link {
  position: relative;
  color: rgba(255, 255, 255, 0.72);
  letter-spacing: 0.02em;
  transition: color 0.25s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 4px 0;
}

.lrcc-nav-link::after {
  content: '';
  position: absolute;
  inset-inline: 0;
  bottom: -6px;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(255, 200, 120, 0.5), rgba(255, 255, 255, 0.6));
  opacity: 0;
  transform: scaleX(0.3);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.lrcc-nav-link:hover {
  color: #ffffff;
}

.lrcc-nav-link:hover::after,
.lrcc-nav-link--active::after {
  opacity: 1;
  transform: scaleX(1);
}

.lrcc-nav-link--active {
  color: #ffffff;
}

.lrcc-nav-divider {
  opacity: 0.3;
}

.lrcc-nav-cta {
  box-shadow: 0 15px 35px -20px rgba(214, 155, 61, 0.9);
  letter-spacing: 0.03em;
}

.lrcc-nav-drawer {
  background: linear-gradient(180deg, rgba(19, 24, 45, 0.97), rgba(16, 19, 32, 0.95));
  color: white;
}

.lrcc-nav-drawer__item {
  color: rgba(255, 255, 255, 0.78);
}

.lrcc-nav-drawer__item--active {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

.lrcc-nav-drawer__icon {
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 1280px) {
  .lrcc-nav {
    border-radius: 16px;
    margin: 10px 16px;
  }
}

@media (max-width: 960px) {
  .lrcc-nav-logo {
    font-size: 1.05rem;
    max-width: 200px;
  }
}
</style>
