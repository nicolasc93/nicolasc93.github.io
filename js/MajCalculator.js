// 全局event转换变量
var eventList = {
  fu: function() {
    document.getElementById("a-start").style.display = "none";
    document.getElementById("a-fu").style.display = "";
    document.getElementById("a-fan").style.display = "none";
    document.getElementById("a-point").style.display = "none";
    document.getElementById("a-title").innerHTML = "计算符数";
    document.getElementById("a-subtitle").innerHTML = "设置完毕后点击 \"开始计算\" 按钮开始计算";
  },
  fu_back: function() {
    document.getElementById("a-start").style.display = "";
    document.getElementById("a-fu").style.display = "none";
    document.getElementById("a-fan").style.display = "none";
    document.getElementById("a-point").style.display = "none";
    document.getElementById("a-title").innerHTML = "日麻在线计算器";
    document.getElementById("a-subtitle").innerHTML = "点击按钮以进入相应的功能模块";
  },
  fan: function() {
    document.getElementById("a-start").style.display = "none";
    document.getElementById("a-fu").style.display = "none";
    document.getElementById("a-fan").style.display = "";
    document.getElementById("a-point").style.display = "none";
    document.getElementById("a-title").innerHTML = "计算番数";
    document.getElementById("a-subtitle").innerHTML = "设置完毕后点击 \"开始计算\" 按钮开始计算";
  },
  fan_back: function() {
    document.getElementById("a-start").style.display = "";
    document.getElementById("a-fu").style.display = "none";
    document.getElementById("a-fan").style.display = "none";
    document.getElementById("a-point").style.display = "none";
    document.getElementById("a-title").innerHTML = "日麻在线计算器";
    document.getElementById("a-subtitle").innerHTML = "点击按钮以进入相应的功能模块";
  },
  point: function() {
    document.getElementById("a-start").style.display = "none";
    document.getElementById("a-fu").style.display = "none";
    document.getElementById("a-fan").style.display = "none";
    document.getElementById("a-point").style.display = "";
    document.getElementById("a-title").innerHTML = "计算点数";
    document.getElementById("a-subtitle").innerHTML = "设置完毕点击 \"开始计算\" 按钮开始计算";
  },
  point_back: function() {
    document.getElementById("a-start").style.display = "";
    document.getElementById("a-fu").style.display = "none";
    document.getElementById("a-fan").style.display = "none";
    document.getElementById("a-point").style.display = "none";
    document.getElementById("a-title").innerHTML = "日麻在线计算器";
    document.getElementById("a-subtitle").innerHTML = "点击按钮以进入相应的功能模块";
  }
};
// "上一步" "下一步"
var eventList2 = {
  fu_gotofan: function() {
    document.getElementById("a-start").style.display = "none";
    document.getElementById("a-fu").style.display = "none";
    document.getElementById("a-fan").style.display = "";
    document.getElementById("a-point").style.display = "none";
    document.getElementById("a-title").innerHTML = "计算番数";
    document.getElementById("a-subtitle").innerHTML = "设置完毕后点击 \"开始计算\" 按钮开始计算";
  },
  fan_gotopoint: function() {
    document.getElementById("a-start").style.display = "none";
    document.getElementById("a-fu").style.display = "none";
    document.getElementById("a-fan").style.display = "none";
    document.getElementById("a-point").style.display = "";
    document.getElementById("a-title").innerHTML = "计算点数";
    document.getElementById("a-subtitle").innerHTML = "设置完毕后点击 \"开始计算\" 按钮开始计算";
  },
  fan_gotofu: function() {
    document.getElementById("a-start").style.display = "none";
    document.getElementById("a-fu").style.display = "";
    document.getElementById("a-fan").style.display = "none";
    document.getElementById("a-point").style.display = "none";
    document.getElementById("a-title").innerHTML = "计算符数";
    document.getElementById("a-subtitle").innerHTML = "设置完毕后点击 \"开始计算\" 按钮开始计算";
  }
};
// 计算符数
function fu_select() {
  let paixing = parseInt($("#fu-paixing option:selected").val());

  /* 功能模块控制 */
  switch(paixing) {
    case 5:
      document.getElementById("fu-hupai").style.display = "";
      document.getElementById("fu-tingpai").style.display = "";
      document.getElementById("fu-quetou").style.display = "";
      document.getElementById("fu-mianzi").style.display = "";
      break;
    default:
      document.getElementById("fu-hupai").style.display = "none";
      document.getElementById("fu-tingpai").style.display = "none";
      document.getElementById("fu-quetou").style.display = "none";
      document.getElementById("fu-mianzi").style.display = "none";
      break;
  }
}

function fu_calculate() {
  let paixing = parseInt($("#fu-paixing option:selected").val());
  let hupai = parseInt($("#fu-hupai option:selected").val());
  let tingpai = parseInt($("#fu-tingpai option:selected").val());
  let quetou = parseInt($("#fu-quetou option:selected").val());
  let mianzi_a1 = parseInt($("#zhong-mk option:selected").val());
  let mianzi_a2 = parseInt($("#zhong-ak option:selected").val());
  let mianzi_a3 = parseInt($("#yao-mk option:selected").val());
  let mianzi_a4 = parseInt($("#yao-ak option:selected").val());
  let mianzi_b1 = parseInt($("#zhong-mg option:selected").val());
  let mianzi_b2 = parseInt($("#zhong-ag option:selected").val());
  let mianzi_b3 = parseInt($("#yao-mg option:selected").val());
  let mianzi_b4 = parseInt($("#yao-ag option:selected").val());

  let hupaifu = 0, tingpaifu = 0, quetoufu = 0, mianzifu = 0;
  let fu_total = 0;

  /* 和牌符 */
  switch (hupai) {
    case 0:
      hupaifu = 0;
      break;
    case 1:
      hupaifu = 10;
      break;
    case 2:
      hupaifu = 0;
      break;
    case 3:
      hupaifu = 2;
      break;
  }

  /* 听牌符 */
  switch (tingpai) {
    case 0:
      tingpaifu = 0;
      break;
    case 1:
      tingpaifu = 0;
      break;
    case 2:
      tingpaifu = 0;
      break;
    case 3:
      tingpaifu = 2;
      break;
    case 4:
      tingpaifu = 2;
      break;
    case 5:
      tingpaifu = 2;
      break;
  }

  /* 雀头符 */
  switch (quetou) {
    case 0:
      quetoufu = 0;
      break;
    case 1:
      quetoufu = 0;
      break;
    case 2:
      quetoufu = 2;
      break;
    case 3:
      quetoufu = 2;
      break;
    case 4:
      quetoufu = 2;
      break;
    case 5:
      quetoufu = 4;
      break;
  }

  /* 面子符 */
  mianzifu = mianzi_a1 * 2 + mianzi_a2 * 4 + mianzi_a3 * 4 + mianzi_a4 * 8 + mianzi_b1 * 8 + mianzi_b2 * 16 + mianzi_b3 * 16 + mianzi_b4 * 32;

  /* 总符数计算 */
  switch(paixing) {
    case 0:
      alert("阿咧？好像什么都没有选啊？");
      fu_total = 0;
      break;
    case 1:
      fu_total = 25;
      break;
    case 2:
      fu_total = 20;
      break;
    case 3:
      fu_total = 30;
      break;
    case 4:
      fu_total = "- (流局满贯)";
      break;
    case 5:
      if(mianzi_a1 + mianzi_a2 + mianzi_a3 + mianzi_a4 + mianzi_b1 + mianzi_b2 + mianzi_b3 + mianzi_b4 > 4) {
        alert("最多只有四组面子哦～再检查一下吧？");
        fu_total = "- (参数错误)";
      } else {
        fu_total = Math.ceil((20 + hupaifu + tingpaifu + quetoufu + mianzifu) / 10) * 10;
      }
      break;
  }

  document.getElementById("fu-total").innerHTML = fu_total;
}
// 计算不含宝牌的番数 or 役满倍数
function fan_checkMenQianQing() {
  let zhuangtai = parseInt($("#fan-zhuangtai option:selected").val());
  let fan_menqianqing = document.getElementsByClassName("menqianqing");
  /* 根据门前清状态，决定是否筛除门前清限定番型 */
  for(let i=0; i<fan_menqianqing.length; i++) {
    if(zhuangtai === 2) {
      fan_menqianqing[i].style.display = "none";
      fan_menqianqing[i].checked = false;
    } else {
      fan_menqianqing[i].style.display = "";
      fan_menqianqing[i].checked = false;
    }
  }
}

function fan_checkYiZhong() {
  let yizhong = parseInt($("#fan-yizhong option:selected").val());
  /* 根据役种类型，决定可以选择的范围 */
  switch(yizhong) {
    case 1:
      document.getElementById("putongfan1").style.display = "";
      document.getElementById("putongfan2").style.display = "";
      document.getElementById("putongfan3").style.display = "";
      document.getElementById("putongfan6").style.display = "";
      document.getElementById("yimanfan1").style.display = "none";
      document.getElementById("yimanfan2").style.display = "none";
      break;
    case 2:
      document.getElementById("putongfan1").style.display = "none";
      document.getElementById("putongfan2").style.display = "none";
      document.getElementById("putongfan3").style.display = "none";
      document.getElementById("putongfan6").style.display = "none";
      document.getElementById("yimanfan1").style.display = "";
      document.getElementById("yimanfan2").style.display = "";
      break;
    default:
      document.getElementById("putongfan1").style.display = "none";
      document.getElementById("putongfan2").style.display = "none";
      document.getElementById("putongfan3").style.display = "none";
      document.getElementById("putongfan6").style.display = "none";
      document.getElementById("yimanfan1").style.display = "none";
      document.getElementById("yimanfan2").style.display = "none";
      break;
  }
}

function fan_calculate() {
  let zhuangtai = parseInt($("#fan-zhuangtai option:selected").val());
  let yizhong = parseInt($("#fan-yizhong option:selected").val());
  let putong1 = document.getElementsByName("putong1");
  let putong2 = document.getElementsByName("putong2");
  let putong3 = document.getElementsByName("putong3");
  let putong6 = document.getElementsByName("putong6");
  let yiman1 = document.getElementsByName("yiman1");
  let yiman2 = document.getElementsByName("yiman2");

  let p = document.getElementsByClassName("sanyuan");

  let sp = 0, fan_total = 0, fan_yiman = 0;

  /* 三元役牌拥有数目，为特例判断做准备 */
  for(let i=0; i<p.length; i++) {
    if(p[i].checked === true) {
      sp = sp + 1;
    }
  }

  switch(yizhong) {
    case 0:
      alert("啊咧？好像什么都没有选啊？");
      fan_total = 0;
      break;
    case 1:
      /* 大三元特例 */
      if(sp === 3) {
        fan_total = "- (大三元，役满)";
      } else {
        /* 1番 */
        for(let i=0; i<putong1.length; i++) {
          if(putong1[i].checked === true) {
            fan_total = fan_total + 1;
          }
        }
        /* 2番 */
        for(let i=0; i<putong2.length; i++) {
          if(putong2[i].checked === true) {
            if((putong2[i].getAttribute("class").indexOf("fuloujian") > -1) && (zhuangtai === 1)) {
              fan_total = fan_total + 2;
            } else if((putong2[i].getAttribute("class").indexOf("fuloujian") > -1) && (zhuangtai === 2)) {
              fan_total = fan_total + 1;
            } else if(putong2[i].getAttribute("class").indexOf("fuloujian") === -1) {
              fan_total = fan_total + 2;
            }
          }
        }
        /* 3番 */
        for(let i=0; i<putong3.length; i++) {
          if(putong3[i].checked === true) {
            if((putong3[i].getAttribute("class").indexOf("fuloujian") > -1) && (zhuangtai === 1)) {
              fan_total = fan_total + 3;
            } else if((putong3[i].getAttribute("class").indexOf("fuloujian") > -1) && (zhuangtai === 2)) {
              fan_total = fan_total + 2;
            } else if(putong3[i].getAttribute("class").indexOf("fuloujian") === -1) {
              fan_total = fan_total + 3;
            }
          }
        }
        /* 6番 */
        for(let i=0; i<putong6.length; i++) {
          if(putong6[i].checked === true) {
            if((putong6[i].getAttribute("class").indexOf("fuloujian") > -1) && (zhuangtai === 1)) {
              fan_total = fan_total + 6;
            } else if((putong6[i].getAttribute("class").indexOf("fuloujian") > -1) && (zhuangtai === 2)) {
              fan_total = fan_total + 5;
            } else if(putong6[i].getAttribute("class").indexOf("fuloujian") === -1) {
              fan_total = fan_total + 6;
            }
          }
        }
      }
      break;
    case 2:
      /* 1倍役满 */
      for(let i=0; i<yiman1.length; i++) {
        if(yiman1[i].checked === true) {
          fan_yiman = fan_yiman + 1;
        }
      }
      /* 2倍役满 */
      for(let i=0; i<yiman2.length; i++) {
        if(yiman2[i].checked === true) {
          fan_yiman = fan_yiman + 2;
        }
      }
      fan_total = "- (" + fan_yiman + "倍役满)";
      break;
    case 3:
      fan_total = "- (流局满贯)";
      break;
  }

  document.getElementById("fan-total").innerHTML = fan_total;
}