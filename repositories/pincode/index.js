/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
const mongoose = require('mongoose');

const pincodeSchema = absoluteRequire('models/pincode');

// eslint-disable-next-line prettier/prettier
exports.LocationInfo = (pincode, state) => LocationInfo(pincode, state);

async function LocationInfo(pincode, state) {
  const Pincode = mongoose.model(state, pincodeSchema, state);
  const areainformation = await Pincode.find({
    pincode,
  });
  return areainformation;
}
