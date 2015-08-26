/*
 * env config file. 
*/
var serviceConfig={
	localFind:false, //boolean 寻找服务时是否可从本地查找
	host:'localhost',
	protocol:'http',
	port:8080,
	context:'virtualspace_web/service/', //service上下文
	//用户名和密码当需要的时候配置
	username:null, 
	password:null,
	connectionTimeout:5,//in second
	receiveTimeout:300 //in second
};
var webConfig={
	host:'localhost',
	protocol:'http',
	port:8080,//80为默认http端口,为默认值,可不用配置
	context:'virtualspace_web' //web上下文
};