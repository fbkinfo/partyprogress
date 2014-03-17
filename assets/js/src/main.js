$("#region").chosen({no_results_text: "Регион не нейден"});

$(document).on('submit','form',function(event){
   	var $email = $('#email');
	if($email.val() != '') {
		var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
		if(pattern.test($email.val())){
			$email.parent().removeClass('has-error has-feedback');
			$email.next().addClass('hide');
		} else {
			$email.parent().addClass('has-error has-feedback');
			$email.next().text('Введите правильный e-mail');
			$email.next().removeClass('hide');
			event.preventDefault();
		}			        
	} else {
		$email.parent().addClass('has-error has-feedback');
		$email.next().text('Это поле надо заполнить');
		$email.next().removeClass('hide');
		event.preventDefault();
	}
});