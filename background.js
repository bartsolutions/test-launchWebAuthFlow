var CLIENT_ID = "38131814991-p4u809qrr5ee1bsehregd4os69jf2n7i.apps.googleusercontent.com";
var SCOPE = 'https://www.googleapis.com/auth/drive.file';
var startAuthorize = function(){
  var redirctURL = chrome.identity.getRedirectURL();
  chrome.identity.launchWebAuthFlow(
    {"url": "https://accounts.google.com/o/oauth2/auth?" +
              "client_id=" + CLIENT_ID + "&scope=" + SCOPE +
              "&redirect_uri=" + chrome.identity.getRedirectURL() +
              "&response_type=code" + 
              "&access_type=offline",
     "interactive": true
    },
    function(code) {
      if(!code){
        alert("Error in code: " + chrome.runtime.lastError.message);
      }
      else {
        alert("Code collected: " + code);
      }
    }
  )
}

startAuthorize();
