// models/Donor.js (for Mongoose/MongoDB)
import mongoose from 'mongoose';

const DonorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  bloodGroup: {
    type: String,
    required: [true, 'Please provide a blood group.'],
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  location: {
    type: String,
    required: [true, 'Please provide a location.'],
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone number.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
    unique: true,
  },
  lastDonationDate: {
    type: Date,
    default: null,
  },
  // Add other fields as needed (e.g., medical history, availability)
});

export default mongoose.models.Donor || mongoose.model('Donor', DonorSchema);