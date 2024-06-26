const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: { type: String, required: true, default: 'A' },
    isActive: { type: Number, required: true, default: 1 },
    isDeleted: { type: Number, required: true, default: 0 }
}, {
    timestamps: true
});

mongoose.models = {};
export default mongoose.model("User", UserSchema);