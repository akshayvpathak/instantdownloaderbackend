const mongoose = require('mongoose');

const { Schema } = mongoose;

const pincodeSchema = new Schema(
  {
    pincode: String,
    address: String,
    district: String,
    taluk: String,
    state: String,
    location: {
      type: String,
      coordinates: Array,
    },
  },
  {
    typeKey: 'tipe',
  }
);

pincodeSchema.index({ location: '2dsphere' });
module.exports = pincodeSchema;
