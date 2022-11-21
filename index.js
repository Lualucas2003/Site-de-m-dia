function valor(){

    var unid1 = document.getElementById("uni1")
    var unid2 = document.getElementById("uni2")
    var unid3 = document.getElementById("uni3")
    var unid4 = document.getElementById("uni4")
    var text = document.getElementById("resul")
    var n1 = parseInt(unid1.value)
    var n2 = parseInt(unid2.value)
    var n3 = parseInt(unid3.value)
    var n4 = parseInt(unid4.value)

    var soma = n1+n2+n3+n4
    var final = soma/4

    if (final > 7){
    resul.style.background = 'green'
    text.innerText = "você passou de ano"
    }
    else {
        resul.style.background = 'red'
        text.innerText = "você não passou"
    }
}
