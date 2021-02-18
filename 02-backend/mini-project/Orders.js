exports.createOrders = function(app,pool){
    app.post("/api/Orders",(req,res)=>{
    const {order_name,order_create_on,order_is_closed,order_total,order_user_id} = req.body;
    pool.query(
        "insert into Orders (order_name,order_create_on,order_is_closed,order_total,order_user_id) values ($1,$2,$3,$4,$5)",
        [order_name,order_create_on,order_is_closed,order_total,order_user_id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(201)
        }
    )
});
}

exports.readOrders = function(app,pool){
    app.get("/api/Orders",(req,res)=>{
        pool.query(
            "select * from Orders",
            [],
            (error, result)=>{
                if(error){
                    throw error;
                }
                res.status(200).json(result.rows);
                // console.log("success");
            }
        )
    });
}

exports.updateOrders = function(app,pool){
    app.put("/api/Orders/",(req,res)=>{
        const {order_name,order_create_on,order_is_closed,order_total,order_user_id} = req.body;
        pool.query(
            "update Orders set  order_create_on=$2, order_is_closed=$3, order_total=$4, order_user_id=$5 where order_name=$1",
            [order_name,order_create_on,order_is_closed,order_total,order_user_id],
            (error,results)=>{
                if(error){
                    throw error;
                }
                res.sendStatus(200)
            }
        )
    })
}

exports.deleteOrders = function(app,pool){
    app.delete("/api/Orders/",(req,res)=>{
        const {order_name} = req.body
        pool.query(
            "delete from Orders where order_name=$1",
            [order_name],
            (error,results)=>{
                if(error){
                    throw error;
                }
                res.sendStatus(200)
            }
        )
    })
}