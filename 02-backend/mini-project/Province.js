exports.createProvince = function(app,pool){
    app.post("/api/Province",(req,res)=>{
    const {prov_name} = req.body;
    pool.query(
        "insert into Province (prov_name) values ($1)",
        [prov_name],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(201)
        }
    )
});
}

exports.readProvince = function(app,pool){
    app.get("/api/Province",(req,res)=>{
        pool.query(
            "select prov_id,prov_name from Province",
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

exports.updateProvince = function(app,pool){
    app.put("/api/Province/:id",(req,res)=>{
        const {id} = req.params
        const {prov_name} = req.body;
        pool.query(
            "update Province set prov_name=$1 where prov_id=$2",
            [prov_name,id],
            (error,results)=>{
                if(error){
                    throw error;
                }
                res.sendStatus(200)
            }
        )
    })
}

exports.deleteProvince = function(app,pool){
    app.delete("/api/Province/:id",(req,res)=>{
        const {id} = req.params
        pool.query(
            "delete from Province where prov_id=$1",
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