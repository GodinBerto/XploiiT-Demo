const express =require('express');
const app = express();
const bodyParser = require('body-parser');

//middleware
app.use(express.static(__dirname + '/public'));

//parse application /x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

//parse application/json
app.use(bodyParser.JSON())

app.listen(3000, function(){
    console.log("listenin on the andre 3000");
    });
    app.post('/', function(req, res){
    addEmailToMailchimp(req.body.email);
    //console.log(req.body.email);
    res.end('success!!!');
    });

//NEWSLETTER EMAIL ADDING FUNCTION

function addEmailToMailchimp(email){

    var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'https://us21.api.mailchimp.com/3.0/lists/a1a1b0c67b/members',
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Basic YW55c3RyaW5nOjMzMTQ2NTdhZDFlMjI0OTI2OGJkNjU1YTgwZmE1ZTg4LXVzMjE=',
        'Cookie': 'ak_bmsc=4A16A1C24862957ABA5AFB1B165D05E6~000000000000000000000000000000~YAAQP4fdWEpk/vGHAQAA5sux+RPwMo0AW2EheDVUlCdBN2feMSLOJ3I3dhRZQUEB66zhF4vYNQoAZUXAqozo4YxGL0aOBxUkDfhGg96GTEcxdxIif5L770LV9pS0sRnqQf/xd9GXsqb7MZ2Q/tvHCtY0+AYOoEM3eVxCtO3qOUKR99hWGy5VKH1vMynz2i624q++wzWP+62qq0s5C8h55R5ZrCLizj+6QHXnLjWko58/Kb1ulggxd9/kLpB62WWdxpRjW51ugY58pAFrESaNPzvZy35yqWFpUTiL7JDe42XWGEy6CC38oN/SEs/4cOIKap5kCIbQffYK6Q3zenJ8cBRCbHAYqFw4PDzsLLeRgqlT8qDoiDMrpm9KiIB5pmHoXXFqsw==; bm_sv=D4D44E43CD09E84CCBBFC5108111EA86~YAAQP4fdWH6LAPKHAQAA1y7N+RMyq9yXDESfY8kQxHNOXzNSHezzdTQdcJYS/7PBFzw49S7KTuaaqf68Ngye7e/6sQqdqDac6MFAUozLUPM/G0iW4IQJCoHcYMWupu1UZroDifKGyvN4YGuVaamL0JV0s5wBB0iSqgxNcEBIrCahEPiqrqZ+lIYQ9RiM/gQYp8eZ/BHukSbKenQAixih8mqdADTYUFgW+8Zbik4go/4L9rM2g4STlt5G7xUvZY0/gD/3PqOeog==~1'
      },
      body: JSON.stringify({
        "email_address": email,
        "status": "subscribed"
      })
    
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
    
    }