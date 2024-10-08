
function GetPercent() {
    let RateList = parseFloat(document.getElementById("RateList").value)
    let Percent = parseFloat(document.getElementById("percent").value)

    let final = (RateList * Percent) / 100
        let main =  RateList - final
    let roundAmt = Math.round(main)
    document.getElementById("finalAmt").innerHTML = roundAmt;
    // multi ply krna
    let quantity = parseFloat(document.getElementById("qty").value);
    let multi = quantity * roundAmt 

    document.getElementById("multi").innerHTML = multi;   

}