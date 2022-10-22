<template>
  <div class="chart-container">
    <canvas id="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'HelloWorld',

  data: () => ({
    dataset: {
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    }
  }),
  mounted() {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'line',
      data: this.dataset,
    });
  },
  methods: {
    inc() {
      this.number++
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
