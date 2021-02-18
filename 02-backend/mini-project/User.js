exports.createUser = function(app,pool){
    app.post("/api/User",(req,res)=>{
    const {user_name,user_email,user_password} = req.body;
    pool.query(
        "insert into Users (user_name,user_email,user_password) values ($1,$2,$3)",
        [user_name,user_email,user_password],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(201)
        }
    )
});
}

exports.readUser = function(app,pool){
    app.get("/api/User",(req,res)=>{
        pool.query(
            "select * from Users",
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

exports.updateUser = function(app,pool){
    app.put("/api/User/:id",(req,res)=>{
        const {id} = req.params
        const {user_name, user_email, user_password} = req.body;
        pool.query(
            "update Users set user_name=$1, user_email=$2, user_password=$3 where user_id=$4",
            [user_name, user_email, user_password,id],
            (error,results)=>{
                if(error){
                    throw error;
                }
                res.sendStatus(200)
            }
        )
    })
}

exports.deleteUser = function(app,pool){
    app.delete("/api/User/:id",(req,res)=>{
        const {id} = req.params
        pool.query(
            "delete from Users where user_id=$1",
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