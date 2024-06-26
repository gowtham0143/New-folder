const mongoose = require('mongoose');

const CharitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    imgName: { type: String },
    email: { type: String, required: true },
    address: { type: String, required: true },
    about: { type: String, required: true },
    contact1: { type: Number, required: true },
    contact2: { type: Number, required: true },
    highlighted: { type: Number, required: true, default: 0 },
    listed: { type: Number, required: true, default: 0 },
    isActive: { type: Number, required: true, default: 1 },
    isDeleted: { type: Number, required: true, default: 0 }
}, {
    timestamps: true
});

mongoose.models = {};
export default mongoose.model("Charity", CharitySchema);