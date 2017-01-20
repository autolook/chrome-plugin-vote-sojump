/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
String.prototype.startWith=function(s){
  if(s==null||s==""||this.length==0||s.length>this.length)
    return false;
  if(this.substr(0,s.length)==s)
    return true;
  else
    return false;
  return true;
}

function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + '=;' +
        'expires=Thu, 01-Jan-1970 00:00:01 GMT;' +
        'path=/;';
  }
  window.location.href="http://tp.sojump.cn/jq/11749675.aspx";
}

var currentUrl=window.location.href;

function checkIt() {
  document.getElementById("q1_7").checked=true;
  document.getElementById("q1_12").checked=true;
}

if(currentUrl.startWith("http://tp.sojump.cn/jq/11749675.aspx"))
{
  // setTimeout(checkIt,2000);
}
else
{
  setTimeout(deleteAllCookies,2000);
}