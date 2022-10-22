<template>
  <div class="chart-container">
    <canvas :id="id" :width="width" :height="height"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'LineChart',

  props: {
    title: String,
    labels: Array,
    dataset: Object,
    width: Number,
    height: Number,
    id: String
  },
  data() {
    this.chart = null
    return {

    }
  },
  mounted() {
    const ctx = document.getElementById(this.id);
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.labels || [],
        datasets: [{
          label: this.title,
          data: this.dataset || [],
          fill: false,
          borderColor: 'rgb(87,119,250)',
          tension: 0.1
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false,
          }
        },
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
  },
  methods: {

  },
  watch: {
    dataset: function (newVal) {
      this.chart.data.datasets[0].data = newVal
      this.chart.update();
    },
    labels: function (newVal) {
      this.chart.data.labels = newVal
      this.chart.update();
    }
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
