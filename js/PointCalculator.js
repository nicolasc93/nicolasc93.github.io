// 和牌形式将影响该卡片功能
function fu() {
  let fu_type1 = parseInt($("#fu-type option:selected").val());

    if(fu_type1 !== 4) {
      document.getElementById("win").style.display = "none";
      document.getElementById("tenpai").style.display = "none";
      document.getElementById("eyes").style.display = "none";
      document.getElementById("triplets").style.display = "none";
    } else {
      document.getElementById("win").style.display = "";
      document.getElementById("tenpai").style.display = "";
      document.getElementById("eyes").style.display = "";
      document.getElementById("triplets").style.display = "";
    }
}

// 符数计算
function calculationFu() {
  let fu_type2 = parseInt($("#fu-type option:selected").val());
  let fu_win2 = parseInt($("#fu-win option:selected").val());
  let fu_tenpai2 = parseInt($("#fu-tenpai option:selected").val());
  let fu_eyes2 = parseInt($("#fu-eyes option:selected").val());
  let a1 = parseInt($("#zhong-mingke option:selected").val());
  let a2 = parseInt($("#zhong-anke option:selected").val());
  let a3 = parseInt($("#yao-mingke option:selected").val());
  let a4 = parseInt($("#yao-anke option:selected").val());
  let b1 = parseInt($("#zhong-minggang option:selected").val());
  let b2 = parseInt($("#zhong-angang option:selected").val());
  let b3 = parseInt($("#yao-minggang option:selected").val());
  let b4 = parseInt($("#yao-angang option:selected").val());

  let x1, x2, x3, x4;
  let fu_total = parseInt(document.getElementById("fu-total").innerHTML);

  switch(fu_type2) {
    case 1: fu_total = 25; break;
    case 2: fu_total = 20; break;
    case 3: fu_total = 30; break;
    case 4: if(fu_win2 === 1) { x1 = 10; }
            else if(fu_win2 === 3) { x1 = 2; }
            else { x1 = 0; }

            if((fu_tenpai2 === 1) || (fu_tenpai2 === 2)) { x2 = 0; }
            else { x2 = 2; }

            if((fu_eyes2 === 2) || (fu_eyes2 === 3) || (fu_eyes2 === 5)) { x3 = 2; }
            else if(fu_eyes2 === 4) { x3 = 4; }
            else { x3 = 0; }

            x4 = a1 * 2 + a2 * 4 + a3 * 4 + a4 * 8 + b1 * 8 + b2 * 16 + b3 * 16 + b4 * 32;
            var a = 20 + x1 + x2 + x3 + x4;

            if(a1 + a2 + a3 + a4 + b1 + b2 + b3 + b4 > 4) { fu_total = '-'; alert("最多只有四组面子哦! 检查一下吧?")}
            else { fu_total = Math.ceil((20 + x1 + x2 + x3 + x4) / 10) * 10;}
            break;
    }

  document.getElementById("fu-total").innerHTML = fu_total;
}