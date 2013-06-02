var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Group
 */
var GroupSchema = new Schema({
  address:            { type: Schema.Types.ObjectId, ref: 'Address' },
  // `level` é o nivel do group. Um group sempre estara ligado a um group com nivel de numero menor
  // (ou seja, de hierarquia maior). A unica excessao sao os groups de level 0, que serao sempre as celulas, que podem estar
  // ligadas a qualquer outro level de group.
  //
  // Exemplo da IBC:
  // Group level 1: Conselho pastoral (GD do Pr. Paulo)
  // Group level 2: GD do Pr. Roberto, com os coordenadores de 'area
  // Group level 3: GD com os discipuladores. Quem lidera eh um coordenador. JP & Caren
  // Group level 4: GD de lideres. Quem lidera eh um discipulador. GD do Pedr~ao
  //
  // Group level 0: Celula, que pode estar diretamente ligada a qualquer outro level de group.
  level:              { type: Number },
  meetings:           [ { type: Schema.Types.ObjectId, ref: 'Meeting' } ],
  name:               { type: String },
  parent_group_id:    { type: Schema.Types.ObjectId, ref: 'Group' } // Qual grupo que esse grupo est'a ligado.
});
 
mongoose.model('Group', GroupSchema);