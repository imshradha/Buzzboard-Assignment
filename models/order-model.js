import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    order_id: { type: Number, required: true},
    item_name: { type: String, required: true},
    cost: { type: Number,  required: true },
    order_date: { type: String, default: null},
    delivery_date: { type: String, default: null}
})
const order = mongoose.model('Order', orderSchema)

export default order;
