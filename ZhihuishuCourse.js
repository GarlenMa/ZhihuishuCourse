setInterval(function () {
    //设置清晰度为流畅
    if ($('.line1gq').hasClass('active')) {
        $('.line1bq').click();
    }
    //设置1.5倍速
    $('.speedTab15').click();
    //静音
    setTimeout(function () {
        if (!$('.volumeBox').hasClass('volumeNone')) {
            $('.volumeIcon').click();
        }
    }, 500);
    //关闭弹题
    if ($('.isExamFinish')) {
        $('.isExamFinish').val('0');
        setTimeout(function () {
            $('.popboxes_close.tmui_txt_hidd').click();
        }, 500);
    }
    //自动播放下一集
    if (($('.currentTime').text() == $('.duration').text()) && $('.currentTime').text() != '00:00:00') {
        $('#nextBtn').click();
    }
}, 500);