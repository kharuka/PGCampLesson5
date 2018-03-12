# html/css
1. 文字を中央にするためにはどのようなcssを使うか答えなさい

text-align: center;

2. 横並びを実現する為にはどのようなcssを使うか答えなさい（positionレイアウト以外）

display: flex;

3. 背景画像を利用するにはどのcssを使うか答えなさい

background-image: url("<PATH>");

4. 文字の色を変更するにはどのようなcssを使うか答えなさい

color: #XXXXXX;

5. リンクを設定する為に必要なhtmlのタグを答えなさい

<a>

6. 見出しタグにはどのような種類があるか全て答えなさい

<h1>〜<h6>

7. 段落タグとは何かを答えなさい

<p>

8. リストタグとは何かを答えなさい

リストの項目を記述する際に使用するタグ。リスト表示したい項目に<li>タグをつけて<ul>〜</ul>または<ol>〜</ol>の間に記述する。 <ul>はリスト項目に順序を付けない場合に使用し、 <ol>はリスト項目に順序を付ける場合に使用する。

9. inputタグにはどのような種類があるか4つ答えなさい（好きなもので良い）

<input type="submit">
<input type="reset">
<input type="text">
<input type="radio">

10. cssで線をつけるためにはどのようなcssを使うか答えなさい

borderプロパティ

11. 文字に影をつける為にはどのようなcssを使うか答えなさい

text-shadowプロパティ

12. cssのhoverとはどのような挙動のことか簡単に記述しなさい

要素にカーソルなどが乗ること。

13. div#boxを幅900px,高さ500pxで作成した。このdiv#boxを画面中央にするにはどうすればいいか答えなさい

html側は親要素のdivでdiv#boxを囲み、css側はdiv#boxにmargin: auto;を指定する。

14. 画像を表示させるタグは何か答えなさい

<img>

15. cssアニメーションを行う場合、時間的変化を指定するcssプロパティを答えなさい

animation-timing-functionプロパティ

# php
1. 変数の名前をつける際に絶対にやってはいけないことを書きなさい

変数名の最初の１文字目に0〜9の数字をつける

2. 変数を使うメリットは何かを答えなさい

値を一時的に記憶出来る

3. if文とは何かを答えなさい

真理値に従い条件実行する文で、制御構造の一つ（条件分岐）。

4. mt_rand()とはどのような関数かを簡単に書きなさい

乱数を生成する関数

5. phpを記述する際<?php ?>の間に記述する　◯か×か

◯

6. SQLにはinsert,update,◯◯◯◯,◯◯◯◯の４つがある。◯◯◯◯に記述されている残り２つを書きなさい

select
delete

7. phpの文章の終わりには必ずなにをつけないといけないか答えなさい

セミコロン（;）

8. echo文を使うとどうなるか簡単に答えなさい

引数に指定した値を出力する

9. 下記の問題を答えなさい
echo 8 + 2;

10

echo 10 + 14;

24

10. 下記の問題を答えなさい
echo 11 - 3;

8

echo 5 * 3;

15

echo 2 / 10;

0.2

11. camp_db,camp_table,のデータを「全検」SELECT表示する構文を答えなさい

select * from camp_db.camp_table;

12. SELECT表示を行う際、「降順」で表示をするにはどのような記述が必要か簡単に答えなさい

select * from <db>.<table> order by <column> desc;

13. DELETEを行うための構文を書きなさい(camp_db,camp_tableを基準にする)

delete from camp_db.camp_table where <条件>;

# js
1. jQueryのイベントを３つ書きなさい(好きなもので可)

click
dblclick
mouseover

2. jQueryを利用する際「セレクタ」とはどういう意味なのか簡単に書きなさい

任意の範囲、要素を指定するための機能

3. jQueryを使うメリットにはどういったものがあるか簡潔にまとめなさい（一つで良い）

クロスブラウザ対応を意識しなくて良い

4. [fadeIn('4000');]はどのような挙動をするか簡単に書きなさい

非表示の要素を4秒かけてフェードイン表示する

5. [slideUp]はどのような挙動をするか簡単に書きなさい

各要素の高さを操作して下から上に消えていくイメージ効果で非表示にする

6. [addClass]はどのような挙動をするか簡単に書きなさい

指定した要素にcssクラスを追加する

7. [hasClass]はどのような挙動をするか簡単に書きなさい

要素集合全てのうちから引数に指定したクラスを持つ要素が一つでもあればtrueを返す

8. jQueryを使ってborderを利用する際どのように記述するか書きなさい(線の太さ3px 一直線　色は赤)

$('XXX').css("border","#f00 3px solid");

9. [console.log]はどのような挙動をするか簡単に書きなさい

デバッガのWebコンソールにメッセージを出力する

10. [click]イベントを設定するために必要な雛形を記述しなさい(div#boxにイベントを設定する)

$('#box').on('click',function(e){
    XXX;
});

___
___
## 解答する際
### 例）

### html/css
1. 文字を中央にするためにはどのようなcssを使うか答えなさい
xxxxxx(答えを書く)

2. 横並びを実現する為にはどのようなcssを使うか答えなさい（positionレイアウト以外）
xxxxxx(答えを書く)

//以下問題省略

___
___
お休みされた方はgithubの設定をしていないため、必ず個別で連絡するようにお願いします。
尚、こちら課題扱いなので必ず提出してください。