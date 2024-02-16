document.getElementById("calculateScoresGroup2").addEventListener("click", function() {
    console.log('Hesablayir')
    let mathTrue = parseInt(document.getElementById("mathTrue").value);
    let mathFalse = parseInt(document.getElementById("mathFalse").value);
    let geographyTrue = parseInt(document.getElementById("geographyTrue").value);
    let geographyFalse = parseInt(document.getElementById("geographyFalse").value);
    let historyTrue = parseInt(document.getElementById("historyTrue").value);
    let historyFalse = parseInt(document.getElementById("historyFalse").value);
    let azerbaijaniTrue = parseInt(document.getElementById("azerbaijaniTrue").value);
    let azerbaijaniFalse = parseInt(document.getElementById("azerbaijaniFalse").value);
    let englishTrue = parseInt(document.getElementById("englishTrue").value);
    let englishFalse = parseInt(document.getElementById("englishFalse").value);

    let mathScore = mathTrue * 8 - mathFalse * 2;
    let geographyScore = geographyTrue * 8 - geographyFalse * 2;
    let historyScore = historyTrue * 4 - historyFalse * 1;
    let azerbaijaniScore = azerbaijaniTrue * 4 - azerbaijaniFalse * 1;
    let englishScore = englishTrue * 4 - englishFalse * 1;

    let totalScore = mathScore + geographyScore + historyScore + azerbaijaniScore + englishScore;

    document.getElementById("result").innerText = + totalScore + " Bal";
  });