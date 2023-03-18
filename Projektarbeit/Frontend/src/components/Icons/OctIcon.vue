<template>
  <div v-html="iconSVG" />
</template>

<script>
import iconsData from '@primer/octicons/build/build/data.json'

export default {
  name: 'OctIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 12,
      validator(value) {
        return [12, 16, 24].includes(value)
      }
    },
    width: Number,
    height: Number
  },
  computed: {
    iconData() {
      return iconsData[this.name]
    },
    iconSVG() {
      if (!this.iconData || !this.iconData.heights[this.size]) {
        return ''
      }

      const iconSizeData = this.iconData.heights[this.size]
      const viewBox = `0 0 ${iconSizeData.width} ${this.size}`
      const customWidth = this.width ? this.width : iconSizeData.width
      const customHeight = this.height ? this.height : this.size

      return `<svg xmlns="http://www.w3.org/2000/svg" width="${customWidth}" height="${customHeight}" viewBox="${viewBox}">${iconSizeData.path}</svg>`
    }
  },
  watch: {
    name(newName, oldName) {
      this.checkIconAvailability()
    },
    size(newSize, oldSize) {
      this.checkIconAvailability()
    }
  },
  methods: {
    checkIconAvailability() {
      if (!this.iconData) {
        throw new Error(`The icon "${this.name}" does not exist.`)
      }
      if (!this.iconData.heights[this.size]) {
        throw new Error(`The icon "${this.name}" with the size "${this.size}" is not available.`)
      }
    }
  },
  mounted() {
    this.checkIconAvailability()
  }
}
</script>

<style scoped>
div {
  display: inline-block;
  vertical-align: middle;
}
</style>
