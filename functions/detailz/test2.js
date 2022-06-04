function main(params) {
// console.log(params);
return new Promise(function (resolve, reject) {
    const { CloudantV1 } = require('@ibm-cloud/cloudant');
    const { IamAuthenticator } = require('ibm-cloud-sdk-core');
    const authenticator = new IamAuthenticator({ apikey: 'KSJsfNXg4_mYa7TailJYPjAIt4BDHty_egXILz9Vn75M' })
    const cloudant = CloudantV1.newInstance({
        authenticator: authenticator
    });
    cloudant.setServiceUrl('https://apikey-v2-15fij93at4ftr36fwwdfuh4po5vcrv58md8rf718308g:7a1405f456fc3a0acca4a0ea939068f7@4ff16b13-4a3a-4608-a787-cbe81ec8dfae-bluemix.cloudantnosqldb.appdomain.cloud');
    if (params.dealership) {
        // return dealership with this state 
        cloudant.postFind({db:'reviews',selector:{dealerId:params.dealership}})
        .then((result)=>{
          // console.log(result.result.docs);
          let code = 200;
          if (result.result.docs.length == 0) {
              code = 404;
          }
          resolve({
              statusCode: code,
              headers: { 'Content-Type': 'application/json' },
              body: result.result.docs
          });
        }).catch((err)=>{
          reject(err);
        })
    } else if (params.id) {
        id = parseInt(params.dealerId)
        // return dealership with this state 
        cloudant.postFind({
          db: 'reviews',
          selector: {
            id: parseInt(params.id)
          }
        })
        .then((result)=>{
          // console.log(result.result.docs);
          let code = 200;
          if (result.result.docs.length == 0) {
              code = 404;
          }
          resolve({
              statusCode: code,
              headers: { 'Content-Type': 'application/json' },
              body: result.result.docs
          });
        }).catch((err)=>{
          reject(err);
        })
    } else {
        // return all documents 
        cloudant.postAllDocs({ db: 'reviews', includeDocs: true, limit: 10 })            
        .then((result)=>{
          // console.log(result.result.rows);
          let code = 200;
          if (result.result.rows.length == 0) {
              code = 404;
          }
          resolve({
              statusCode: code,
              headers: { 'Content-Type': 'application/json' },
              body: result.result.rows
          });
        }).catch((err)=>{
          reject(err);
        })
  }
}
)}
