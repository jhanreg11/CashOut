Request = function() {
    var that = Object.create(Request.prototype);
    var BASE_URL = 'https://jacob-hanson.com/cashout/api/';

    that.POST = function(req, path, completion) {
        $.ajax(BASE_URL + path, {
            data: JSON.stringify(req),
            type:'POST',
            contentType: 'application/json',
            success: function(res) {
                completion(res)
            }
        })
    };

    that.GET = function(path, completion) {
        var url = BASE_URL + path;
        $.get(BASE_URL + path, function(res) {
                completion(res)
            })
            .fail(function(error) {
                console.log(error)
                completion(error)
            })
    };

    that.PUT = function(path, completion) {
        var url = BASE_URL + path;
        $.ajax({
            url: url,
            type: 'PUT',
            success: completion,
            error: function(xhr){
                Request.PUT(path, completion)
            }
        });
    };

    that.DELETE = function(path, completion) {
        var url = BASE_URL + path;
        $.ajax({
            url: url,
            type: 'DELETE',
            success: completion,
        });
    };


    Object.freeze(that);
    return that;
};


