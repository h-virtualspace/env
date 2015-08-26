/**
 *some private config variables. 
*/

/*****MQ消息配置******/
var mqConfig={
		brokerURL:'tcp://www.agohere.com:61616',
		maxConnections:100,
		maximumActiveSessionPerConnection:100,
		username:'admin',
		password:'admin'
};
/****邮件配置*******/
var emailConfig={
		username:'',
		password:'',
		mailProperties:{
			'mail.smtp.auth':'true',
			'mail.smtp.timeout':25000,
			'mail.smtp.ssl.enable':'false',
			'mail.smtp.starttls.enable':'false',
			'mail.debug':'true'
		}
};
/******redis业务实例******/
var redisConfig_business={
		host:'101.200.233.161',
		port:6379,
		username:'',
		password:'clientprisonbreak',
		maxTotal:50,
		maxIdle:20,
		minIdle:5,
		timeOut:3000000,
		isTestOnBorrow:true,
		isDefault:true
		
};
/******redis系统会话实例******/
var redisConfig_session={
		host:'101.200.233.161',
		port:6380,
		username:'',
		password:'clientprisonbreak',
		maxTotal:50,
		maxIdle:20,
		minIdle:5,
		timeOut:3000000,
		isTestOnBorrow:true,
		isDefault:true
		
};
/*******fastdfs分布式文件配置*****/
var fdfsConfig={
		httpAddress:'http://www.agohere.com', //访问文件的协议和地址
		connect_timeout:10, //in second
		network_timeout:30,  //in second
		charset:'utf8',
		http_tracker_http_port:80,
		http_anti_steal_token:false, //boolean
		http_secret_key:'FastDFS1234567890',
		tracker_servers:[
		                 {
		                	 host:'www.agohere.com',
		                	 port:22122
		                 }
		]
};