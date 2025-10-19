<script>

import {useAuthStore} from "~/stores/auth.js";

export default {
  name: 'TopBarMenuAdmin',

  data() {
    return {
      drawer: false,
      // Navigation links for scalability
      navLinks: [
        { name: 'Dashboard', to: '/admin/dashboard' },
        { name: 'Reports', to: '/admin/reports' },
        { name: 'Plan', to: '/admin/plan' },
      ]
    }
  },

  methods: {
    logout() {
      const authStore = useAuthStore()
      authStore.logout()
    }
  }
}
</script>

<template>
  <v-app-bar flat color="primary" elevation="0" class="px-md-7 px-sm-5">
    <!-- Logo -->
    <router-link to="/" class="pa-0 ma-0">
      <v-icon size="50" icon="mdi-home"></v-icon>
    </router-link>

    <!-- Title -->
    <v-toolbar-title class="ml-3 text-h6 font-weight-bold">
      AddHope Centers
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Desktop Navigation -->
    <template v-for="link in navLinks" :key="link.name">
      <v-btn
          variant="text"
          class="d-none d-md-flex"
          :to="link.to"
      >
        {{ link.name }}
      </v-btn>
    </template>

    <v-btn
        variant="elevated"
        class="ml-2"
        color="error"
        @click="logout"
    >
      Logout
    </v-btn>

    <!-- Mobile Hamburger Icon -->
    <v-app-bar-nav-icon
        class="d-flex d-md-none"
        @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer
      v-model="drawer"
      temporary
      class="d-md-none"
  >
    <v-list>
      <v-list-item
          v-for="link in navLinks"
          :key="link.name"
          :to="link.to"
          link
      >
        <v-list-item-title>{{ link.name }}</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item to="/auth/users/register">
        <v-list-item-title>Sign Up</v-list-item-title>
      </v-list-item>
      <v-list-item to="/auth/users/login">
        <v-list-item-title>Login</v-list-item-title>
      </v-list-item>
      <v-list-item @click="logout">
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.v-toolbar-title {
  font-size: 1.2rem;
  color: white;
}

.v-app-bar {
  background: linear-gradient(90deg, #e4002b, #d32f2f); /* KFC red gradient */
  color: white;
}
</style>
