<template>
  <div>
    <section class="lrcc-section lrcc-section--light">
      <v-container>
        <span class="lrcc-badge mb-4 d-inline-flex">Connect &amp; Grow</span>
        <h1 class="text-h2 text-sm-h1 mb-6">We would love to meet you</h1>
        <v-row class="gy-8">
          <v-col cols="12" md="6">
            <p class="text-body-1 mb-6">
              New to LRCC or visiting for the first time? Complete the visitor form and our welcome team will connect with you
              via email or WhatsApp. We are here to walk with you as you find your place in the family.
            </p>
            <v-form
              action="https://formspree.io/f/mvgpnjlq"
              method="POST"
              class="lrcc-card lrcc-card--outline pa-6"
            >
              <v-row class="gy-4">
                <v-col cols="12" sm="6">
                  <v-text-field label="Name" name="name" variant="outlined" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field label="Surname" name="surname" variant="outlined" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Contact Info (Email or WhatsApp)" name="contact" variant="outlined" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea label="Reason for Visit" name="reason" variant="outlined" rows="3"></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-select
                    label="Interest"
                    name="interest"
                    variant="outlined"
                    :items="['Join the church', 'Connect Sessions', 'Cell Group', 'Volunteer']"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-btn color="primary" rounded="lg" size="large" type="submit" block>Submit Form</v-btn>
                </v-col>
              </v-row>
              <input type="hidden" name="_subject" value="New LRCC visitor submission" />
            </v-form>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="lrcc-card pa-6 mb-6">
              <h2 class="text-h4 mb-3">Connect Sessions</h2>
              <p class="text-body-1 mb-4">
                Join our midweek Connect Sessions every Friday at 18:30. We gather for worship, Bible teaching, and focused
                discipleship conversations inspired by our community flyers.
              </p>
              <v-divider class="my-4"></v-divider>
              <v-list density="comfortable">
                <v-list-item>
                  <template #prepend>
                    <v-icon icon="mdi-calendar-clock" color="secondary"></v-icon>
                  </template>
                  <v-list-item-title>Fridays | 18:30 – 20:00</v-list-item-title>
                  <v-list-item-subtitle>Main Auditorium, LRCC Campus</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon icon="mdi-book-open-page-variant" color="secondary"></v-icon>
                  </template>
                  <v-list-item-title>Interactive Bible exploration</v-list-item-title>
                  <v-list-item-subtitle>Small groups for deeper reflection</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card>

            <v-card class="lrcc-card pa-6">
              <h2 class="text-h5 mb-3">Join Our WhatsApp Communities</h2>
              <p class="text-body-2 mb-4">Stay updated and receive encouragement throughout the week.</p>
              <v-row class="gy-3">
                <v-col cols="12" sm="6">
                  <v-btn block rounded="lg" color="primary" prepend-icon="mdi-whatsapp" href="https://wa.me/27630000001" target="_blank">
                    Men
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn block rounded="lg" color="secondary" prepend-icon="mdi-whatsapp" href="https://wa.me/27630000002" target="_blank">
                    Ladies
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn block rounded="lg" color="primary" prepend-icon="mdi-whatsapp" href="https://wa.me/27630000003" target="_blank">
                    Youth
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn block rounded="lg" color="secondary" prepend-icon="mdi-whatsapp" href="https://wa.me/27630000004" target="_blank">
                    Children
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>
