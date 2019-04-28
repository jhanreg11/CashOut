$(document).ready(function() {
    $('#giver').click(function() {
        window.location.replace('./submit.html?giving=true')
    })

    $('#taker').click(function() {
        window.location.replace('./submit.html?giving=false')
    })
})
