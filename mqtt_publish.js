/*
 * AskSensors MQTT API
 * Description: This example code publishes data to AskSensors IoT platfom (https://asksensors.com) over MQTT node.js.
 *  Author: https://asksensors.com, 2018
 *  github: https://github.com/asksensors
 */

var mqtt = require('mqtt')
var client  = mqtt.connect('https://asksensors.com')
var pubTopic = 'publish/.............................' // TODO: Add your API KEY IN

var timerInterval = 5000;		// timer interval in ms

// Function declaration: publish
function send_data(){
	//construct payload
	var payload = 'module1='; 
	payload+= 100*Math.random();
	payload+= '&module2=';
	payload+= 100*Math.random();
	payload+= '&module3=';
	payload+= 100*Math.random();
	// publish
	client.publish(pubTopic, payload);
	console.log('msg published:'+pubTopic+ '/' + payload);
}

// connect MQTT
client.on('connect', function () {

	console.log('Client connected to asksensors.com MQTT');
})
 

setInterval(send_data, timerInterval); // setInterval 
