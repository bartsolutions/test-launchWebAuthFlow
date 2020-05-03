var CLIENT_ID = "38131814991-p4u809qrr5ee1bsehregd4os69jf2n7i.apps.googleusercontent.com";
var SCOPE = 'https://www.googleapis.com/auth/drive.file';
var startAuthorize = function(){
  var redirectURL = chrome.identity.getRedirectURL();
  var oauthUrl = "https://accounts.google.com/o/oauth2/auth?" +
              "client_id=" + CLIENT_ID + "&scope=" + SCOPE +
              "&redirect_uri=" + redirectURL +
              "&response_type=code" + 
              "&access_type=offline";

  oauthUrl = "https://www.dropbox.com/oauth2/authorize?client_id=f7by2h34w1s2b3v&response_type=code";

  chrome.identity.launchWebAuthFlow(
    {"url": oauthUrl,
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
