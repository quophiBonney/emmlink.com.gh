$(function () {
    $('#men-pay-now').click(function(e){
        e.preventDefault();
        
        var pay = $.ajax({
            type: 'post',
            data: {'chk-client-log-session': '-_-'},
            url: 'php/session.php',
            success: function (result) {
                if(result == '1'){
                    window.location.href = 'checkout.php';
                }else if (result == '0'){
                    window.location.href = 'account.php';
                }else{
                    alert(result);
                }
            },
            error: function (req, status, error) {
                // End Loader
                alert(req.responseText);
            }
        });
    })
})