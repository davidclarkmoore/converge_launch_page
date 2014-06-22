$('input').each(function() {

       var default_value = this.value;

       $(this).focus(function(){
               if(this.value == default_value) {
                       this.value = '';
               }
       });

       $(this).blur(function(){
               if(this.value == '') {
                       this.value = default_value;
               }
       });

});




Parse.initialize("UjgvePXacuR4ahO7jagVvYEjrbWtDTKolP54ks5f", "3aeKGDCOsy0GzZARPNM9itls5ocrlmzeP2rr5nJC");


$("#email_submit").click(function() {

		var ConvergeEmail = Parse.Object.extend("ConvergeEmail");
		var convergeEmail = new ConvergeEmail();
		var emailformval = $("#email_input").val();



				convergeEmail.set("emailAddress", emailformval);
				convergeEmail.save(null, {
				  success: function(convergeEmail) {
				    // Execute any logic that should take place after the object is saved.
				    alert('Welcome to our list! Stay tuned for updates coming soon! - Converge');
				  },
				  error: function(convergeEmail, error) {
				    // Execute any logic that should take place if the save fails.
				    // error is a Parse.Error with an error code and description.
				    alert("Oh no! Something went wrong. Try again after reloading the page!");
				  }
				});

});