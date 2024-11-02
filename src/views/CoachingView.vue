<template>
  <form @submit.prevent="handleSubmit" class="coaching-form">
    <h2>Coaching Session Form</h2>

    <div class="form-group">
      <label for="date">Date:</label>
      <input type="date" v-model="formData.date" required class="form-control" />
    </div>

    <div class="form-group">
      <label for="managerName">Name of Team Manager:</label>
      <input type="text" v-model="formData.managerName" required class="form-control" />
    </div>

    <div class="form-group">
      <label for="coachedName">Name of the Person Being Coached:</label>
      <input type="text" v-model="formData.coachedName" required class="form-control" />
    </div>

    <div class="form-group">
      <label for="interaction">Interaction:</label>
      <select v-model="formData.interaction" required class="form-control">
        <option value="PNR">PNR</option>
        <option value="Interaction ID">Interaction ID</option>
      </select>
    </div>

    <div v-if="formData.interaction" class="form-group">
      <label v-if="formData.interaction === 'PNR'" for="pnr">Enter PNR:</label>
      <label v-else for="interactionId">Enter Interaction ID:</label>
      <input 
        v-if="formData.interaction === 'PNR'" 
        type="text" 
        v-model="formData.pnr" 
        placeholder="Enter PNR" 
        class="form-control" 
        required 
      />
      <input 
        v-else 
        type="text" 
        v-model="formData.interactionId" 
        placeholder="Enter Interaction ID" 
        class="form-control" 
        required 
      />
    </div>

    <div class="form-group">
      <label for="coachingType">What are we coaching?</label>
      <select v-model="formData.coachingType" required class="form-control" @change="handleCoachingTypeChange">
        
        <option value="General Feedback">General Feedback</option>
        <option value="Escalation">Escalation</option>
        <option value="QA">QA</option>
      </select>
    </div>

    <div v-if="formData.coachingType === 'Escalation'" class="form-group">
      <label for="escalationType">Select Escalation Type:</label>
      <select v-model="formData.escalationType" required class="form-control" @change="handleEscalationChange">
        <option value="JB">JB</option>
        <option value="PIO">PIO</option>
      </select>
    </div>

    <div v-if="formData.escalationType" class="form-group">
      <label for="escalationIssue">Select Escalation Issue:</label>
      <select v-model="formData.escalationIssue" required class="form-control">
        <option value="Correct Process not followed">Correct Process not followed</option>
        <option value="2 for 1 Exchange">2 for 1 Exchange</option>
        <option value="BT Used on Codeshare">BT Used on Codeshare</option>
        <option value="Cold Transfer">Cold Transfer</option>
        <option value="Did Not Qualify Based on GL">Did Not Qualify Based on GL</option>
        <option value="Excessive Comp DNQ">Excessive Comp DNQ</option>
        <option value="Fees Not Collected">Fees Not Collected</option>
        <option value="Incorrect CC Escalation">Incorrect CC Escalation</option>
        <option value="Incorrect TB/BT Merge">Incorrect TB/BT Merge</option>
        <option value="Incomplete BT Extension">Incomplete BT Extension</option>
        <option value="Incorrect Use of Invol">Incorrect Use of Invol</option>
        <option value="Multiple Errors">Multiple Errors</option>
        <option value="Refund To OFP DNA">Refund To OFP DNA</option>
      </select>
    </div>

    <div v-if="formData.coachingType === 'QA'" class="form-group">
      <label for="qaType">Select QA Type:</label>
      <select v-model="formData.qaType" required class="form-control">
        <option value="Fatal">Fatal</option>
        <option value="Process">Process</option>
      </select>
    </div>

    <!-- Section to discuss after selecting coaching type -->
    <div class="form-group">
      <label for="discussion">What was discussed:</label>
      <textarea v-model="formData.discussion" required class="form-control"></textarea>
    </div>

    <div class="form-group">
      <label for="agreement">What was agreed upon:</label>
      <textarea v-model="formData.agreement" required class="form-control"></textarea>
    </div>

    <button type="submit" class="submit-button">Submit</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  date: '',
  managerName: '',
  coachedName: '',
  interaction: '',
  pnr: '',
  interactionId: '',
  coachingType: '',
  escalationType: '',
  escalationIssue: '',
  qaType: '',
  discussion: '',
  agreement: ''
});

// Handle change in coaching type
const handleCoachingTypeChange = () => {
  // Reset relevant fields based on coaching type
  formData.value.escalationType = '';
  formData.value.escalationIssue = '';
  formData.value.qaType = '';
};

// Handle change in escalation type
const handleEscalationChange = () => {
  formData.value.escalationIssue = ''; // Reset escalation issue when type changes
};

const handleSubmit = () => {
  console.log('Form Submitted:', formData.value);
  // Handle form submission (e.g., send to an API)
};
</script>

<style scoped>
/* Add your styles here */
.coaching-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1rem;
}

.form-control:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.submit-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
