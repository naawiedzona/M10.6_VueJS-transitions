export default {
    data(){
      return{
        euros:""
      }
    },
    props: {
      change1: {
        type: Number,
        required: true,
      },
    },
  
    filters: {
      changeMoney(value) {
        return (value * 1.23).toFixed(2);
      },
    },
    methods:{
      ChangeNumber(value) {
        this.euros = value
      }
    }
  };