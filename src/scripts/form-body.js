import elementFormulari from "../components/elementFormulari.vue";
import submitButton from "../components/Submit-button";

export default {
  name: "Form-body",
  data() {
    return {
      validationInput: [],
      validationForm: true,
      correctPasswordOk: "",
      
    };
  },
  components: {
    elementFormulari,
    submitButton,
  },
  methods: {
    GetValidationMethod(value) {
      this.validationInput.push(value);
    },
    GetCorrectPassword(value) {
      this.correctPasswordOk = value;
      console.log(this.correctPasswordOk);
    },
  },
};
