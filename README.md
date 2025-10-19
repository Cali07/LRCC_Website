
# 🕊️ The Light Reformed Community Church (LRCC) Website

A static, responsive website for **The Light Reformed Community Church** built with **Nuxt 3**, **Vuetify**, **Pinia**, and **CSS**.

---

## ⚙️ Tech Stack
- **Nuxt 3** – static site framework  
- **Vuetify** – responsive UI components  
- **Pinia** – weekly dynamic info store  
- **CSS** – for custom styles  
- **Formspree / Jotform** – handles form submissions  

---

## 📁 Structure
```

pages/        → Home, About, Leadership, Ministries, Connect, Events, Media, Contact
components/   → Header, Footer, WeeklyHighlight, Cards
store/        → weekly.js (Pinia store for weekly content)
assets/       → images, CSS
layouts/      → default.vue

````

---

## 🔁 Weekly Updates (Pinia)
Use `/store/weekly.js` to update weekly scriptures or announcements.

```js
import { defineStore } from 'pinia'
export const useWeeklyStore = defineStore('weekly', {
  state: () => ({
    lovePrinciple: {
      verse: '1 Corinthians 13:4-7',
      text: 'Love is patient, love is kind...'
    }
  })
})
````

---

## 🏗️ Commands

```bash
npm install
npm run dev       # start dev server
npm run build     # build for production
npm run generate  # generate static files
```

---

## 🌍 Deployment

Deploy the `dist/` folder to **Netlify**, **Vercel**, or **GitHub Pages**.

---

## 📱 Info

**The Light Reformed Community Church**
35 Troye Street, Sunnyside, Pretoria

> “Drawing more and more people to the Light of Christ.”
