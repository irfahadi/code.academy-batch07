exports.createProduct = function(app,pool){
    app.post("/api/Product",(req,res)=>{
    const {prod_title,prod_description, prod_stock, prod_price, prod_manufacture, prod_image, prod_cate_id} = req.body;
    pool.query(
        "insert into Product (prod_title,prod_description,prod_stock,prod_price, prod_manufacture, prod_image,prod_cate_id) values ($1,$2,$3,$4,$5,$6,$7)",
        [prod_title,prod_description,prod_stock,prod_price, prod_manufacture, prod_image, prod_cate_id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(201)
        }
    )
});
}

exports.readProduct = function(app,pool){
    app.get("/api/Product",(req,res)=>{
        pool.query(
            "select * from Product",
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

exports.updateProduct = function(app,pool){
    app.put("/api/Product/:id",(req,res)=>{
        const {id} = req.params
        const {prod_title,prod_description, prod_stock, prod_price, prod_manufacture, prod_image, prod_cate_id} = req.body;
        pool.query(
            "update Product set prod_title=$1, prod_description=$2, prod_stock=$3, prod_price=$4, prod_manufacture=$5, prod_image=$6, prod_cate_id=$7 where prod_id=$8",
            [prod_title,prod_description,prod_stock,prod_price, prod_manufacture, prod_image, prod_cate_id,id],
            (error,results)=>{
                if(error){
                    throw error;
                }
                res.sendStatus(200)
            }
        )
    })
}

exports.deleteProduct = function(app,pool){
    app.delete("/api/Product/:id",(req,res)=>{
        const {id} = req.params
        pool.query(
            "delete from Product where prod_id=$1",
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