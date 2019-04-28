(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['offer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"offer\">\n    <div class=\"user\">\n        <img class=\"user-img\" src=\"img/fake-profile.png\"/>\n        <div class=\"username\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.offer : depth0)) != null ? stack1.user_id : stack1), depth0))
    + "</div>\n    </div>\n    <div class=\"cash_amt\">Cash: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.offer : depth0)) != null ? stack1.cash_amt : stack1), depth0))
    + "</div>\n    <div class=\"venmo_amt\">Venmo: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.offer : depth0)) != null ? stack1.venmo_amt : stack1), depth0))
    + "</div>\n</div>";
},"useData":true});
templates['offers'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.offer,depth0,{"name":"offer","hash":{"offer":depth0},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"title\"></div>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.offers : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();