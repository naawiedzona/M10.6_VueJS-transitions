<template>
    <div class="submitButton">
         <input class="btn"  
                :type="type"  
                :value="value"
                :id="id"
                @click="SubmitForm">
                <p class="errorMessage" v-if="submitForm">All the fields are required</p>
    </div>
</template>

<script src="../scripts/submit-button.js"></script>
<style src="../styles/submit-button.css" scoped></style>