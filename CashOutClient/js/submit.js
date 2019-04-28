Request = new Request();
$(document).ready(function () {
    $('#form-submit').click(function() {
        form_amt = $('#form-amt').val()
        venmo_amt = $('#form-amt').val() + $('#form-comm').val()
        range = $('#form-select').val()
        offer = {'cash_amt': form_amt, 'venmo_amt': venmo_amt, 'range': range, 'user_id': 1}
        console.log(offer)
        Request.POST(offer, 'api/offer', function (result) {
            if (result.success == true) {
                window.location.replace('/offers.html')
            }
        })
    })
})