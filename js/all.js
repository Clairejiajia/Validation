$(document).ready(function() {
    /*progress 圖樣*/
    $('.now, .otherPage').addClass('far fa-circle');
    $('.finshPage').addClass('fas fa-check-circle');
    /*表單focus*/
    $('input').focus(function() {
        $(this).css("border-color", "#006cff");
    });
    $('input').blur(function() {
        $(this).css("border-color", "");
    });

    /*表單-年分*/


    /*表單-地址*/
    $('#twzipcode').twzipcode();
    /*表單-驗證錯誤*/
    $(".container .submit").click(function() {
        if ($("#account").val() == "") {
            alert("請設定您的帳號");
            eval("#create-account['#account'].focus()");
        } else if ($("#password").val() == "") {
            alert("請設定您的密碼");
            eval("document#create-account['password'].focus()");
        } else if ($("#comfirm-password").val() == "") {
            alert("請確認您的密碼");
            eval("document#create-account['comfirm-password'].focus()");
        } else {
            document.form1.submit();

        }
    })
});