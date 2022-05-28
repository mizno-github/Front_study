// 動作未検証
// urlからcsvを取得する
// @param string url
// @return string
function fetchCSV(url) {
  var req = new XMLHttpRequest();
  req.open("get", url, true);
  req.send(null);

  // レスポンスが返ってきた時の動作
  req.onload = function(){
    return req.responseText;
  }
}

// csvを２次元に変更する
// @param string str
// @return array
function convertCSVtoArray(str){
  var result = [];
  var tmp = str.split("\n");

  for(var i=0;i<tmp.length;++i){
    result[i] = tmp[i].split(',');
  }
  return result;
}
