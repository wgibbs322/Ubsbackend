import mongoose from 'mongoose';

const AddExternalTransactionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Completed', 'Pending'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('ExternalTransaction', AddExternalTransactionSchema);
