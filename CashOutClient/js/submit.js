//TODO giving users add record while taking users don't
Request = new Request();
$(document).ready(function () {
    $('#form-submit').click(function() {
        form_amt = $('#form-amt').val()
        venmo_amt = $('#form-amt').val() + $('#form-comm').val()
        range = $('#form-select').val()
        offer = {'cash_amt': form_amt, 'venmo_amt': venmo_amt, 'range': range, 'user_id': 1}
        console.log(offer)
        if (GetURLParameter('giving') == 'true') {
            Request.POST(offer, 'api/offer', function (result) {
                if (result.success == true) {
                    url = './offers.html?giving=' + GetURLParameter('giving')
                    window.location.replace(url)
                }
            })
        }
        else {
            url = './offers.html?giving=' + GetURLParameter('giving')
            window.location.replace(url)
        }
    })

    $('.home').click(function() {
        window.location.replace('./index.html')
    })
})

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}
