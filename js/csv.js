// 動作未検証
// urlからcsvを取得する
const str = function fetchCSV(url) {
  var req = new XMLHttpRequest();
  req.open("get", url, true);
  req.send(null);

  // レスポンスが返ってきた時の動作
  req.onload = function(){
    return req.responseText;
  }
}

// csvを２次元に変更する
function convertCSVtoArray(str){
  var result = [];
  var tmp = str.split("\n");

  for(var i=0;i<tmp.length;++i){
    result[i] = tmp[i].split(',');
  }
  return result;
}
