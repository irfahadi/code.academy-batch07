exports.createRoles = function(app,pool){
    app.post("/api/Roles",(req,res)=>{
    const {role_name} = req.body;
    pool.query(
        "insert into Roles (role_name) values ($1)",
        [role_name],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(201)
        }
    )
});
}

exports.readRoles = function(app,pool){
    app.get("/api/Roles",(req,res)=>{
        pool.query(
            "select role_id,role_name from Roles",
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

exports.updateRoles = function(app,pool){
    app.put("/api/Roles/:id",(req,res)=>{
        const {id} = req.params
        const {role_name} = req.body;
        pool.query(
            "update Roles set role_name=$1 where role_id=$2",
            [role_name,id],
            (error,results)=>{
                if(error){
                    throw error;
                }
                res.sendStatus(200)
            }
        )
    })
}

exports.deleteRoles = function(app,pool){
    app.delete("/api/Roles/:id",(req,res)=>{
        const {id} = req.params
        pool.query(
            "delete from Roles where role_id=$1",
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