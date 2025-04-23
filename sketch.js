let questions = [
  {
    question: "教育科技學系的核心精神是什麼？",
    options: [
      "只學習科技操作技能",
      "強調教育理論與科技應用的結合",
      "專注程式設計與工程技術",
      "以教育行政為主要方向",
    ],
    answer: 1, // 正確答案：B
  },
  {
    question: "下列哪一項最有可能是教育科技學系學生的課堂作業？",
    options: [
      "拍攝短劇來說明數位學習概念",
      "撰寫物理實驗報告",
      "創作陶藝作品",
      "練習舞台劇表演",
    ],
    answer: 0, // 正確答案：A
  },
  {
    question: "教育科技學系畢業生常從事哪一類型的工作？",
    options: [
      "餐飲服務業",
      "遊戲實況主",
      "數位學習設計師或教材開發人員",
      "醫學研究人員",
    ],
    answer: 2, // 正確答案：C
  },
  {
    question: "淡江教育科技學系特別強調學生具備什麼能力？",
    options: [
      "唱歌跳舞多才多藝",
      "能熟練製作PPT就好",
      "具有整合科技與教學設計的能力",
      "擅長純技術程式開發，不需懂教育",
    ],
    answer: 2, // 正確答案：C
  },
  {
    question:
      "如果你是一位教育科技學系的學生，老師請你設計一套線上學習課程，你最應該優先考慮的是什麼？",
    options: [
      "課程的美術風格要夠可愛",
      "使用最新的AI工具就一定有效",
      "學習者的需求與學習目標",
      "做出一個自己覺得很酷的介面就好",
    ],
    answer: 2, // 正確答案：C
  },
];

let currentQuestion = 0;
let score = 0;
let showResult = false;
let bgImage; // 宣告背景圖片變數

function preload() {
  bgImage = loadImage("圖片.jpg"); // 載入背景圖片
}

function setup() {
  createCanvas(windowWidth, windowHeight); // 設為全螢幕
}

function draw() {
  imageMode(CORNER); // 設定圖片模式為左上角對齊
  let imgHeight = (bgImage.height / bgImage.width) * windowWidth; // 根據圖片比例計算高度
  image(bgImage, 0, 0, windowWidth, imgHeight); // 從左側往右側填滿顯示圖片

  if (showResult) {
    displayResult();
  } else {
    displayQuestion();
  }
}

function displayQuestion() {
  textSize(32);
  textAlign(CENTER);
  fill(0); // 將文字顏色改為黑色
  text(questions[currentQuestion].question, width / 2, height / 4);

  let boxWidth = 500; // 拉長外框的寬度
  for (let i = 0; i < questions[currentQuestion].options.length; i++) {
    let y = height / 3 + i * 70;
    fill(50);
    rect(width / 2 - boxWidth / 2, y, boxWidth, 50, 10); // 圓角矩形
    fill(255);
    text(questions[currentQuestion].options[i], width / 2, y + 35);
  }
}

function displayResult() {
  textSize(36);
  textAlign(CENTER);
  fill(255);
  text(`你的分數是: ${score * 20}/100`, width / 2, height / 2 - 40); // 每題 20 分

  fill(50);
  rect(width / 2 - 75, height / 2 + 20, 150, 50, 10); // 圓角矩形
  fill(255);
  text("再試一次", width / 2, height / 2 + 55);
}

function mousePressed() {
  if (showResult) {
    if (
      mouseX > width / 2 - 75 &&
      mouseX < width / 2 + 75 &&
      mouseY > height / 2 + 20 &&
      mouseY < height / 2 + 70
    ) {
      resetQuiz();
    }
    return;
  }

  for (let i = 0; i < questions[currentQuestion].options.length; i++) {
    let y = height / 3 + i * 70;
    if (
      mouseX > width / 2 - 150 &&
      mouseX < width / 2 + 150 &&
      mouseY > y &&
      mouseY < y + 50
    ) {
      if (i === questions[currentQuestion].answer) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion >= questions.length) {
        showResult = true;
      }
      break;
    }
  }
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  showResult = false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
}
