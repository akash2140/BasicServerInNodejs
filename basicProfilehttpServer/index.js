var http=require('http');
var port=8000;
var fs=require('fs');


function requestHandler(req,res)
{
    console.log(req.url);
    let filepath;

    switch(req.url)
    {
        case '/':
            filepath='./index.html';
            break;
        
        case '/profile':
            filepath='./profile.html';
            break;
        
        default:
            filepath='./404.html';
            break; 
    }

    fs.readFile(filepath,function(err,data){
        if(err)
        {
            console.log('Error in reading the file');
            return res.end(error);
        }
       return res.end(data);
    });



}

var server=http.createServer(requestHandler);
server.listen(port,function(err)
{
    if(err)
    {
        console.log("Error in running the server");
        return;
    }

    console.log("Server is up and running on port"+port);
});