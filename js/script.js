function hitungLuas() {
    let a = parseFloat(document.getElementById("alas").value);
    let t = parseFloat(document.getElementById("tinggi").value);

    if (isNaN(a) || isNaN(t)){
        alert("Tidak bisa input selain angka!!")
        return;
    }
    
    let luas = 0.5 * a * t;
    
    document.getElementById("outputLuas").value = luas;
}

function resetLuas(){
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("outputLuas").value = "";
}

function hitungKeliling() {
    let sisi1 = parseFloat(document.getElementById("sisi1").value);
    let sisi2 = parseFloat(document.getElementById("sisi2").value);
    let sisi3 = parseFloat(document.getElementById("sisi3").value);

    if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)){
        alert("Tidak bisa input selain angka!!");
        return;
    }

    let keliling = sisi1 + sisi2 + sisi3;

    document.getElementById("outputKeliling").value = keliling;
}

function resetKeliling(){
    document.getElementById("sisi1").value = "";
    document.getElementById("sisi2").value = "";
    document.getElementById("sisi3").value = "";
    document.getElementById("outputKeliling").value = "";
}