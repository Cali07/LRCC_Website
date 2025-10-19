import { defineStore } from 'pinia'

export const usePartnerStore = defineStore('partner', {
    state: () => ({
        partners: [
            {
                id: 1,
                name: 'KFC',
                description: 'Get R50 off when you support AddHope. Every meal helps feed a child.',
                code: 'KFC50',
                url: 'https://www.kfc.co.za',
                logo: 'https://upload.wikimedia.org/wikipedia/sco/b/bf/KFC_logo.svg',
            },
            {
                id: 2,
                name: 'Pick n Pay',
                description: '10% off groceries every Monday. Portion of proceeds goes to school meals.',
                code: 'PNP10',
                url: 'https://www.pnp.co.za',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Pick_n_Pay_logo.svg',
            },
            {
                id: 3,
                name: 'Shoprite',
                description: 'Save R30 when buying a family basket. Shoprite also donates meals weekly.',
                code: 'SHOP30',
                url: 'https://www.shoprite.co.za',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Logo_-_Shoprite_-_SUPERMARCE.jpg',
            },
            {
                id: 4,
                name: 'Woolworths',
                description: 'R25 off healthy meal options. Woolworths contributes to nutrition programs.',
                code: 'WOOL25',
                url: 'https://www.woolworths.co.za',
                logo: 'https://logos-world.net/wp-content/uploads/2024/07/Woolworths-Logo.png',
            },
            {
                id: 5,
                name: 'Checkers',
                description: 'Free delivery on orders above R500. A percentage is donated to AddHope.',
                code: 'CHECKERSFREE',
                url: 'https://www.checkers.co.za',
                logo: 'https://i0.wp.com/stage.mchinteriors.co.za/wp-content/uploads/2018/05/Checkers-Logo.png?resize=300%2C175',
            },
            {
                id: 6,
                name: 'Nando’s',
                description: 'Buy any family meal and Nando’s will sponsor 5 meals for children in need.',
                code: 'NANDOS5',
                url: 'https://www.nandos.co.za',
                logo: 'https://1000logos.net/wp-content/uploads/2017/09/Nandos-Logo.png',
            },
        ],
        claimedCodes: [],
    }),

    actions: {
        async fetchPartners() {
            // Later: Replace with Supabase fetch
            return this.partners
        },

        claimCode(partnerId) {
            const partner = this.partners.find(p => p.id === partnerId)
            if (partner) {
                this.claimedCodes.push({ partnerId, code: partner.code, claimedAt: new Date() })
            }
        },
    },
})
