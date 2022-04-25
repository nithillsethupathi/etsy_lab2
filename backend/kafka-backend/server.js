import ConnectionProvider from "./kafka/Connection.js";
//topics files
//var signin = require('./services/signin.js');
import {Items} from "./services/items.js";
import { Orders } from "./services/order.js";
import { ccart } from "./services/cart.js";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

async function handleTopicRequest(topic_name,fname){
    //var topic_name = 'root_topic';
    const CONNECTION_URL = process.env.CONNECTION_URL;
    await mongoose.connect(CONNECTION_URL);
    console.log("mongoose connected");
    var connection = new ConnectionProvider();
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    console.log('server is running ');
    consumer.on('message', function (message) {
        console.log('message received for ' + topic_name +" ", fname);
        console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        
        fname(data.data, function(err,res){
            console.log('after handle'+res);
            var payloads = [
                { topic: data.replyTo,
                    messages:JSON.stringify({
                        correlationId:data.correlationId,
                        data : res
                    }),
                    partition : 0
                }
            ];
            producer.send(payloads, function(err, data){
                console.log(data);
            });
            return;
        });
        
    });
}

handleTopicRequest("post_item", Items)
handleTopicRequest("post_cart", ccart)
handleTopicRequest("post_order", Orders)