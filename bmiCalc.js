Vue.component('bmi-calculator', {
	template:
			`<div><label for="uheight" style="width: 37%">Enter your height in inches:<span class="required">*</span></label>
			<input id="uheight" v-model.number="height" type="number"><span class="required"></span>
			<br>

			<label for="uweight" style="width: 37%">Enter your weight in pounds:<span class="required">*</span></label>
			<input id="uweight" v-model.number="weight" type="number"><span class="required"></span>
			<br>
			<p>
				Your BMI: {{ BMI }}
			</p>

			<p :hidden="!hasBeenCalculated" v-if="BMI < 18.5" style="color:rgba(204, 0, 255, 0.753)">
				Your BMI group: {{ underweight }}
			</p>
			<p v-else-if="BMI < 25" style="color:green">
				Your BMI group: {{ normalWeight }}
			</p>
			<p v-else-if="BMI < 30" style="color:orange">
				Your BMI group: {{ overweight }}
			</p>
			<p v-else style="color:red">
				Your BMI group: {{ obese }}
			</p>

			<button @click="calculateBMI">Calculate</button></div>`,
		
		props: ['gender'],
		
		data: function() {
			return {
				height: null,
				weight: null,
				BMI: null,
				underweight: "Underweight- Eat more cholent!!",
				normalWeight: "Normal weight- Kein Ayin Hara!!",
				overweight: "Overweight- Take a nice long shabbos walk",
				obese: "Obese- Only the rebbe's bracha can help you now",
				hasBeenCalculated: false
			}
		},
		
		methods: {
			calculateBMI: function(){
      var isValid = true;
      if(this.height==null){ //i tried doing isNan but it didn't work because I believe Vue turned it right away to a number since I put type="number" but the input tag
        $("#uheight").next().text("This field is required.");
        isValid=false;
      }else if(this.height<12){
        $("#uheight").next().text("All people at least one foot tall!");
        isValid=false;
      }else{
        $("#uheight").next().text("");
      }
      if(this.weight==null){
        $("#uweight").next().text("This field is required.");
        isValid=false;
      }else if(this.weight<6){
        $("#uweight").next().text("All people are at least six pounds!");
        isValid=false;
      }else{
        $("#uweight").next().text("");
      }
      if(isValid){
        this.BMI = this.$props.gender === "male" ? ((703 * (this.weight / (this.height * this.height))).toFixed(1)) : 
        ((705 * (this.weight / (this.height * this.height))).toFixed(1));
        this.hasBeenCalculated = true;
      }
    }
		}
})

var app = new Vue({
	el: '#bm',
})
