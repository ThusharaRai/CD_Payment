/*const soap = require('soap');
const client = require('@sap-cloud-sdk/http-client');
const connectivity = require('@sap-cloud-sdk/connectivity');

// Helper to create a soap service through the BTP destination service
async function getSoapService(service, wsdl, endpoint) {

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
    const dest = await connectivity.getDestination({destinationName: 'payments-dest'})

    // http://ST1/sap/bc/srt/wsdl/flv_10002A111AD1/srvc_url/sap/bc/srt/rfc/sap/ziscd_scpos_maintain/200/zservice_iscd_scpos_maintain/zbind_iscd_scpos    

      const requestConfig = {
          method: 'POST',
          url: "http://payments-dest/sap/bc/srt/wsdl/flv_10002A111AD1/srvc_url/sap/bc/srt/rfc/sap/ziscd_scpos_maintain/200/zservice_iscd_scpos_maintain/zbind_iscd_scpos?sap-client=200",
    
          headers: {
            'Content-Type': 'application/soap+xml; charset=utf-8'
            },
        proxy: {
            host: 'localhost',
            port: 8887,
            },
            //data: param
      }


    let posting = []

    const executeHttpRequest = await client.executeHttpRequest(dest, requestConfig, {fetchCsrfToken: false})

    //return executeHttpRequest

    const wsdlClient = await soap.createClientAsync( './srv/external/zbind_iscd_scpos.wsdl' ,{HttpClient: executeHttpRequest})
    // await wsdlClient.setSecurity(new soap.BasicAuthSecurity({
    //     username: 'rait',
    //     password: 'Initial@12345!'
    // }))
    /*if(wsdlClient){
        wsdlClient.ISCD_SCPOS_MAINTAINAsync(param).then((result) => {
            console.log(result[0].T_MESSAGE_AUFB)
            posting = result[0].T_MESSAGE_AUFB
           }).catch(e => {
            console.log(e)
            return e
           })
    }
    else{
        console.log('No Client')
        return false
    }*/
    /*if(wsdlClient){
        wsdlClient.ISCD_SCPOS_MAINTAINAsync(param).then((result) => {
               console.log(result)
               posting = result
           }).catch(e => {
            console.log(e)
            return e
           })
    }
    else{
        console.log('No Client')
        return false
    }

   

    // Instantiate the service using that http client
   // return soap.createClientAsync(wsdl, { httpClient: httpClient });
}

module.exports = {
    getSoapService
}

*/
const soap = require('soap');
const client = require('@sap-cloud-sdk/http-client');
const connectivity = require('@sap-cloud-sdk/connectivity');

// Helper to create a soap service through the BTP destination service
async function getSoapService(service, wsdl, endpoint) {

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
    const dest = await connectivity.getDestination({destinationName: 'payments-dest'})    
    // http://ST1/sap/bc/srt/wsdl/flv_10002A111AD1/srvc_url/sap/bc/srt/rfc/sap/ziscd_scpos_maintain/200/zservice_iscd_scpos_maintain/zbind_iscd_scpos
      const requestConfig = {
          method: 'POST',
          url: "http://ST1/sap/bc/srt/wsdl/flv_10002A111AD1/srvc_url/sap/bc/srt/rfc/sap/ziscd_scpos_maintain/200/zservice_iscd_scpos_maintain/zbind_iscd_scpos?sap-client=200",
          headers: {
            'Content-Type': 'application/soap+xml; charset=utf-8'
            },
        proxy: {
            host: 'localhost',
            port: 8887,
            },
            data: param
      }


    let posting = []

    const executeHttpRequest = await client.executeHttpRequest(dest, requestConfig, {fetchCsrfToken: false})

    const wsdlClient =  await soap.createClientAsync(requestConfig.url ,{HttpClient: executeHttpRequest})
    // await wsdlClient.setSecurity(new soap.BasicAuthSecurity({
    //     username: 'rait',
    //     password: 'Initial@12345!'
    // }))
    if(wsdlClient){
        wsdlClient.ISCD_SCPOS_MAINTAINAsync(param).then((result) => {
               console.log(result)
               posting = result
           }).catch(e => {
            console.log(e)
            return e
           })
    }
    else{
        console.log('No Client')
        return false
    }

   

    // Instantiate the service using that http client
   // return soap.createClientAsync(wsdl, { httpClient: httpClient });
}

module.exports = {
    getSoapService
}

