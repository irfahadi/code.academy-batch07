// exports.createOrderDetail = function(app,pool){
//     app.post("/api/OrderDetail",(req,res)=>{
//     const {order_quantity,order_price,order_cart_id,order_prod_id,order_order_name} = req.body;
//     pool.query(
//         "insert into Order_Detail VALUES ($1,$2,$3,$4,$5)",
//         [order_quantity,order_price,order_cart_id,order_prod_id,order_order_name],
//         (error,results)=>{
//             if(error){
//                 throw error;
//             }
//             res.sendStatus(201)
//         }
//     )
// });
// }

// exports.readOrderDetail = function(app,pool){
//     app.get("/api/OrderDetail",(req,res)=>{
//         pool.query(
//             "select * from Order_Detail",
//             [],
//             (error, result)=>{
//                 if(error){
//                     throw error;
//                 }
//                 res.status(200).json(result.rows);
//                 // console.log("success");
//             }
//         )
//     });
// }

// exports.updateOrderDetail = function(app,pool){
//     app.put("/api/OrderDetail/",(req,res)=>{
//         const {order_quantity,order_price,order_cart_id,order_prod_id,order_order_name} = req.body;
//         pool.query(
//             "update Order_Detail set order_quantity=$1, order_price=$2, order_cart_id= where order_id=$1",
//             [order_quantity,order_price,order_cart_id,order_prod_id,order_order_name],
//             (error,results)=>{
//                 if(error){
//                     throw error;
//                 }
//                 res.sendStatus(200)
//             }
//         )
//     })
// }

// exports.deleteOrderDetail = function(app,pool){
//     app.delete("/api/OrderDetail/",(req,res)=>{
//         const {order_id} = req.params
//         pool.query(
//             "delete from Order_Detail where order_id=$1",
//             [order_id],
//             (error,results)=>{
//                 if(error){
//                     throw error;
//                 }
//                 res.sendStatus(200)
//             }
//         )
//     })
// }