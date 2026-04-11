import mongoose from 'mongoose';
import { Schema } from 'mongoose';

// const bookingSchema = new Schema({
//     user: {type: String, required: true, ref: 'User'},
//     show: {type: String,required: true, ref: 'Show'},
//     amount: {type: Number,required:true},
//     bookedseats: {type: Array,required: true},
//     isPaid: { type : Boolean, default: false},
//     paymentLink : {type : String}
// },{timestamps:true});

// export default mongoose.model('Booking', bookingSchema);



const bookingSchema = new Schema({
    user: { type: String, required: true, ref: 'User' },
    show: { type: String, required: true, ref: 'Show' },
    amount: { type: Number, required: true },
    bookedseats: { type: Array, required: true },
    isPaid: { type: Boolean, default: false },
    paymentLink: { type: String },

    // ← Add this field (important for preventing duplicates)
    stripePaymentIntentId: { type: String,  sparse: true }
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);