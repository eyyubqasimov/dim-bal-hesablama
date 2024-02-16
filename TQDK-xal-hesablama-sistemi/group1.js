document.getElementById("calculateScoresGroup1").addEventListener("click", function() {
    let mathTrue = parseInt(document.getElementById("mathTrue").value);
    let mathFalse = parseInt(document.getElementById("mathFalse").value);
    let physicsTrue = parseInt(document.getElementById("physicsTrue").value);
    let physicsFalse = parseInt(document.getElementById("physicsFalse").value);
    let chemistryTrue = parseInt(document.getElementById("chemistryTrue").value);
    let chemistryFalse = parseInt(document.getElementById("chemistryFalse").value);
    let azerbaijaniTrue = parseInt(document.getElementById("azerbaijaniTrue").value);
    let azerbaijaniFalse = parseInt(document.getElementById("azerbaijaniFalse").value);
    let englishTrue = parseInt(document.getElementById("englishTrue").value);
    let englishFalse = parseInt(document.getElementById("englishFalse").value);

    let mathScore = mathTrue * 8 - mathFalse * 2;
    let physicsScore = physicsTrue * 8 - physicsFalse * 2;
    let chemistryScore = chemistryTrue * 4 - chemistryFalse * 1;
    let azerbaijaniScore = azerbaijaniTrue * 4 - azerbaijaniFalse * 1;
    let englishScore = englishTrue * 4 - englishFalse * 1;

    let totalScore = mathScore + physicsScore + chemistryScore + azerbaijaniScore + englishScore;

    document.getElementById("result").innerText = + totalScore + " Bal";
  });