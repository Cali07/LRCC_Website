<template>
  <div>
    <section class="lrcc-section lrcc-section--light">
      <v-container>
        <span class="lrcc-badge mb-4 d-inline-flex">Contact</span>
        <h1 class="text-h2 text-sm-h1 mb-6">Get in touch</h1>
        <v-row class="gy-8">
          <v-col cols="12" md="6">
            <v-card class="lrcc-card pa-6 mb-6">
              <h2 class="text-h4 mb-3">Visit Us</h2>
              <div class="d-flex align-center gap-3 mb-3">
                <v-avatar size="44" class="lrcc-avatar-light">
                  <v-icon icon="mdi-map-marker" color="primary"></v-icon>
                </v-avatar>
                <div>
                  <strong>35 Troye Street, Sunnyside, Pretoria</strong>
                  <div class="text-body-2">Parking available on-site</div>
                </div>
              </div>
              <div class="d-flex align-center gap-3 mb-3">
                <v-avatar size="44" class="lrcc-avatar-light">
                  <v-icon icon="mdi-whatsapp" color="primary"></v-icon>
                </v-avatar>
                <div>
                  <a href="https://wa.me/27630000000" target="_blank" rel="noopener">WhatsApp: +27 63 000 0000</a>
                  <div class="text-body-2">Call: +27 12 000 0000</div>
                </div>
              </div>
              <div class="d-flex align-center gap-3">
                <v-avatar size="44" class="lrcc-avatar-light">
                  <v-icon icon="mdi-email" color="primary"></v-icon>
                </v-avatar>
                <div>
                  <a href="mailto:hello@lrcc.org">hello@lrcc.org</a>
                  <div class="text-body-2">Office hours: Tue – Fri, 09:00 – 16:00</div>
                </div>
              </div>
            </v-card>

            <v-card class="lrcc-card pa-6">
              <h2 class="text-h5 mb-3">Service Times</h2>
              <v-list density="comfortable">
                <v-list-item>
                  <v-list-item-title>Sunday Celebration</v-list-item-title>
                  <v-list-item-subtitle>09:00 – 11:00</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Friday Connect Sessions</v-list-item-title>
                  <v-list-item-subtitle>18:30 – 20:00</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="lrcc-card pa-6 mb-6">
              <h2 class="text-h4 mb-4">Email Us</h2>
              <v-form action="https://formspree.io/f/mknlnqev" method="POST">
                <v-row class="gy-4">
                  <v-col cols="12">
                    <v-text-field label="Full Name" name="name" variant="outlined" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Email Address" name="email" type="email" variant="outlined" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea label="Message" name="message" rows="4" variant="outlined" required></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <v-btn color="primary" rounded="lg" size="large" type="submit" block>Send Message</v-btn>
                  </v-col>
                </v-row>
                <input type="hidden" name="_subject" value="LRCC website enquiry" />
              </v-form>
            </v-card>

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
  </div>
</template>
