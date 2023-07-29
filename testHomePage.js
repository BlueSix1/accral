var myData = {"manifest":{"manifestPricingIngredients":{"mailerId":"EPHRAIM","postalRoutingBarcode":"0","dateTimeOfMailing":"2023-07-12T16:56:33Z","classOfMail":"FR","mailOwnerMailerId":"789111","program":"Outbound","productWorkflow":"Price on Manifest, Validate with Scans and Samples","duplicateIndicator":"N","destinationRateIndicator":"N","destinationCountryPriceGroup":null,"rateIndicator":"CP","d5RateIndicator":null,"processingCategory":"3","surchargeType":null,"discountType":null,"domesticZone":"05","foreignZone":null,"weight":"7","dimensions":{"length":"13","width":"13","height":"13","dimensionalWeight":"0.0"},"extraServices":{"valueOfArticle":"50","codAmountDueSender":"0.0","extraServiceCodes":[{"extraServiceCode":"930"},{"extraServiceCode":"452"}]},"nonIncidentalEnclosure":{"nonIncidentalClass":null,"nonIncidentalRateIndicator":null,"nonIncidentalProcessingCategory":null,"nonIncidentalWeight":null}},"manifest":{"fileName":"pricing.test.team.manifest.raw","fileLocation":"C:\\some\\file\\location\\","masterEFN":"92750999908562199999999999999999","childEFN":null,"lineNum":"26","createdTime":"2019-03-05 16:29:48","electronicFileNumber":"92750999908562111111112927","electronicFileType":"4","entryFacilityType":"A","entryFacilityZIPCode":"54321","entryFacilityZIP4":"1234","directEntryOriginCountryCode":null,"shipmentFeeCode":"PKF","extraFeeForShipment":"000000","containerizationIndicator":"01","uspsElectronicFileVersionNumber":"020","transactionID":"201901065176","softwareVendorCode":"0000","softwareVendorProductVersionNumber":"2.0","fileRecordCount":"000000030","pic":"92750999908562000000001254","trackingNumber":"7677676776767676","serviceTypeCode":"001","barcodeConstructCode":"C01","destinationZIPCode":"86420","destinationZIP4":"1357","destinationFacilityType":null,"destinationCountryCode":null,"foreignPostalCode":"0000","carrierRoute":"C009","logisticsManagerMailerID":"99","containerID1":"0023","containerType1":"SK","containerID2":"0024","containerType2":"SK","containerID3":"0025","containerType3":"SK","mailOwnerCustomerRegistrationID_CRID":"973920","customerReferenceNumber1":null,"fastReservationNumber":"11223344","fastScheduledInductionDate":"20190301","fastScheduledInductionTime":"000000","paymentAccountNumber":"91919191","methodOfPayment":"01","postOfficeofAccountZIPCode":"88888","meterSerialNumber":"0203848","chargebackCode":"00","postage":"0014880","postageType":"P","customizedShippingServicesContracts_CSSC_Number":"1","customizedShippingServicesContractsProductID":"010100","unitOfMeasureCode":"1","extraServiceFee1stService":"000000","extraServiceFee2ndService":"000000","extraServiceFee3rdService":"000000","extraServiceFee4thService":"000000","extraServiceFee5thService":"000000","handlingCharge":"000000","surchargeAmount":"0000000","discountAmount":"0000000","nonIncidentalEnclosurePostage":"000000000","openandDistributeContentsIndicator":"EF","poBoxIndicator":"N","waiverOfSignature_CarrierRelease":"N","deliveryOptionIndicator":"1","destinationDeliveryPoint":"02","mailerId":"12345","removalIndicator":"Y","trackingIndicator":"","destinationtrackingIndicatorDeliveryPoint":"01","originalLabelTrackingNumberBarcodeConstructCode":"C06","originalTrackingNumber":"1234567890123456789012345678901234","customerReferenceNumber2":"123456","recipientNameDestination":"JOHN DOE","deliveryAddress":"123 MAIN STREET","ancillaryServiceEndorsement":"A","addressServiceParticipantCode":"000000001","keyLine":"SAMPLE KEY LINE","returnAddress":"123 MAIN STREET","returnAddressCity":"St.Louis","returnAddressState":"MO","returnAddressZIPCode":"63301","logisticsMailingFacilityCRID":"123461","epsAcctNum":"1000001013","activeFinanceNum":"661204","uniqueEFN":"true","uniqueTrackingNum":"true","manifestPackageID":"123456"},"impbCompliance":{"impbComplianceErrorID":"1233456","pic":"12345678902232345","masterMid":"2345","uspsElectronicFileVersionNumber":"1","mid":"2345","crid":"12314","customerReferenceNumber1":"1232123","transactionID":"978976","efn":"12345678902232345","dateTimeOfMailing":"20190201123000","entryFacilityZipCode":"78444","manifestPackageID":"45a276c4444b5e8ba01344ba9a5","nonComplianceErrors":[{"verificationPerformed":"AQ","nonComplianceReasonCode":"102","nonComplianceDescription":"Particular Error Within Verification Type"},{"verificationPerformed":"AQ","nonComplianceReasonCode":"002","nonComplianceDescription":"Mismatched account profile mid with tracking number mid"}]},"pricingDestTopic":"pkgplfm-pricing-sit2-priced-Manifest","version":"1.0"}};
var scanss = {"scans":{"parcelBarcode":{"channelApplicationId":"92","stc":"827","serialNumber":"0002670","sourceIdentifier":null,"mailerId":"902324534","impb":"4206304512239201990232453400026704","pic":"9201990232453400026704","destinationZipCode":"111451223"},"earliestScanDateTime":"2022-10-03T15:53:27Z","epsAccountNumber":"9999999999","pricingDestTopic":"pkgplfm-pricing-sit2-pricingResponse","epsAccountNickname":null,"program":"Network Returns","pcPostageVendor":null,"scanDimensions":{"trustworthyIndicator":false,"scanId":"314077683","fractionalPrecision":null,"length":40,"width":50,"units":"IN","machineType":null,"dimScore":null,"height":28},"duplicateIndicator":false,"localeKey":null,"productWorkflow":"no Pilot","pricingScanCompletionDateTime":"2019-11-05T00:01:08Z","scanEvent":{"scanEventType":null,"eventDateTime":"2022-10-04T08:41:57Z","scanEventCode":"01","scanId":"315929449","captDestZipCode":"63044","deviceId":"030SHMC079","machineType":null},"originalPackageScanGroupingId":null,"crid":"21215240","costCenter":"0000","originZipCode":"11118","midOwnerCrid":null,"packageScanGroupingId":"b006c02f-040f-4fc4-87ff-60e5d3d90290","trustedOrigin":true,"piecePackagingBarcodeUPCs":[],"duplicateCount":0,"midUserCrid":null,"financeNumber":"283609","classOfMail": "MR","scanWeight":{"trustworthyIndicator":true,"scanId":"314077683","fractionalPrecision":"TenThousandths","weightScore":null,"units":"LB","value":0.8123,"machineType":null},"version":"1.0.0"}}


let a = ''
let z = ''
let d = ''
let p = ''
let b = ''
let c = ''
let e = ''
let f = ''
let g = ''
let h = ''
let s = ''
var textedJson = '';



let array = []
let or = ""

function manifest(){
    a=document.getElementById("mytext2").value;
   
    z=document.getElementById("mytext").value;
    p=document.getElementById("mytext3").value;
    d=document.getElementById("mytext4").value;
      document.getElementById("getval").innerHTML=a;
      myData.manifest.manifestPricingIngredients.classOfMail = a;
      myData.manifest.manifestPricingIngredients.domesticZone = z;
      myData.manifest.manifestPricingIngredients.processingCategory = p;
      myData.manifest.manifestPricingIngredients.dateTimeOfMailing = d;
      textedJson = JSON.stringify(myData, undefined, 1);
      
      $('.dobe').text(textedJson);
      

      
    }




    function setValue2(){
   
        a = or[0]
          b = or[0]
          c = or[0]
          d = or[0]
          e= or[0]
          f= or[0]
          g = or[0]
          h= or[0]
    
          myData.manifest.manifestPricingIngredients.classOfMail = a;
         var textedJson1 = JSON.stringify(myData, undefined, 1);
         $('#myTextarea1').text(textedJson1);
        
         
         
         myData.manifest.manifestPricingIngredients.classOfMail = b;
         var textedJson2 = JSON.stringify(myData, undefined, 1);
         $('#myTextarea2').text(textedJson2);
    
    
    
    
         myData.manifest.manifestPricingIngredients.classOfMail = c;
         var textedJson3 = JSON.stringify(myData, undefined, 1);
         $('#myTextarea3').text(textedJson3);
    
    
    
         myData.manifest.manifestPricingIngredients.classOfMail = d;
         var textedJson4 = JSON.stringify(myData, undefined, 1);
         $('#myTextarea4').text(textedJson4);
       
    
         myData.manifest.manifestPricingIngredients.classOfMail = e;
         var textedJson5 = JSON.stringify(myData, undefined, 1);
         $('#myTextarea5').text(textedJson5);
      
    
         myData.manifest.manifestPricingIngredients.classOfMail = f;
         var textedJson6 = JSON.stringify(myData, undefined, 1);
         $('#myTextarea6').text(textedJson6);
    
         myData.manifest.manifestPricingIngredients.classOfMail = g;
         var textedJson7 = JSON.stringify(myData, undefined, 1);
         $('#myTextarea7').text(textedJson7);
    
         myData.manifest.manifestPricingIngredients.classOfMail = h;
         var textedJson8 = JSON.stringify(myData, undefined, 1);
         $('#myTextarea8').text(textedJson8);
         beautify1(a,b,c,d,e,f,g,h)
         myVariable = document.forms["myform"]["text1"].value = ''
         
        
        }
    

        

        function setValue(){
          
            myData.manifest.manifestPricingIngredients.classOfMail = "";
          
            myVariable = document.forms["myform"]["text1"].value; //get the value  of iput and name it myvariable
            // document.getElementById("valuer").innerHTML = myVariable;
            
            
            array.push(myVariable)
          
              //if arr[1] does not have element then a , b , c, d etc = a[0]
              
              or = array.toString().split(' ')
              if(or.length > 1){
                setValue1()
              }else {
                setValue2()
              }
          }

          function setValue1(){ 
        alert("hey")
   
            a = or[0]
            b = or[1]
            c = or[2]
            d = or[3]
            e= or[4]
            f= or[5]
            g = or[6]
            h= or[7]
    
    
           
          
           myData.manifest.manifestPricingIngredients.classOfMail = a;
           var textedJson1 = JSON.stringify(myData, undefined, 1);
           $('#myTextarea1').text(textedJson1);
           document.getElementById("myTextArea1Value").innerHTML = a;
        
          
          
           
           
           myData.manifest.manifestPricingIngredients.classOfMail = b;
           var textedJson2 = JSON.stringify(myData, undefined, 1);
           $('#myTextarea2').text(textedJson2);
    
           document.getElementById("myTextArea2Value2").innerHTML = b;
    
      
           myData.manifest.manifestPricingIngredients.classOfMail = c;
           var textedJson3 = JSON.stringify(myData, undefined, 1);
           $('#myTextarea3').text(textedJson3);
           document.getElementById("myTextArea3Value3").innerHTML = c;
    
    
    
           myData.manifest.manifestPricingIngredients.classOfMail = d;
           var textedJson4 = JSON.stringify(myData, undefined, 1);
           $('#myTextarea4').text(textedJson4);
           document.getElementById("myTextArea4Value4").innerHTML = d;
         
    
           myData.manifest.manifestPricingIngredients.classOfMail = e;
           var textedJson5 = JSON.stringify(myData, undefined, 1);
           $('#myTextarea5').text(textedJson5);
           document.getElementById("myTextArea5Value5").innerHTML = e;
        
    
           myData.manifest.manifestPricingIngredients.classOfMail = f;
           var textedJson6 = JSON.stringify(myData, undefined, 1);
           $('#myTextarea6').text(textedJson6);
           document.getElementById("myTextArea6Value6").innerHTML = f;
    
           myData.manifest.manifestPricingIngredients.classOfMail = g;
           var textedJson7 = JSON.stringify(myData, undefined, 1);
           $('#myTextarea7').text(textedJson7);
           document.getElementById("myTextArea7Value7").innerHTML = g;
    
           myData.manifest.manifestPricingIngredients.classOfMail = h;
           var textedJson8 = JSON.stringify(myData, undefined, 1);
           $('#myTextarea8').text(textedJson8);
           document.getElementById("myTextArea8Value8").innerHTML = h;
    
           myVariable = document.forms["myform"]["text1"].value = ''
          
          } 
      
          function processingCategory(){
            p=document.getElementById("mytext3").value;
              document.getElementById("getval").innerHTML=p;
              myData.manifest.manifestPricingIngredients.processingCategory = p;
              var textedJson = JSON.stringify(myData, undefined, 1);
              $('#myTextarea').text(textedJson);
              
        
            }

            function enterDate(){
                d=document.getElementById("mytext4").value;
                  document.getElementById("getval").innerHTML=d;
                  myData.manifest.manifestPricingIngredients.dateTimeOfMailing = d;
                  var textedJson = JSON.stringify(myData, undefined, 1);
                  $('#myTextarea').text(textedJson);
            
                }    