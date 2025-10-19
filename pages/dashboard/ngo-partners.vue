<script>
import { defineComponent } from 'vue'
import TopBarMenu from "~/components/dashboard/navBar.vue"
import { useNgoPartnersStore } from "~/stores/ngoPartners.js"

export default defineComponent({
  name: 'NgoPartnersPage',
  components: { TopBarMenu },
  data() {
    return {
      ngoStore: useNgoPartnersStore(),
      email: '',
      emailFeedback: null,
      emailFeedbackColor: 'success',
      applicationForm: {
        orgName: '',
        contactName: '',
        email: '',
        website: '',
        beneficiaries: '',
        message: '',
        hasDocuments: false
      },
      applicationSubmitted: false,
      formValid: false,
      submitting: false
    }
  },
  computed: {
    stats() {
      return this.ngoStore.stats
    },
    videos() {
      return this.ngoStore.spotlightVideos
    },
    testimonials() {
      return this.ngoStore.testimonials
    },
    requirements() {
      return this.ngoStore.requirements
    },
    contact() {
      return this.ngoStore.contact
    }
  },
  methods: {
    submitEmail() {
      const result = this.ngoStore.subscribeEmail(this.email)
      this.emailFeedback = result.message
      this.emailFeedbackColor = result.success ? 'success' : 'warning'
      if (result.success) {
        this.ngoStore.recordEngagement('email-subscription', { email: this.email })
        this.email = ''
      }
    },
    async submitApplication() {
      const form = this.$refs.applicationFormRef
      if (!form) {
        return
      }
      const valid = await form.validate()
      if (!valid) {
        return
      }
      this.submitting = true
      try {
        this.ngoStore.submitApplication(this.applicationForm)
        this.applicationSubmitted = true
        this.ngoStore.recordEngagement('application-submitted', {
          orgName: this.applicationForm.orgName
        })
        this.applicationForm = {
          orgName: '',
          contactName: '',
          email: '',
          website: '',
          beneficiaries: '',
          message: '',
          hasDocuments: false
        }
        if (this.$refs.applicationFormRef) {
          this.$refs.applicationFormRef.resetValidation()
        }
      } finally {
        this.submitting = false
      }
    },
    testimonialColor(index) {
      const palette = ['#e4002b', '#d32f2f', '#b71c1c']
      return palette[index % palette.length]
    },
    scrollTo(selector) {
      if (process.client) {
        const target = document.querySelector(selector)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
  }
})
</script>

<template>
  <v-container class="pa-0 ngo-page" fluid>
    <TopBarMenu />

    <v-sheet class="hero" color="primary" dark rounded="0">
      <v-container>
        <v-row align="center" justify="space-between">
          <v-col cols="12" md="6">
            <h1 class="text-h3 font-weight-bold mb-4">KFC AddHope: Making a Difference Together</h1>
            <p class="text-body-1 mb-6">
              We nourish more than hungry tummies &mdash; we grow dreams. Join our circle of trusted NGOs and
              fuel the future of South Africa&apos;s children.
            </p>
            <v-btn color="white" class="red--text text--darken-2" size="large" @click="scrollTo('#application')">
              Apply to partner
            </v-btn>
          </v-col>
          <v-col cols="12" md="5">
            <v-sheet class="stat-highlight" rounded elevation="6">
              <v-icon color="primary" size="40" class="mb-2">{{ ngoStore.heroStatHighlight?.icon || 'mdi-heart' }}</v-icon>
              <div class="text-h4 font-weight-bold">{{ ngoStore.heroStatHighlight?.value }}</div>
              <div class="text-subtitle-2">{{ ngoStore.heroStatHighlight?.title }}</div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-container class="py-10">
      <v-row class="mb-6" dense>
        <v-col v-for="stat in stats" :key="stat.title" cols="12" sm="6" md="3">
          <v-card elevation="4" class="pa-6 text-center" color="#fff5f5">
            <v-icon size="36" color="error" class="mb-3">{{ stat.icon }}</v-icon>
            <div class="text-h5 font-weight-bold mb-2">{{ stat.value }}</div>
            <div class="text-body-2">{{ stat.title }}</div>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mb-10" align="stretch">
        <v-col cols="12" md="6">
          <v-card elevation="6" class="pa-6 fill-height">
            <v-card-title class="text-h5 font-weight-bold">
              Watch our partners in action
            </v-card-title>
            <v-card-text>
              <p class="text-body-2 mb-4">
                Dive into short stories from our community kitchens and youth centres showing where every Rand goes.
              </p>
              <v-carousel hide-delimiter-background height="500">
                <v-carousel-item v-for="video in videos" :key="video.title">
                  <v-sheet color="transparent" class="h-100">
                    <div class="mb-3 text-subtitle-1 font-weight-medium">{{ video.title }}</div>
                    <div class="text-body-2 mb-4">{{ video.description }}</div>
                      <iframe
                          :src="video.url"
                          width="100%"
                          height="85%"
                          title="AddHope video"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                      ></iframe>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card elevation="6" class="pa-6 fill-height">
            <v-card-title class="text-h5 font-weight-bold">Stay in the loop</v-card-title>
            <v-card-text>
              <p class="text-body-2">
                Touch more lives with us by stretching out your hand to join ours. Leave your email and we will share
                upcoming funding windows and inspiration from the field.
              </p>
              <v-text-field
                  v-model="email"
                  label="Email address"
                  placeholder="you@organisation.org"
                  class="mt-4"
                  type="email"
                  density="comfortable"
                  variant="outlined"
                  @keyup.enter="submitEmail"
              ></v-text-field>
              <v-btn color="error" class="mt-2" @click="submitEmail">Join our NGO circle</v-btn>
              <v-alert
                  v-if="emailFeedback"
                  :type="emailFeedbackColor"
                  class="mt-4"
                  border="start"
                  variant="tonal"
              >
                {{ emailFeedback }}
              </v-alert>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mb-10">
        <v-col cols="12" md="7">
          <v-card elevation="6" class="pa-6">
            <v-card-title class="text-h5 font-weight-bold">What we look for</v-card-title>
            <v-card-text>
              <v-expansion-panels variant="accordion">
                <v-expansion-panel v-for="(requirement, index) in requirements" :key="requirement">
                  <v-expansion-panel-title>
                    <v-icon color="error" class="mr-3">mdi-check-circle-outline</v-icon>
                    Requirement {{ index + 1 }}
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    {{ requirement }}
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
              <p class="text-body-2 mt-4">
                Please gather the required documents before starting your application to make the review process swift and clear.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="5">
          <v-card elevation="6" class="pa-6" color="#fff0f0">
            <v-card-title class="text-h6 font-weight-bold">Need assistance?</v-card-title>
            <v-card-text>
              <v-list density="comfortable">
                <v-list-item>
                  <template #prepend>
                    <v-icon color="error">mdi-email-outline</v-icon>
                  </template>
                  <v-list-item-title>
                    <a :href="`mailto:${contact.email}`" class="text-decoration-none">{{ contact.email }}</a>
                  </v-list-item-title>
                  <v-list-item-subtitle>Send your motivational letter and documents here.</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="error">mdi-file-document-outline</v-icon>
                  </template>
                  <v-list-item-title>
                    <a :href="contact.faq" target="_blank" class="text-decoration-none">Funding FAQ</a>
                  </v-list-item-title>
                  <v-list-item-subtitle>Understand timelines, eligibility and reporting expectations.</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>


      <v-row>
        <v-col cols="12">
          <v-card elevation="6" class="pa-8" color="#fef4f5">
            <v-card-title class="text-h5 font-weight-bold text-center">Voices from our partners</v-card-title>
            <v-row class="mt-6" dense>
              <v-col v-for="(testimonial, index) in testimonials" :key="testimonial.partner" cols="12" md="4">
                <v-card :style="{ borderTop: `6px solid ${testimonialColor(index)}` }" elevation="3" class="pa-6 h-100">
                  <v-icon color="error" size="32" class="mb-3">mdi-format-quote-close</v-icon>
                  <p class="text-body-2 mb-4">{{ testimonial.quote }}</p>
                  <div class="text-subtitle-2 font-weight-medium">{{ testimonial.partner }}</div>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style scoped>
.ngo-page {
  background: #faf8f7;
}

.hero {
  background: linear-gradient(120deg, #e4002b, #b71c1c);
  color: white;
}

.stat-highlight {
  text-align: center;
  padding: 32px;
  background: white;
}
.lg-container{
  width: 500%;
}

a {
  color: inherit;
}
</style>
