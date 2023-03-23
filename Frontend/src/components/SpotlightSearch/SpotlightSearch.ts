import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SpotlightSearch',
  data() {
    return {
      searchQuery: '',
      searchResults: [],
      searchResultsOpen: false,
      searchResultsLoading: false,
      searchResultsError: false,
      searchResultsErrorMessage: ''
    }
  },
  methods: {
    async search() {
      this.searchResultsLoading = true
      this.searchResultsError = false
      this.searchResultsErrorMessage = ''
      try {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=${this.searchQuery}`
        )
        const data = await response.json()
        this.searchResults = data.items
      } catch (error: any) {
        this.searchResultsError = true
        this.searchResultsErrorMessage = error.message
      } finally {
        this.searchResultsLoading = false
      }
    }
  }
})
