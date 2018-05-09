var http=require("http")
var fs=require("fs")
http.createServer(function(req,res){
	if(req.url==='/'||req.url==='/index.html'){
		res.setHeader('Content-Type','text/html;charset=utf-8')
		var html=fs.readFileSync('www/index.html','utf-8')
		res.write(html)
		console.log(req.url,"1")
	}else if(req.url==='/getNews'){
		res.setHeader('Content-Type','application/json;charset=utf-8')
		var rawData=[
			"新闻1",
			"新闻2",
			"新闻3",
			"新闻4",
			"新闻5",
			"新闻6",
			"新闻7",
			"新闻8",
			"新闻9",
		]
		var data=[]
		for(var i=0;i<rawData.length;i++){
			data=data.concat(rawData[Math.floor(Math.random()*rawData.length)])
		}
		res.write(JSON.stringify(data))
		console.log(req.url,"2")
	}
	res.end()
}).listen(3000)
