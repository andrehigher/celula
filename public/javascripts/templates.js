(function() {
  var template = Ember.Handlebars.template, templates = Ember.TEMPLATES = Ember.TEMPLATES || {};

templates['settings/address'] = template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h1>Endereço <small>deixe sempre seu endereço atualizado</small></h1>\n<hr>\n<form class=\"form-horizontal\">\n  <div class=\"control-group\">\n      <label class=\"control-label\" for=\"address\">Endereço</label>\n      <div class=\"controls\">\n          <input type=\"text\" name=\"address\" value=\"\" class=\"input-large\" id=\"address\" placeholder=\"endereço\">\n      </div><!--/.controls -->\n  </div><!--/.control-group -->\n  <div class=\"control-group\">\n      <label class=\"control-label\" for=\"number\">Número</label>\n      <div class=\"controls\">\n          <input type=\"text\" name=\"number\" value=\"\" class=\"input-large\" id=\"number\" placeholder=\"número\">\n      </div><!--/.controls -->\n  </div><!--/.control-group -->\n  <div class=\"control-group\">\n      <label class=\"control-label\" for=\"apartament\">Complemento</label>\n      <div class=\"controls\">\n          <input type=\"text\" name=\"apartament\" value=\"\" class=\"input-large\" id=\"apartament\" placeholder=\"complemento\">\n      </div><!--/.controls -->\n  </div><!--/.control-group -->\n  <div class=\"control-group\">\n      <label class=\"control-label\" for=\"neighborhood\">Bairro</label>\n      <div class=\"controls\">\n          <input type=\"text\" name=\"neighborhood\" value=\"\" class=\"input-large\" id=\"neighborhood\" placeholder=\"bairro\">\n      </div><!--/.controls -->\n  </div><!--/.control-group -->\n  <div class=\"control-group\">\n      <label class=\"control-label\" for=\"city\">Cidade</label>\n      <div class=\"controls\">\n          <select name=\"city\">\n            <option value=\"0\">-- Escolha uma cidade --</option>\n            <option value=\"1\">Belo Horizonte</option>\n            <option value=\"2\">Contagem</option>\n            <option value=\"3\">Sabará</option>\n            <option value=\"4\">Santa Luzia</option>\n            <option value=\"5\">Vespasiano</option>\n            <option value=\"6\">Betim</option>\n          </select>\n      </div><!--/.controls -->\n  </div><!--/.control-group -->\n  <div class=\"control-group\">\n      <label class=\"control-label\" for=\"zipcode\">CEP</label>\n      <div class=\"controls\">\n          <input type=\"text\" name=\"zipcode\" value=\"\" class=\"input-large\" id=\"zipcode\" placeholder=\"cep\">\n      </div><!--/.controls -->\n  </div><!--/.control-group -->\n  <div class=\"form-actions\">\n      <button type=\"submit\" class=\"btn btn-primary\">Salvar alterações</button>\n  </div>\n</form>");
  
});

templates['settings/contact'] = template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h1>Contato <small>defina aqui seus contatos</small></h1>\n<hr>\n<form class=\"form-horizontal\">\n	<div class=\"control-group\">\n	    <label class=\"control-label\" for=\"name\">Telefone</label>\n	    <div class=\"controls\">\n	        <input type=\"text\" name=\"phone\" value=\"\" class=\"input-large\" id=\"phone\" placeholder=\"telefone\">\n	    </div><!--/.controls -->\n	</div><!--/.control-group -->\n	<div class=\"control-group\">\n	    <label class=\"control-label\" for=\"email\">Email</label>\n	    <div class=\"controls\">\n	        <input type=\"email\" name=\"email\" value=\"\" class=\"input-large\" id=\"email\" placeholder=\"email\">\n	    </div><!--/.controls -->\n	</div><!--/.control-group -->\n	<div class=\"form-actions\">\n	    <button type=\"submit\" class=\"btn btn-primary\">Salvar alterações</button>\n	</div>\n</form>");
  
});

templates['settings/index'] = template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h1>Configurações <small>deixe seu perfil sempre atualizado</small></h1>\n");
  
});

templates['settings/password'] = template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h1>Senha <small>defina aqui sua senha</small></h1>\n<hr>\n<form class=\"form-horizontal\">\n<div class=\"control-group\">\n    <label class=\"control-label\" for=\"old_password\">Senha atual</label>\n    <div class=\"controls\">\n        <input type=\"password\" name=\"old_password\" value=\"\" class=\"input-large\" id=\"old_password\" placeholder=\"senha atual\">\n    </div><!--/.controls -->\n</div><!--/.control-group -->\n<div class=\"control-group\">\n    <label class=\"control-label\" for=\"password\">Nova senha</label>\n    <div class=\"controls\">\n        <input type=\"password\" name=\"password\" value=\"\" class=\"input-large\" id=\"password\" placeholder=\"nova senha\">\n    </div><!--/.controls -->\n</div><!--/.control-group -->\n<div class=\"control-group\">\n    <label class=\"control-label\" for=\"confirm_password\">Confirme sua nova senha</label>\n    <div class=\"controls\">\n        <input type=\"password\" name=\"confirm_password\" value=\"\" class=\"input-large\" id=\"confirm_password\" placeholder=\"confirme sua nova senha\">\n    </div><!--/.controls -->\n</div><!--/.control-group -->\n<div class=\"form-actions\">\n    <button type=\"submit\" class=\"btn btn-primary\">Salvar alterações</button>\n</div>\n</form>");
  
});

templates['settings/photo'] = template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h1>Foto <small>defina aqui sua foto</small></h1>\n<hr>\n<form class=\"form-horizontal\">\n	<div class=\"control-group\">\n	    <label class=\"control-label\" for=\"email\">Sua foto</label>\n	    <div class=\"controls\">\n	      <div class=\"span3\">\n	        <a href=\"#\" class=\"thumbnail\">\n	          <img data-src=\"holder.js/260x180\" alt=\"260x180\" style=\"width: 260px; height: 180px;\" src=\"data:image/png;base64,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\">\n	        </a>\n	        </div>\n	    </div><!--/.controls -->\n	</div><!--/.control-group -->\n	<div class=\"form-actions\">\n	    <button type=\"submit\" class=\"btn btn-primary\">Salvar alterações</button>\n	</div>\n</form>");
  
});

templates['settings/profile'] = template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h1>Perfil <small>defina aqui seus principais dados</small></h1>\n<hr>\n<form class=\"form-horizontal\">\n	<div class=\"control-group\">\n	    <label class=\"control-label\" for=\"name\">Nome</label>\n	    <div class=\"controls\">\n	        <input type=\"text\" name=\"name\" value=\"\" class=\"input-large\" id=\"name\" placeholder=\"nome completo\">\n	    </div><!--/.controls -->\n	</div><!--/.control-group -->\n	<div class=\"control-group\">\n	    <label class=\"control-label\" for=\"gender\">Sexo</label>\n	    <div class=\"controls\">\n	        <label for=\"male\" class=\"radio\">\n	            <input type=\"radio\" name=\"gender\" id=\"male\" value=\"1\">\n	            Masculino\n	        </label>\n	        <label for=\"female\" class=\"radio\">\n	            <input type=\"radio\" name=\"gender\" id=\"female\" value=\"2\">\n	            Feminino\n	        </label>\n	    </div><!--/.controls -->\n	</div><!--/.control-group -->\n	<div class=\"control-group\">\n	    <label class=\"control-label\" for=\"birthday\">Data de nascimento</label>\n	    <div class=\"controls\">\n	        <input type=\"text\" name=\"birthday\" value=\"\" class=\"input-large\" id=\"birthday\" placeholder=\"data de nascimento\">\n	    </div><!--/.controls -->\n	</div><!--/.control-group -->\n	<div class=\"form-actions\">\n	    <button type=\"submit\" class=\"btn btn-primary\">Salvar alterações</button>\n	</div>\n</form>\n");
  
});

templates['settings'] = template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("<i class=\"icon-user\"></i> Perfil ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<i class=\"icon-bullhorn\"></i> Contato ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("<i class=\"icon-map-marker\"></i> Endereço ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("<i class=\"icon-picture\"></i> Foto ");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("<i class=\"icon-wrench\"></i> Senha ");
  }

  data.buffer.push("<div class=\"container-fluid\">\n  <div class=\"row-fluid\">\n    <div class=\"span3\">\n      <ul class=\"nav nav-list well\">\n        <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "settings.profile", options) : helperMissing.call(depth0, "linkTo", "settings.profile", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "settings.contact", options) : helperMissing.call(depth0, "linkTo", "settings.contact", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "settings.address", options) : helperMissing.call(depth0, "linkTo", "settings.address", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "settings.photo", options) : helperMissing.call(depth0, "linkTo", "settings.photo", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "settings.password", options) : helperMissing.call(depth0, "linkTo", "settings.password", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n      </ul>\n    </div><!--/span-->\n    <div class=\"span9\">\n      <div class=\"page-header\">\n      	");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      </div>\n    </div>\n  </div>\n</div>");
  return buffer;
  
});
})();