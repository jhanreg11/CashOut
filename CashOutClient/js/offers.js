var Request = new Request()
Handlebars.partials = Handlebars.templates
$(document).ready(function () {
    Request.GET('api/offer', function (response) {
        if (response) {
            offersHTML = Handlebars.templates['offers']({
                'offers': response.offers,
                'giving': true

            })
            $('.body').html(offersHTML)
            if (GetURLParameter('giving') == 'true') {
                $('.title').html('Here are some offers that are similar to yours....')
            }
            else {
                $('.title').html('Here are all the available offers in the area...')
            }
        }
    })
    $('.offer').each().click(function() {
        if (GetURLParameter('giving') == 'false') {
            
        }
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
