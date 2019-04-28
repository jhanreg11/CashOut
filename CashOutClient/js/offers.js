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
	    $('.offer').click(function (index) {
		if (GetURLParameter('giving') == 'false') {
		    console.log("i made it")
		    //$('.modal').css("display", "flex")
		    alert("Offer Accepted")
		    window.location.replace('./index.html')
		}
	    })
            if (GetURLParameter('giving') == 'true') {
                $('.title').html('Here are some offers that are similar to yours....')
            }
            else {
                $('.title').html('Here are all the available offers in the area...')
            }
        }
    })
    $('.home').click(function() {
        window.location.replace('./index.html')
    })
    $(document).click(function (event) {
        if (event.target == $('.modal')) {
            $('.modal').style.display = 'none'
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
