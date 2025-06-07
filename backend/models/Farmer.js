import mongoose from 'mongoose';

const farmerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  landSize: { type: String, required: false }, // e.g., "5 acres"
  cropTypes: [{ type: String }], // e.g., ["wheat", "rice"]
  location: { type: String }, // optional: village, city, etc.
  contactNumber: { type: String },
}, { timestamps: true });

export default mongoose.model('Farmer', farmerSchema);
//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