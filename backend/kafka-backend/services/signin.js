import { connect } from './mongo';
import {compare} from "bcryptjs";

export default function handle_request(msg, callback){
    var res = {};
    console.log("In handle request:"+ JSON.stringify(msg));
    connect(function(err,db){
        if(err){
            callback(null,"Cannot connect to db");
        }
        else{
            console.log('Connected to mongodb');
            var query = {email : msg.email};
            var dbo = db.db('users');
            dbo.collection("users").find(query).toArray(function(err,result){
                if(err){
                    //throw err;
                    callback(err,"Error");
                }
                if(result.length > 0){
                    var hash = result[0].password;
                    compare(msg.password,hash,function(err,doesMatch){
                        if(doesMatch){
                            callback(null,result);
                        } else {
                            callback(null,[]);
                        }
                    });
                }
                else{
                    callback(null,[]);
                }
            });
        }
    });

    /*if(msg.username == "bhavan@b.com" && msg.password =="a"){
        res.code = "200";
        res.value = "Success Login";

    }
    else{
        res.code = "401";
        res.value = "Failed Login";
    }
    callback(null, res);*/
}