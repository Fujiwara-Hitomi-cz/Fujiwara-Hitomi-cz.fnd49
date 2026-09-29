"use strict";
// 1行目に記載している "use strict" は削除しないでください

// ボタンをクリックしたらclickButton関数を呼び出す
const button = document.getElementById("button");
button.addEventListener("click", clickButton);

// 各formで選択されたvalueの値をresult配列に追加する
function clickButton() {

    let result = 0;
    let result1 = 0;
    let result2 = 0;
    let result3 = 0;

    const q1 = document.forms.form1.q1
    const q2 = document.forms.form2.q2
    const q3 = document.forms.form3.q3

    for (let i = 0; i < q1.length; i++) {
        if (q1[i].checked === true) {
            result1 = Number(q1[i].value);
        }
    }
    for (let j = 0; j < q2.length; j++) {
        if (q2[j].checked === true) {
            result2 = Number(q2[j].value);
        }
    }
    for (let k = 0; k < q3.length; k++) {
        if (q3[k].checked === true) {
            result3 = Number(q3[k].value);
        }
    }

    result = result1 + result2 + result3;



    // 0-5 山
    // 6-7,9-11 海
    // 12-15 海外
    // 8 のとき（すべて同率） あなたはねこ中のねこです

    // 点数結果による条件分岐
    let resultId = "";
    if (result <= 5) {
        resultId = "resultMountain";
    } else if (result >= 6 && result <= 7 || result >= 9 && result <= 11) {
        resultId = "resultSea";
    } else if (result >= 12 && result <= 15) {
        resultId = "resultOverseas";
    } else if (result === 8) {
        resultId = "resultSpecial";
    }

    // 該当する結果だけ 'open' classをつけて表示させる
    // 前回の結果を非表示
    const resultBoxes = document.querySelectorAll(".resultBox");

    for (const resultBox of resultBoxes) {
        resultBox.classList.remove("open");
    }

    // 今回の結果を表示
    const targetElement = document.getElementById(resultId);

    if (targetElement !== null) {
        targetElement.classList.add("open");
    }

    window.scrollTo({
        top: resultArea.offsetTop,
        behavior: "smooth"
    });


    return result;
}
