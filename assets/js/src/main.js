$("#region").select2();

$(document).on('submit', '#_form_1338', function (event) {
    var $email = $('#email');
    if ( $email.val() != '' ) {
        var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ( pattern.test($email.val()) ) {
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

$('a[href=#donate]').on('click', function (e) {
    e.preventDefault();

    $('.donate__stage1').fadeToggle('fast', function () {
        $('.donate__stage2').fadeToggle('fast', function () {
            $("#month").select2({
                matcher: function (term, text, option) {
                    return (String(option.context.outerHTML).toLowerCase().indexOf(term) !== -1);
                }
            }).on('change', function () {
                $('#year').focus();
            });
            $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
        });
    });
});

$('#btnGoDonate').on('click', function (e) {
    e.preventDefault();

    var summa = $('#summa-input').val().replace(/[^\d.]/g, "");

    if ( typeof summa === 'undefined' || summa === null || summa === '' ) {
        $('#summa').addClass('has-error');
        $('#summa .help-block').text('Выберите или введите сумму пожертвования').removeClass('hide');
        return;
    }

    if ( summa < 31 ) {
        $('#summa').addClass('has-error');
        $('#summa .help-block').text('Введенная сумма не достаточна для борьбы со злом').removeClass('hide');
        return;
    }

    var commission = parseInt(summa, 10) * 0.02;

    if ( commission < 30 ) {
        commission = 30;
    }

    summa = summa - commission;

    var passport = {
        series: $('#series').val().replace(/[^\d.]/g, ""),
        number: $('#number').val().replace(/[^\d.]/g, "")
    };

    if ( passport.series === '' || passport.number === '' ) {
        $('#passport').addClass('has-error');
        $('#passport .help-block').text('Введите серию и номер паспорта').removeClass('hide');
        return;
    }

    var birthday = {
        d: $('#day').val().replace(/[^\d.]/g, ""),
        m: $('#month').val().replace(/[^\d.]/g, ""),
        y: $('#year').val().replace(/[^\d.]/g, "")
    };

    if ( birthday.d === '' || birthday.m === '' || birthday.y === '' ) {
        $('#birthday').addClass('has-error');
        $('#birthday .help-block').text('Введите дату рождения').removeClass('hide');
        return;
    }

    var targets = 'Пожертв. Полит.партии «ПАРТИЯ ПРОГРЕССА», пасп ' + passport.series + ' ' + passport.number + ', д.р. ' + birthday.d + '.' + birthday.m + '.' + birthday.y + ', гражд. РФ.';

    $('#targets').val(targets);
    $('#sum').val(summa);

    $('#yandex-form').submit();
});

$('#donate__form-form input[type=checkbox]').on('change', function () {
    $('#donate__form-form button').toggleClass('disabled');
});

$('#series').mask('9999', {
    completed: function () {
        $('#number').focus();
    }
});
$('#number').mask('999999', {
    completed: function () {
        $('#day').focus();
    }
});
$('#day').mask('99', {
    completed: function () {
        $("#month").select2('open');
    }
});
$('#year').mask('9999', {
    completed: function () {
        $('#btnGoDonate').focus();
    }
});

$('.btn-money').on('click', function (e) {
    e.preventDefault();
    $('.btn-money').removeClass('active');
    $(this).addClass('active');
    $('#summa-input').val($(this).data('summa'));
    $('#series').focus();
});

$('a[href=#offer]').on('click', function (e) {
    e.preventDefault();

    var offer = $('.offer');

    offer.toggleClass('hidden');

    if ( !offer.hasClass('hidden') ) {
        $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
    }
});

$('a[href=#offer__close]').on('click', function (e) {
    e.preventDefault();
    $('.offer').toggleClass('hidden');
});

$('.social-likes').on('popup_opened.social-likes', function(event, service) {
    if ( typeof dataLayer !== 'undefined' ) {
        console.log('add ' + service + ' to dataLayer');

        dataLayer.push({
            'social-network': service,
            'event': 'share'
        });
    } else {
        console.log('dataLayer not found');
    }
});