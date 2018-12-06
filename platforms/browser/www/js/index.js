/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


// ************************* Currency Convertor *************************

// var http = new XMLHttpRequest();
// const url =
// 'http://apilayer.net/api/live?access_key=b2b1b7b6d4c0cb2a03e5f6a5abfeb026';
// http.open("GET", url);
// http.send();

// http.onreadystatechange = (e) => {
//     var response = http.responseText
//     var responseJSON = JSON.parse(response);
//     var data = responseJSON.quotes;
//     var keys = Object.keys(data);
//     var quotesForView = "";
//     keys.forEach((element) =>{
//     quotesForView += "1 USD is equivalent to " + data[element] + " " + element
//     + "<br>";
//     });
//     document.getElementById('conversion').innerHTML = quotesForView ;
//     }


//These codes to show the dropdown list.

var form = document.getElementById('form');
const url = "http://apilayer.net/api/live?access_key=b2b1b7b6d4c0cb2a03e5f6a5abfeb026";
var http = new XMLHttpRequest();
http.open("GET",url);
http.send();

    http.onreadystatechange = function (){
    
    var response = http.responseText
    var responseJSON = JSON.parse(response);

    var data = responseJSON.quotes;

        var keys = Object.keys(data);

    // alert(keys);
    var options ="";
keys.forEach (function(element){

    options = options + "<option> "+element.substr(3,3)+"</option>";
     


});

    // keys.forEach((element) =>{
    //     quotesForView += "1 USD is equivalent to " + data[element] + " " + element
    //     + "<br>";
    //     });

    // for (key in responseJSON.quotes){
             
    //         options = options +'<option>'+key.substr(3,3)+'</option>';
            
              
    //         }
    form.innerHTML=options;
            
}



// codes to convert

function convert(){

var form = document.getElementById('form').value;
var amount = document.getElementById('amount').value;
var result = document.getElementById('result');

if(form.length > 0 &&  amount.length > 0){

    var http = new XMLHttpRequest();
    
    http.onreadystatechange = function (){

        var response = this.responseText;
        var jsonResponse = JSON.parse(response);

        var fact = parseFloat(jsonResponse.quotes[form]);
        result.innerHTML=parseFloat(amount)*fact;

        // var data = jsonResponse.quotes;

        // var keys = Object.keys([form]);


        if(form === data[elemnt]){


            


        }
        keys.forEach((element) =>{
                result =   keys[element]*form;
                
                });

                    document.getElementById('result').innerHTML = result;


          

        // (alert data);
        // alert(keys);
        // console.writeLine("whis is data = "+data);
        

    }
}
        http.open("GET","http://apilayer.net/api/live?access_key=b2b1b7b6d4c0cb2a03e5f6a5abfeb026");
        http.send();

}


    
    // var data = responseJSON.quotes;
    // var keys = Object.keys(data); // becasue the DATA is API is in JSON format so Obejct has list 
                                //  of currency so Object has keys Thats y taken keey here.

    // var quotesForView = ""; //this variable make to c the data 


// function cConvertor(){

//     var form = parseFloat(document.getElementById('form').value);
//     var amount = parseFloat (document.getElementById('amount').value);
//     var result = parseFloat (document.getElementById('result'));

//     if(form.length > 0 && form.length != 0 & amount.length > 0 && amount.length != 0){

//         var http = new XMLHttpRequest();

//         http.onreadystatechange = function (){

//             var response = http.responseText;  //Check this line meant to be no (;)
//             var responseJSON = JSON.parse(response);

//             var data = responseJSON.quotes;

//             var keys = Object.keys(data[form]);

//             if(keys != undefined){

//                 result.innerHTML= parseFloat (amount)*keys;

//             }

//             console.log(result);

//         }




//         http.open("GET","http://apilayer.net/api/live?access_key=b2b1b7b6d4c0cb2a03e5f6a5abfeb026");
//         http.send();

//     }

// }



// ******* OR ******* BOTH ARE RIGHT

// http.onreadystatechange = (e) => {

// }

