let score = 0;

// アップグレードの初期値
let clickPower = 1;
let autoPower = 0;
let multi = 1;

// コスト
let costClick = 10;
let costAuto = 50;
let costMulti = 200;

// HTML要素
const scoreEl = document.getElementById("score");
const powerClickEl = document.getElementById("powerClick");
const powerAutoEl = document.getElementById("powerAuto");
const multiEl = document.getElementById("multi");

const costClickEl = document.getElementById("costClick");
const costAutoEl = document.getElementById("costAuto");
const costMultiEl = document.getElementById("costMulti");

// クリックで増加
document.getElementById("clickBtn").addEventListener("click", () => {
  score += clickPower * multi;
  updateDisplay();
});

// クリックパワー強化
document.getElementById("upgradeClick").addEventListener("click", () => {
  if (score >= costClick) {
    score -= costClick;
    clickPower++;
    costClick = Math.floor(costClick * 1.5);
    updateDisplay();
  }
});

// オートクリック強化
document.getElementById("upgradeAuto").addEventListener("click", () => {
  if (score >= costAuto) {
    score -= costAuto;
    autoPower++;
    costAuto = Math.floor(costAuto * 1.5);
    updateDisplay();
  }
});

// 倍率アップ
document.getElementById("upgradeMulti").addEventListener("click", () => {
  if (score >= costMulti) {
    score -= costMulti;
    multi++;
    costMulti = Math.floor(costMulti * 2);
    updateDisplay();
  }
});

// 自動生成（1秒ごと）
setInterval(() => {
  score += autoPower * multi;
  updateDisplay();
}, 1000);

// 表示更新
function updateDisplay() {
  scoreEl.textContent = score;
  powerClickEl.textContent = clickPower;
  powerAutoEl.textContent = autoPower;
  multiEl.textContent = multi;

  costClickEl.textContent = costClick;
  costAutoEl.textContent = costAuto;
  costMultiEl.textContent = costMulti;
}
