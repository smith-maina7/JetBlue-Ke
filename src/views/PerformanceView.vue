<script setup>
import { ref } from 'vue'

// Sample data (could later be replaced by an API call)
const metrics = ref({
  FCR: '93%',
  CSAT: '92%',
  AHT: '10:38',
  transferBack: '6%',
  Extension: '5%',
  BarclaysCard: '4%',
  serviceFees: '35%',
  ancillaryRevenue: '$48700',
  surveySentPercentage: '80%',
  QUALITY: '88%',
})
</script>

<template>
  <main>
    <div class="dashboard">
      <h1>JetBlue Campaign Dashboard</h1>
      <div class="metrics-container">
        <div class="metric-card">
          <h2>FCR</h2>
          <p>{{ metrics.FCR }}</p>
        </div>
        <div class="metric-card">
          <h2>CSAT</h2>
          <p>{{ metrics.CSAT }}</p>
        </div>
        <div class="metric-card">
          <h2>AHT</h2>
          <p>{{ metrics.AHT }}</p>
        </div>
        <div class="metric-card">
          <h2>Transfer Back</h2>
          <p>{{ metrics.transferBack }}</p>
        </div>
        <div class="metric-card">
          <h2>Extension</h2>
          <p>{{ metrics.Extension }}</p>
        </div>
        <div class="metric-card">
          <h2>Barclays Card</h2>
          <p>{{ metrics.BarclaysCard }}</p>
        </div>
        <div class="metric-card">
          <h2>Service Fees</h2>
          <p>{{ metrics.serviceFees }}</p>
        </div>
        <div class="metric-card">
          <h2>Ancillary Revenue</h2>
          <p>{{ metrics.ancillaryRevenue }}</p>
        </div>
        <div class="metric-card">
          <h2>Survey Sent %</h2>
          <p>{{ metrics.surveySentPercentage }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.dashboard {
  text-align: center;
  margin: 0 auto;
  max-width: 900px;
}

.metrics-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.metric-card {
  background-color: #f4f4f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 200px;
  text-align: center;
}

.metric-card h2 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
}

.metric-card p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
}
</style>
