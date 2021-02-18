exports.createAddress = function(app,pool){
    app.post("/api/Address",(req,res)=>{
    const {addr_email,addr_fullname,addr_phone_number,addr_is_default,addr_zipcode,addr_street1,addr_street2, add_city_id,add_user_id} = req.body;
    pool.query(
        "insert into Address (addr_email,addr_fullname,addr_phone_number,addr_is_default,addr_zipcode,addr_street1,addr_street2, add_city_id,add_user_id) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)",
        [addr_email,addr_fullname,addr_phone_number,addr_is_default,addr_zipcode,addr_street1,addr_street2, add_city_id,add_user_id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(201)
        }
    )
});
}

exports.readAddress = function(app,pool){
    app.get("/api/Address",(req,res)=>{
        pool.query(
            "select * from Address",
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

exports.updateAddress = function(app,pool){
    app.put("/api/Address/:id",(req,res)=>{
        const {id} = req.params
        const {addr_email,addr_fullname,addr_phone_number,addr_is_default,addr_zipcode,addr_street1,addr_street2, add_city_id,add_user_id} = req.body;
        pool.query(
            "update Address set addr_email=$1,addr_fullname=$2,addr_phone_number=$3,addr_is_default=$4,addr_zipcode=$5,addr_street1=$6,addr_street2=$7, add_city_id=$8,add_user_id=$9 where addr_id=$10",
            [addr_email,addr_fullname,addr_phone_number,addr_is_default,addr_zipcode,addr_street1,addr_street2, add_city_id,add_user_id,id],
            (error,results)=>{
                if(error){
                    throw error;
                }
                res.sendStatus(200)
            }
        )
    })
}

exports.deleteAddress = function(app,pool){
    app.delete("/api/Address/:id",(req,res)=>{
        const {id} = req.params
        pool.query(
            "delete from Address where addr_id=$1",
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