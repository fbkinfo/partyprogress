$("#region").chosen({no_results_text: "Регион не нейден"});

$(document).on('submit','form',function(event){
   	var $email = $('#email');
	if($email.val() != '') {
		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
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