function hyoji(){var str ="一文字ずつ表示します。";
var cnt =document.timer.moji.value.length;
//表示する文字    //テキストボックスの文字数        //文字が全部表示されているか確認
if(cnt<11){document.timer.moji.value = str.substr(0,cnt+1);}//現在より1文字多く切り出して表示 
 else{document.timer.moji.value ="";}} //全て表示されたら、空文字に戻す
 function startfnc(){setInterval("hyoji()",1000);}
  //関数hyoji()を1000 ミリ秒間隔で呼び出す
  function mes() { alert("3秒経ちました！"); }