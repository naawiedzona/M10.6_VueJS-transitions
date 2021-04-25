<template>
    <div class="form-controls">
        <label>{{label}}</label>
        <input  :type="type" 
                :placeholder="placeholder" 
                :id="id" 
                @blur="CheckInput"
                v-model="valueInput" >
        <p class="errorMessage" v-if="requireInput">Required</p> 
        <p class="errorMessage" v-else-if="alphaInput">You can only use letters</p>
        <p class="errorMessage" v-else-if="numberInput">You can only use numbers</p>
        <p class="errorMessage" v-else-if="emailInput">You should put a real email adress</p>
        <p class="errorMessage" v-else-if="passwordInput">The password should have between 6 and 13 letters, including capital letters and lower cases</p>
        <p class="errorMessage" v-else-if="matchingPasswords">The passwords should match</p>
    </div>
</template>
<script src="../scripts/element-formulari.js"></script>
<style src="../styles/element-formulari.css" scoped></style>