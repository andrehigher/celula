var mongoose = require('mongoose'),
  	Schema = mongoose.Schema,
    crypto = require('crypto');

/**
 * User
 *
 * Role property:
 *
 *     Os roles possíveis para usuários, que determinam ao que o usuário tem 
 *     acesso no sistema.
 *
 *     - admin: role detido pelo usuário criador da instância Church
 *     - manager1: líder ("gerente") de um grupo de level 1
 *     - manager2: líder ("gerente") de um grupo de level 2
 *     - ...
 *     - managerN: líder ("gerente") de um grupo de level N
 *     - leader: líder de célula (group level 0)
 *     - member: membro da igreja
 *     - participant: visitante, participante de célula
 */
 
var UserSchema = new Schema({
  address:                { type: Schema.Types.ObjectId, ref: 'Address' },
  birthday:               { type: Date },
  emails:                 [ {} ],
  first_name:             { type: String },
  gender:                 { type: String },
  last_name:              { type: String},
  managed_groups:         [ { type: Schema.Types.ObjectId, ref: 'Groups' } ], // Grupos liderados pelo usuario
  nationality:            { type: String },
  nickname:               { type: String },
  phones:                 [ {} ],
  relationship_status:    { type: String }, // Estado Civil
  roles:                  [ { type: String } ],

  hashed_password:        { type: String },
  provider:               { type: String },
  salt:                   { type: String }
});

UserSchema
  .virtual('password')
  .set(function(password) {
    this._password = password
    this.salt = this.makeSalt()
    this.hashed_password = this.encryptPassword(password)
  })
  .get(function() { return this._password });

UserSchema.method('authenticate', function(plainText) {
  return this.encryptPassword(plainText) === this.hashed_password;
});

UserSchema.method('makeSalt', function() {
  return Math.round((new Date().valueOf() * Math.random())) + '';
});

UserSchema.method('encryptPassword', function(password) {
  if (!password) return '';
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
});

 mongoose.model('User', UserSchema);