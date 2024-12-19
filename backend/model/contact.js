const mongoose = require("mongoose");

const constSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
      trim: true,
      // validate: { valiadator: function},
      minlength: 2,
      maxlength: [50, "Max length is 10 MORE THAT that not possible"],
    },
    phone: {
      type: String,
      required: [true, "Name is Required"],
      trim: true,
      unique: true,
      validate: {
        validator: function (value) {
          return /^\+?[1-9]\d{0,2}-?\d{10}$/.test(value);
        },
        message: (props) =>
          `${props.value} is not a valid phone number! Format: +CountryCode-10DigitNumber`,
      },
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },
    photoUrl: { type: String, required: true },
  },
  { timeseries: true }
);

module.exports = mongoose.model("ContactSchema", constSchema);

//  {ContactSchema} ;
// expor ContactSchema;
