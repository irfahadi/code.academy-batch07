exports.createCity = function(app,pool){
    app.post("/api/City",(req,res)=>{
    const {city_name,city_prov_id} = req.body;
    pool.query(
        "insert into City (city_name,city_prov_id) values ($1,$2)",
        [city_name,city_prov_id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(201)
        }
    )
});
}

exports.readCity = function(app,pool){
    app.get("/api/City",(req,res)=>{
        pool.query(
            "select * from City",
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

exports.updateCity = function(app,pool){
    app.put("/api/City/:id",(req,res)=>{
        const {id} = req.params
        const {city_name,city_prov_id} = req.body;
        pool.query(
            "update City set city_name=$1, city_prov_id=$3 where city_id=$2",
            [city_name,id,city_prov_id],
            (error,results)=>{
                if(error){
                    throw error;
                }
                res.sendStatus(200)
            }
        )
    })
}

exports.deleteCity = function(app,pool){
    app.delete("/api/City/:id",(req,res)=>{
        const {id} = req.params
        pool.query(
            "delete from City where city_id=$1",
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