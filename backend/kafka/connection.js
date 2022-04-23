import kafka from "kafka-node";

export default function getConsumer (topic_name) {
    // if (!this.kafkaConsumerConnection) {
    var client = new kafka.KafkaClient(`localhost:2181`);
    //this.client = new kafka.Client("localhost:2181");
    /*this.client.refreshMetadata([{topic: topic_name}], (err) => {
                if (err) {
                    console.warn('Error refreshing kafka metadata', err);
                }
            });*/
    var kafkaConsumerConnection = new kafka.Consumer(client, [
      { topic: topic_name, partition: 0 }
    ]);
    client.on("ready", function () {
      console.log("client ready!");
    });
    // }
    return kafkaConsumerConnection;
  };

  //Code will be executed when we start Producer
export function getProducer() {
      var client = new kafka.KafkaClient(`localhost:2181`);
      /*this.client.refreshMetadata([{topic: topic_name}], (err) => {
                if (err) {
                    console.warn('Error refreshing kafka metadata', err);
                }
            });*/
      var HighLevelProducer = kafka.HighLevelProducer;
      var kafkaProducerConnection = new HighLevelProducer(client);
      //this.kafkaConnection = new kafka.Producer(this.client);
      console.log("producer ready");
    return kafkaProducerConnection;
  };
