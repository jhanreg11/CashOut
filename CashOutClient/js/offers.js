var Request = new Request()
Handlebars.partials = Handlebars.templates
$(document).ready(function () {
    Request.GET('api/offer', function (response) {
        if (response) {
            offersHTML = Handlebars.templates['offers']({
                'offers': response.offers
            })
            $('.body').html(offersHTML)

        }
    })
})
