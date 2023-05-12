/*const { getSoapService, createClient } = require('./soap-service');
const soap = require('soap');

let userReadServicePromise = null;
let userReadServiceEndpoint = { url: null };

(async function () {
    // Connect to external S/4HC SOAP service
   userReadServicePromise = getSoapService();
})();

/*** HANDLERS ***/

/*async function readPayment(req) {
    
       // const userReadService = await userReadServicePromise;
       // userReadService.setEndpoint(userReadServiceEndpoint.url);

        // Set the parameters for the zbind_iscd_scpos method of the sevice
        const param = {
            I_POST: 'X',
            I_SIMU: '',
            T_MESSAGE_AUFB:{
                item:{}
            },
            T_SCPOS:{
                item: {
                    AKTYP: "01",
                    GPART: "31",
                    VTREF: "20000000000000000001",
                    PMTFR: "20230406",
                    PMTTO: "20230406",
                    CCODE: "V001",
                    AMOUNT_TOTAL: "-1234,23",
                    CURR: "EUR",
                    HVORG: "6030",
                    TVORG: "0100",
                    BLART: "20",
                    BLTYP: "20",
                    FAEDN: "20230406", 
                    BUDAT: "20230406",
                    BLDAT: "20230406",
                    PSNGL: "X"
                }
            }
        }

        let posting = []


 const wsdlClient = await soap.createClientAsync( './srv/external/zbind_iscd_scpos.wsdl' ,{HttpClient: userReadServiceEndpoint})

 if(wsdlClient){

 wsdlClient.ISCD_SCPOS_MAINTAINAsync(param).then((result) => {

//    console.log(result[0].T_MESSAGE_AUFB)

posting = result[0].T_MESSAGE_AUFB

return posting

}).catch(e => {

 console.log(e)

 return e

})

 }

 else{

 console.log('No Client')

 return false
 }

        // Invoke zbind_iscd_scpos method asynchronously and wait for the response
       //const resp = await userReadService.////ISCD_SCPOS_MAINTAINAsync(param)
        // Prepare the actual service response
        //console.log(resp)
        // const payments = [];
       

        return resp; //resp[0].T_MESSAGE_AUFB.item[0].TEXT;
    //} catch (err) {
     //  req.error(err.code, err.message);
    //}
}

module.exports = {
    readPayment
} */






const { getSoapService, createClient } = require('./soap-service');

let userReadServicePromise = null;
let userReadServiceEndpoint = { url: null };


// (async function () {
    
//     // Connect to external S/4HC SOAP service
//     userReadServicePromise = getSoapService();

// })();

/*** HANDLERS ***/

async function readPayment(req) {
    try {
        // Get the SOAP client for the UserRead service

        const userReadService = await userReadServicePromise;
        userReadService.setEndpoint(userReadServiceEndpoint.url);

        // Set the parameters for the zbind_iscd_scpos method of the sevice
        const param = {
            I_POST: 'X',
            I_SIMU: '',
            T_MESSAGE_AUFB:{
                item:{}
            },
            T_SCPOS:{
                item: {
                    AKTYP: "01",
                    GPART: "31",
                    VTREF: "20000000000000000001",
                    PMTFR: "20230406",
                    PMTTO: "20230406",
                    CCODE: "V001",
                    AMOUNT_TOTAL: "-1234,23",
                    CURR: "EUR",
                    HVORG: "6030",
                    TVORG: "0100",
                    BLART: "20",
                    BLTYP: "20",
                    FAEDN: "20230406", 
                    BUDAT: "20230406",
                    BLDAT: "20230406",
                    PSNGL: "X"
                }
            }
              
           
            
            //Payment: {
             /*   PersonIDInterval: {
                    IntervalBoundaryTypeCode: 9,
                    LowerBoundaryPersonID: "0000000000"
                },
                BusinessPartnerRoleCodeInterval: {
                    IntervalBoundaryTypeCode: 9,
                    LowerBoundaryBusinessPartnerRoleCode: "000000"
                }*/
            //},
           // QueryProcessingConditions: {
           //     QueryHitsUnlimitedIndicator: true
           // }
        };

        // Invoke zbind_iscd_scpos method asynchronously and wait for the response
       const resp = await userReadService.ISCD_SCPOS_MAINTAINAsync(param)
        // Prepare the actual service response
        //console.log(resp)
        // const payments = [];
       
        return resp; //resp[0].T_MESSAGE_AUFB.item[0].TEXT;
    } catch (err) {
        req.error(err.code, err.message);
    }
}

module.exports = { readPayment }

