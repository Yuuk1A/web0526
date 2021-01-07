                                　　　　　　 //この構成でsayhello66はボタンを押せば起動
                                           //つまり、taro,hanakoも同じようにするためには
//function taro66(){who66 ='太郎';var gakita66 ='が来た';　//「who66」の代わりに新しく「gakita66」を使っ（登録し）て
//alert(who66 + gakita66 + '！');}          //同じようにコードを入力すれば　ボタンを押せば起動する
　　　　　　　　　　　　　　　　　　　　　　　// varは「登録」　alertは「～をよび出す的な感じ」

var who66 ='world';
function sayhello66(){alert('Hello,'+ who66 + '!');}
function taro66(){who66 = '太郎';alert(who66 + 'が来た');}//6－5ではやらなかった太郎にalertをつけて「がきた」を呼び出す
function hanako66(){who66 = '花子';alert(who66 + 'が来た');}
