/*
 * env config file. 
*/
var sconfig={
	host:'127.0.0.1',
	protocol:'http1',
	port:8099,
	context:'/ctx/kkk/', //service上下文
	//用户名和密码当需要的时候配置
	username:null, 
	password:null 
};
var webConfig={
	host:'localhost',
	protocol:'http',
	port:8080,//80为默认http端口,为默认值,可不用配置
	context:'virtualspace_web' //web上下文
};