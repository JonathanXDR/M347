import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SettingsView',
  components: {},
  data() {
    return {
      categories: [
        {
          title: '',
          settings: [
            {
              title: 'Public profile',
              icon: 'person'
            },
            {
              title: 'Account',
              icon: 'gear'
            },
            {
              title: 'Appearance',
              icon: 'paintbrush'
            },
            {
              title: 'Accessibility',
              icon: 'accessibility'
            },
            {
              title: 'Notifications',
              icon: 'bell'
            }
          ]
        },
        {
          title: 'Access',
          settings: [
            {
              title: 'Billing and plans',
              icon: 'credit-card'
            },
            {
              title: 'Emails',
              icon: 'mail'
            },
            {
              title: 'Password and authentication',
              icon: 'shield-lock'
            }
          ]
        }
      ]
    }
  }
})
