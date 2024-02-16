document.getElementById("calculateScoresGroup3").addEventListener("click", function() {
    console.log('Hesablayir')
    let literatureTrue = parseInt(document.getElementById("literatureTrue").value);
    let literatureFalse = parseInt(document.getElementById("literatureFalse").value);
    let historyTrue = parseInt(document.getElementById("historyTrue").value);
    let historyFalse = parseInt(document.getElementById("historyFalse").value);
    let mathTrue = parseInt(document.getElementById("mathTrue").value);
    let mathFalse = parseInt(document.getElementById("mathFalse").value);
    let azerbaijaniTrue = parseInt(document.getElementById("azerbaijaniTrue").value);
    let azerbaijaniFalse = parseInt(document.getElementById("azerbaijaniFalse").value);
    let englishTrue = parseInt(document.getElementById("englishTrue").value);
    let englishFalse = parseInt(document.getElementById("englishFalse").value);

    let literatureScore = literatureTrue * 8 - literatureFalse * 2;
    let historyScore = historyTrue * 8 - historyFalse * 2;
    let mathScore = mathTrue * 4 - mathFalse * 1;
    let azerbaijaniScore = azerbaijaniTrue * 4 - azerbaijaniFalse * 1;
    let englishScore = englishTrue * 4 - englishFalse * 1;

    let totalScore = literatureScore + historyScore + mathScore + azerbaijaniScore + englishScore;

    document.getElementById("result").innerText = + totalScore + " Bal";
  });