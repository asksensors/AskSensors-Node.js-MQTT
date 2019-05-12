/*
 * AskSensors MQTT API
 * Description: This example code publishes data to AskSensors IoT platfom (https://asksensors.com) over MQTT node.js.
 *  Author: https://asksensors.com, 2018
 *  github: https://github.com/asksensors
 */

var mqtt = require('mqtt')
var client  = mqtt.connect('https://mqtt.asksensors.com',{username:"........"})// TODO: fill your username
var pubTopic = '................../..................'; // TODO: fill your topic: username/apiKeyIn

var timerInterval = 25000;		// timer interval in ms

// Function declaration: publish
function send_data(){
	//construct payload for module1 and module2
	var payload = 'm1='; 
	payload+= 100*Math.random();
	payload+= '&m2=';
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
