const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  watched: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie',
    },
  ],
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };
