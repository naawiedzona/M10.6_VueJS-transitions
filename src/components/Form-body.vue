<template>
<div>
    <form action="" id="form">
        <elementFormulari
            :label="'Name:'"
            :type="'text'"
            :placeholder="'name'"
            :id="'username'"
            :require=true
            :alpha=true
            @GetValidation="GetValidationMethod">
        </elementFormulari>

         <elementFormulari
            :label="'Phone:'"
            :type="'text'"
            :placeholder="'phone number'"
            :id="'phonenumber'"
            :require=true
            :numbers=true
            @GetValidation="GetValidationMethod">
        </elementFormulari>

        <elementFormulari
            :label="'Post code:'"
            :type="'text'"
            :placeholder="'post code'"
            :id="'post'"
           :require=true
           :numbers=true
           @GetValidation="GetValidationMethod">
        </elementFormulari>

        <elementFormulari
            :label="'E-mail:'"
            :type="'email'"
            :placeholder="'user@domain.com'"
            :id="'email'"
            :require=true
            :emails=true
            @GetValidation="GetValidationMethod">
        </elementFormulari>

        <elementFormulari
            :label="'Password:'"
            :type="'password'"
            :placeholder="'password'"
            :id="'password'"
            :require=true
            :passwords=true
            @GetValidation="GetValidationMethod"
            @GetPasswordValue="GetCorrectPassword">
        </elementFormulari>
        <elementFormulari
            :label="'Repeat your password:'"
            :type="'password'"
            :placeholder="'repeat your password'"
            :id="'password2'"
            :require=true
            :confirmPassword=true
            :correctPasswordOk="correctPasswordOk"
            @GetValidation="GetValidationMethod"
            >
        </elementFormulari>

        <!--     SUBMIT BUTTON     -->
        <submitButton 
            :type="'submit'"
            :id="'btn-send'"
            :value="'Register'"
            :sendForm=true
            :validationInput="validationInput"
            :submitForm=false>
        </submitButton> 
    </form>
</div>  
</template>

<script src="../scripts/form-body.js"></script>
<style src="../styles/form-body.css" scoped></style>