exports.createCart = function(app,pool){
    app.post("/api/Cart",(req,res)=>{
    const {cart_created_on,cart_is_closed,cart_total,cart_user_id} = req.body;
    pool.query(
        "insert into Cart (cart_created_on,cart_is_closed,cart_total,cart_user_id) values ($1,$2,$3,$4)",
        [cart_created_on,cart_is_closed,cart_total,cart_user_id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(201)
        }
    )
});
}

exports.readCart = function(app,pool){
    app.get("/api/Cart",(req,res)=>{
        pool.query(
            "select * from Cart",
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

exports.updateCart = function(app,pool){
    app.put("/api/Cart/:id",(req,res)=>{
        const {id} = req.params
        const {cart_created_on,cart_is_closed,cart_total,cart_user_id} = req.body;
        pool.query(
            "update Cart set cart_created_on=$1, cart_is_closed=$2, cart_total=$3, cart_user_id=$4 where cart_id=$5",
            [cart_created_on,cart_is_closed,cart_total,id,cart_user_id],
            (error,results)=>{
                if(error){
                    throw error;
                }
                res.sendStatus(200)
            }
        )
    })
}

exports.deleteCart = function(app,pool){
    app.delete("/api/Cart/:id",(req,res)=>{
        const {id} = req.params
        pool.query(
            "delete from Cart where cart_id=$1",
            [id],
            (error,results)=>{
                if(error){
                    throw error;
                }
                res.sendStatus(200)
            }
        )
    })
}