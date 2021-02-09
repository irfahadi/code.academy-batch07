exports.readUserRoles = function(app,pool){
    app.get("/api/UserRoles",(req,res)=>{
        pool.query(
            "select * from User_Roles",
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