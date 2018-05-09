var http=require("http")
var server=http.createServer(function(req,res){
	setTimeout(function(){
		res.setHeader('content-type','text/http; charset=utf-8')
		res.writeHead(404,"hi man")
		res.write('hello world')
		res.end()
	},2000)
})
server.listen(9000)
