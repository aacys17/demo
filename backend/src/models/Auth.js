const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  refreshToken: {
    type: 'string',
    required: true,
  },
});

const Auth = mongoose.model('Token', tokenSchema);

module.exports = Auth;
