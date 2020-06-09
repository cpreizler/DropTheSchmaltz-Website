Vue.component('bmr-calculator', {
	template:
			`<div><label for="uheight" style="width: 37%">Enter your height in inches:<span class="required">*</span></label>
			<input id="uheight" v-model.number="height" type="number"><span class="required"></span>
			<br>

			<label for="uweight" style="width: 37%">Enter your weight in pounds:<span class="required">*</span></label>
			<input id="uweight" v-model.number="weight" type="number"><span class="required"></span>
            <br>
        
            <label for="birth" style="width: 37%">Enter you date of birth: <span class="required">*</span></label>
			<input id="birth" v-model="dob" type="date"><span class="required"></span>
            <br>
            <br>    

            <p>Your BMR: {{ BMR }}</p>	
            	
            <button @click="calculateBMR">Calculate</button></div>`,
		
		props: ['gender'],
		
		data: function() {
			return {
				height: null,
                weight: null,
                BMR: null,
                dob: null,
				hasBeenCalculated: false
			}
		},
		
		methods: {
			calculateBMR: function(){
      var isValid = true;
      if(this.height==null){ //i tried doing isNan but it didn't work because I believe Vue turned it right away to a number since I put type="number" but the input tag
        $("#uheight").next().text("This field is required.");
        isValid=false;
      }else if(this.height<4){
        $("#uheight").next().text("All people are at least four inches!");
        isValid=false;
      }else{
        $("#uheight").next().text("");
      }
      if(this.weight==null){
        $("#uweight").next().text("This field is required.");
        isValid=false;
      }else if(this.weight<4){
        $("#uweight").next().text("All people are at least four pounds!");
        isValid=false;
      }else{
        $("#uweight").next().text("");
      }
      if(this.dob==null){
        $("#birth").next().text("This field is required.");
        isValid=false;
      } else{          
         $("#birth").next().text("");          
      }
      if(isValid){
        var age = getAge(this.dob);
        this.BMR = this.$props.gender === "male" ? ((66.47+(6.24*this.weight)+(12.7*this.height)-(6.755*age)).toFixed(1)):
        ((655.1 + (4.35*this.weight)+(4.7*this.height)-(4.7*age)).toFixed(1));
        this.hasBeenCalculated = true;
      }
    }
		}
})

function getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
}

var app = new Vue({
    el: '#bmr',
})


