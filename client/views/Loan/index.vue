<template>
  <div class="box">
    <bar-example></bar-example>
  </div>
</template>

<script>
import BarExample from '../../components/ChartComponents/BarExample'
export default {

  data() {
    return {
      loans: []
    }
  },
  mounted() {
  },
  components: {
    BarExample
  },
  methods: {
  }

}
</script>

<style lang="scss" scoped>

</style>