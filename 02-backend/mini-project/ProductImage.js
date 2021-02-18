exports.createProductImage = function(app,pool){
    app.post("/api/ProductImage",(req,res)=>{
    const {prim_file_name,prim_path,prim_prod_id} = req.body;
    pool.query(
        "insert into Product_Images VALUES (gen_random_uuid(),$1,$2,$3)",
        [prim_file_name,prim_path,prim_prod_id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(201)
        }
    )
});
}

exports.readProductImage = function(app,pool){
    app.get("/api/ProductImage",(req,res)=>{
        pool.query(
            "select * from Product_Images",
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

exports.updateProductImage = function(app,pool){
    app.put("/api/ProductImage/",(req,res)=>{
        const {prim_id,prim_file_name,prim_path,prim_prod_id} = req.body;
        pool.query(
            "update Product_Images set prim_file_name=$2, prim_path=$3, prim_prod_id=$4 where prim_id=$1",
            [prim_id,prim_file_name,prim_path,prim_prod_id],
            (error,results)=>{
                if(error){
                    throw error;
                }
                res.sendStatus(200)
            }
        )
    })
}

exports.deleteProductImage = function(app,pool){
    app.delete("/api/ProductImage/",(req,res)=>{
        const {prim_id} = req.body
        pool.query(
            "delete from Product_Images where prim_id=$1",
            [prim_id],
            (error,results)=>{
                if(error){
                    throw error;
                }
                res.sendStatus(200)
            }
        )
    })
}