new Vue({
    el: '#con',
    data: {
      uname: null,
      uemail: null,
      uphone: null,
      usubject: null,
      umessage: null,
      bye: false,
    },
    methods: {
        sub: function(){
            var isValid = true;

            var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
			var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
			if (this.uemail == null) { 
				$("#email").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(this.uemail.trim()) ) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
            } else{
                $("#email").next().text("");
            }           
			if (this.uname ==null) {
				$("#name").next().text("This field is required.");
				isValid = false;
            } else{
                $("#name").next().text("");
            }         
            if(this.usubject == null){
                $("#subject").next().text("This field is required.");
				isValid = false;
            }
            else{
                $("#subject").next().text("");
            }
            if(this.umessage == null){
                $("#message").next().text("This field is required.");
				isValid = false;
            } else{
                $("#message").next().text("");
            }
            if(this.uphone == null){
				$("#phone").next().text("This field is required.");
				isValid = false;
			} else if (!phonePattern.test(this.uphone.trim())){
				$("#phone").next().text("Must be a valid phone number.");
				isValid = false;
            } else{
				$("#phone").next().text("");
            }
            if(isValid){ 
                 this.bye=true
            }
        }
    }     
  })
