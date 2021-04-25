export default {
    methods: {
      SubmitForm(e) {
        e.preventDefault();
        let validations = [];
        const allFalse = (arr) => arr.every((v) => v === false);
        for (let i = 0; i < this.validationInput.length; i++) {
          validations.push(this.validationInput[i].state);
          let isCorrect = allFalse(validations);
          console.log(e.target.form);
          if (validations.length >= e.target.form.length - 1 && isCorrect) {
            alert("campos rellenados correctamente ");
          } else {
            this.submitForm = true;
          }
        }
      },
    },
    props: ["type", "id", "value", "sendForm", "validationInput", "submitForm"],
  };
  