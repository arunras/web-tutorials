var http = require('http'); // require module

http.createServer(function(request, response) {
    response.writeHead(200); // Status code in header
    response.write("Hello World\n"); // Respose body
    //timeOut( function () {
        //response.write("Dog is done."); 
        response.end(); // Close the connection
    //}, 5000);
}).listen(8080); // Listen for connection on this port

console.log("Listening on port 8080...")


