//$("#region").chosen({no_results_text: "Регион не нaйден"});
$("#region").select2();

$(document).on('submit','#_form_1338',function(event){
   	var $email = $('#email');
	if($email.val() != '') {
		var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(pattern.test($email.val())){
			$email.parent().removeClass('has-error has-feedback');
			$email.next().addClass('hide');
		} else {
			$email.parent().addClass('has-error has-feedback');
			$email.next().text('Введите правильный e-mail').removeClass('hide');
			event.preventDefault();
		}
	} else {
		$email.parent().addClass('has-error has-feedback');
		$email.next().text('Это поле надо заполнить').removeClass('hide');
		event.preventDefault();
	}
});

$(document).on('submit', '#donate__form-form', function(e) {
    var $summa = $('#summa');
    var $series = $('#series');
    var $number = $('#number');
    var $day = $('#day');
    var $month = $('#month');
    var $year = $('#year');

    if ( $summa.val() == '' ) {
        $summa.parent().addClass('has-error');
        $summa.next().text('Введите сумму платежа').removeClass('hide');
        e.preventDefault();
    }

    if ( $series.val() == '' || $number.val() == '' ) {
        $('#passport').addClass('has-error');
        $('#passport .help-block').text('Введите серию и номер паспорта').removeClass('hide');
        e.preventDefault();
    }

    if ( $day.val() == '' || $month.val() == '' || $year.val() == '' ) {
        $('#birthday').addClass('has-error');
        $('#birthday .help-block').text('Введите дату рождения').removeClass('hide');
    }
});

$('a[href=#donate]').on('click', function(e) {
    e.preventDefault();

    $('.donate__stage1').fadeToggle('fast', function() {
        $('.donate__stage2').fadeToggle('fast', function() {
            $("select[name=month]").select2();
        });
    });
});

$('#donate__form-form input[type=checkbox]').on('change', function() {
    $('#donate__form-form button').toggleClass('disabled');
});