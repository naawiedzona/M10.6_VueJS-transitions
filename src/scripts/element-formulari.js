export default {
    data() {
      return {
        valueInput: "",
        requireInput: false,
        alphaInput: false,
        numberInput: false,
        emailInput: false,
        passwordInput: false,
        matchingPasswords: false,
        correctPassword: "",
        validateOk: {
          id: this.id,
          state: false,
          name: "",
        },
      };
    },
    props: [
      "label",
      "type",
      "placeholder",
      "id",
      "autofocus",
      "require",
      "alpha",
      "numbers",
      "emails",
      "passwords",
      "confirmPassword",
      "correctPasswordOk",
    ],
    methods: {
      CheckInput() {
        //required
        if (this.require) {
          if (this.valueInput === "") {
            this.requireInput = true;
          } else {
            this.requireInput = false;
          }
          // only letters
          if (this.alpha) {
            var letters = /^[A-Za-z]+$/;
            if (!this.valueInput.match(letters)) {
              this.alphaInput = true;
              this.validateOk.state = true;
            } else {
              this.alphaInput = false;
              this.validateOk.state = false;
            }
          }
          // only numbers
          if (this.numbers) {
            var digits = /^[0-9]*$/;
            if (!this.valueInput.match(digits)) {
              this.numberInput = true;
              this.validateOk.state = true;
            } else if (this.valueInput === "") {
              this.requireInput = true;
              this.validateOk.state = true;
              this.validateOk.msm = "required";
            } else {
              this.numberInput = false;
              this.validateOk.state = false;
            }
          }
          //email
          if (this.emails) {
            var emails = /([a-zñ\d.-]+)@([a-zñ\d.-]+).([a-z]{2,})/gi;
            if (!this.valueInput.match(emails)) {
              this.emailInput = true;
              this.validateOk.state = true;
            } else {
              this.emailInput = false;
            }
          }
          //password
          if (this.passwords) {
            var passwords = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,13})$/;
            if (!this.valueInput.match(passwords)) {
              this.passwordInput = true;
              this.validateOk.state = true;
            } else {
              this.passwordInput = false;
              this.correctPassword = this.valueInput;
              this.$emit("GetPasswordValue", this.correctPassword);
            }
          }
          //password match
          if (this.confirmPassword) {
            if (
              this.valueInput !== this.correctPasswordOk &&
              this.valueInput !== ""
            ) {
              console.log("las contraseñas son diferentes");
              this.matchingPasswords = true;
              this.validateOk.state = true;
            } else {
              console.log("las contraseñas son iguales");
              this.matchingPasswords = false;
              this.validateOk.state = false;
            }
          }
        }
        this.validateOk.name = this.valueInput;
        this.$emit("GetValidation", this.validateOk);
      },
    },
  };