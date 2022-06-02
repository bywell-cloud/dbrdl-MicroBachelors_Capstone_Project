

var Cloudant = require('@cloudant/cloudant');
function main(params) {  

screat={ 

"COUCH_URL": "https://apikey-v2-15fij93at4ftr36fwwdfuh4po5vcrv58md8rf718308g:7a1405f456fc3a0acca4a0ea939068f7@4ff16b13-4a3a-4608-a787-cbe81ec8dfae-bluemix.cloudantnosqldb.appdomain.cloud", 

"IAM_API_KEY": "KSJsfNXg4_mYa7TailJYPjAIt4BDHty_egXILz9Vn75M", 

"COUCH_USERNAME": "KSJsfNXg4_mYa7TailJYPjAIt4BDHty_egXILz9Vn75M" 
};

console.log(params);  



return new Promise(function (resolve, reject) {  



    const Cloudant = require('@cloudant/cloudant');  



    const cloudant = Cloudant({  



        url: screat.COUCH_URL,  



        plugins: {iamauth: {iamApiKey:screat.IAM_API_KEY}}  



    });  



    const dealershipDb = cloudant.use('dealerships');  
if (params.state) {

        // return dealership with this state  



        dealershipDb.find({ 
"selector": {

"state": {

 "$eq": params.state   
}

}

}, function (err, result) {

            if (err) {  



                console.log("index.js ~ line 20 ~ err", err)  



                reject(err);  



            }  



            let code=200;  



                if (result.docs.length==0)  



                {  



                code= 404;  



                }  



            resolve({  



                statusCode: code,  



                headers: { 'Content-Type': 'application/json' },  



                body: result  



            });  



        });  



    } else if (params.id) {  



        id=parseInt(params.dealerId)  



      // return dealership with this state  



        dealershipDb.find({selector: {id:parseInt(params.id)}}, function (err, result) {  



            if (err) {  



                console.log("file: index.js ~ line 20 ~ err", err)  



                reject(err);  



            }  



            let code=200;  



                if (result.docs.length==0)  



                {  



                code= 404;  



                }  
resolve({

                statusCode: code,  



                headers: { 'Content-Type': 'application/json' },  



                body: result  



            });  



        });  



    } else {  



        // return all documents  



      dealershipDb.list({ include_docs: true }, function (err, result) {  



            if (err) {  



                console.log("file: index.js ~ line 35 ~ err", err)  
reject(err);

            }  







         resolve({  



                statusCode: 200,  



                headers: { 'Content-Type': 'application/json' },  



                body: result  



            });  



        });  



    }  



});  
}

