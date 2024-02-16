document.getElementById("calculateScoresGroup4").addEventListener("click", function() {
    console.log('Hesablayir')
    let biologyTrue = parseInt(document.getElementById("biologyTrue").value);
    let biologyFalse = parseInt(document.getElementById("biologyFalse").value);
    let chemistryTrue = parseInt(document.getElementById("chemistryTrue").value);
    let chemistryFalse = parseInt(document.getElementById("chemistryFalse").value);
    let physicsTrue = parseInt(document.getElementById("physicsTrue").value);
    let physicsFalse = parseInt(document.getElementById("physicsFalse").value);
    let azerbaijaniTrue = parseInt(document.getElementById("azerbaijaniTrue").value);
    let azerbaijaniFalse = parseInt(document.getElementById("azerbaijaniFalse").value);
    let mathTrue = parseInt(document.getElementById("mathTrue").value);
    let mathFalse = parseInt(document.getElementById("mathFalse").value);

    let biologyScore = biologyTrue * 8 - biologyFalse * 2;
    let chemistryScore = chemistryTrue * 8 - chemistryFalse * 2;
    let physicsScore = physicsTrue * 4 - physicsFalse * 1;
    let azerbaijaniScore = azerbaijaniTrue * 4 - azerbaijaniFalse * 1;
    let mathScore = mathTrue * 4 - mathFalse * 1;

    let totalScore = biologyScore + chemistryScore + physicsScore + azerbaijaniScore + mathScore;

    document.getElementById("result").innerText = + totalScore + " Bal";
  });