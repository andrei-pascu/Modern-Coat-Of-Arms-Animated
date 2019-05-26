var x = true;
var y = true;
var z = true;
$('.do-it').click(function() {
    if (y) {
        $('.do-it').siblings('svg').removeClass('path2');
        $('.do-it').css({'pointer-events': 'none'});
        if (x) {
            $('.do-it').siblings('svg').addClass('breathe');
            setTimeout(function() {
                $('.do-it-text').text('OUT');
                $('.do-it').siblings('svg').addClass('fill-shield');
                setTimeout(function() {
                    $('.do-it').siblings('svg').addClass('fill-C');
                    setTimeout(function() {
                        $('body').addClass('button-enable');
                    }, 2000);
                }, 11500);
            }, 2000);
            x = false;
            $('body').addClass('bk-change');
        } else {
            x = true;

            
            $('.do-it').siblings('svg').addClass('path2');
            // $('.do-it').siblings('svg').addClass('out');
            // $('.do-it').siblings('svg').removeClass('out');
            // $('.do-it').siblings('svg').addClass('bk-out');
            // $('.do-it').siblings('svg').removeClass('bk-out');
            setTimeout(function() {
                $('.do-it').siblings('svg').removeClass('breathe');
                $('.do-it').siblings('svg').removeClass('fill-shield');
                $('.do-it').siblings('svg').removeClass('fill-C');
                $('.do-it-text').text('IN');
                $('body').removeClass('bk-change');
                $('body').removeClass('button-enable');
            }, 200);
        }

    }
    if (z) {
        y = false;
        z = false;
        setTimeout(function() {
            y = true;
            $('.do-it').css({'pointer-events': 'all'});
        }, 17000);

    } else {
        y = false;
        z = true;
        $('.do-it').addClass('gray');
        setTimeout(function() {
            y = true;
            $('.do-it').removeClass('gray');
        }, 3300);
        setTimeout(function() {
            y = true;
            $('.do-it').css({'pointer-events': 'all'});
        }, 3500);
    }


    // on out!!!!
    // setTimeout(function() {
    //     y = true;
    //     $('.do-it').css({'pointer-events': 'all'});
    // }, 2200);
})