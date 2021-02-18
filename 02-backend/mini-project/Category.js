exports.createCategory = function(app,pool){
    app.post("/api/category",(req,res)=>{
    const {cate_name} = req.body;
    pool.query(
        "insert into category (cate_name) values ($1)",
        [cate_name],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(201)
        }
    )
});
}

exports.readCategory = function(app,pool){
    app.get("/api/category",(req,res)=>{
        pool.query(
            "select cate_id,cate_name from category",
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

exports.updateCategory = function(app,pool){
    app.put("/api/category/:id",(req,res)=>{
        const {id} = req.params
        const {cate_name} = req.body;
        pool.query(
            "update category set cate_name=$1 where cate_id=$2",
            [cate_name,id],
            (error,results)=>{
                if(error){
                    throw error;
                }
                res.sendStatus(200)
            }
        )
    })
}

exports.deleteCategory = function(app,pool){
    app.delete("/api/category/:id",(req,res)=>{
        const {id} = req.params
        pool.query(
            "delete from category where cate_id=$1",
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