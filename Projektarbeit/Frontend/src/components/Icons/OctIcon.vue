<script>
import { createVNode } from 'vue'
import iconsData from '@primer/octicons/build/data.json'

export default {
  name: 'OctIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 16,
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

      return {
        tag: 'svg',
        attrs: {
          width: customWidth,
          height: customHeight,
          viewBox: viewBox,
          class: `octicon octicon-${this.name}`,
          innerHTML: iconSizeData.path
        }
      }
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
        throw new Error(`The size "${this.size}" does not exist for the icon "${this.name}".`)
      }
    }
  },
  mounted() {
    this.checkIconAvailability()
  },
  render() {
    return createVNode(this.iconSVG.tag, this.iconSVG.attrs)
  }
}
</script>
