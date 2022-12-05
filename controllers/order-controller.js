import orderModel from '../models/order-model.js';

export const createOrder = async (req, res) => {
    try{
        const order = req.body;
        const newOder = await orderModel.create(order);
        return res.status(201).send({status: true, message: 'Order created succeesfully', data: newOder});
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }     
}

export const updateOrder = async (req, res) => {
    try {
        let requestBody = req.body;
        const order = new orderModel(requestBody);
        const updatedOrder = await orderModel.updateOne({_id: req.params.id, order});

        return res.status(200).send({ status: true, message:"Order updated successfully", data: updatedOrder});
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

export const listOrders = async (req, res) => {
    try {
        const data = req.query;
        const condition = {}; 
        const { order_date } = data;

        if(order_date) condition['order_date'] = order_date;

        const orders = await orderModel.find(condition).select({ __v: 0 });

        return res.status(200).send({ status: true, message:"All Orders for the given date", data: orders});
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

export const searchOrder = async (req, res) => {
    try {
        const data = req.query;
        const condition = {}; 
        const { order_id } = data;

        if(order_id) condition['order_id'] = order_id;

        const orders = await orderModel.find(condition).select({ __v: 0 });

        return res.status(200).send({ status: true, message:"Order List", data: orders});
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

export const deleteOrder = async (req, res) => {
    try{
         await order.deleteOne({_id: req.params.id});
         return res.status(200).send({ status: true, message: "Order deleted successfully"});
    }catch(error){
        return res.status(500).send({ status: false, message: error.message })
    }
}

