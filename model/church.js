var mongoose = require('mongoose'),
  	Schema = mongoose.Schema;

/**
 * Church
 *
 * Ordem máxima de grupo. Tipo de entidade que é criada quando um usuário 
 * cadastra no http://celula.in.
 */
var ChurchSchema = new Schema({
  date: { type: Date, default: Date.now },
  name: { type: String},
  address: {type: Schema.Types.ObjectId, ref: 'Address'}
});
 
mongoose.model('Church', ChurchSchema);