export default {
  name: 'SideBar',
  data() {
    return {
      menuItems: [
        {
          title: 'Home',
          icon: 'home',
          to: '/'
        },
        {
          title: 'About',
          icon: 'info',
          to: '/about'
        },
        {
          title: 'Contact',
          icon: 'contacts',
          to: '/contact'
        }
      ]
    }
  }
}
