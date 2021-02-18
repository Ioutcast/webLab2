
function validate(_form){
    let formVal = true;

    let X = _form.radioX.value;
    let Y = _form.yValue.value;
    let R = _form.selectOptionR.value;
    if (X === ""|| Y === ""|| Y<=-5 || Y>=3 ){
        formVal = false;
    }
    // else createCanvas('canvas', X, Y, R);
    return formVal;
}



function drawCanvasGraph(id, r){
    let returnValue = r;
    let canvas = document.getElementById(id),
        context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    //прямоугольник
    context.beginPath();
    context.rect(150, 150, 130, 65);
    context.closePath();
    context.strokeStyle = "blue";
    context.fillStyle = "blue";
    context.fill();
    context.stroke();

    // сектор
    context.beginPath();
    context.moveTo(150, 150);
    context.arc(150, 150, 130,  Math.PI, 1.5*Math.PI);
    context.closePath();
    context.strokeStyle = "blue";
    context.fillStyle = "blue";
    context.fill();
    context.stroke();

    //треугольник
    context.beginPath();
    context.moveTo(215, 150);
    context.lineTo(150, 20);
    context.lineTo(150, 150);
    context.lineTo(85, 150);
    context.closePath();
    context.strokeStyle = "blue";
    context.fillStyle = "blue";
    context.fill();
    context.stroke();

    //оси
    context.beginPath();
    context.font = "10px Verdana";
    context.moveTo(150, 0); context.lineTo(150, 300);
    context.moveTo(150, 0); context.lineTo(145, 15);
    context.moveTo(150, 0); context.lineTo(155, 15);
    context.fillText("Y", 160, 10);
    context.moveTo(0, 150); context.lineTo(300, 150);
    context.moveTo(300, 150); context.lineTo(285, 145);
    context.moveTo(300, 150); context.lineTo(285, 155);
    context.fillText("X", 290, 135);

    // деления X
    context.moveTo(145, 20); context.lineTo(155, 20); context.fillText(r, 160, 20);
    context.moveTo(145, 85); context.lineTo(155, 85); context.fillText((r/2), 160, 78);
    context.moveTo(145, 215); context.lineTo(155, 215); context.fillText(-(r / 2), 160, 215);
    context.moveTo(145, 280); context.lineTo(155, 280); context.fillText(-r, 160, 280);
    // деления Y
    context.moveTo(20, 145); context.lineTo(20, 155); context.fillText(-r, 20, 170);
    context.moveTo(85, 145); context.lineTo(85, 155); context.fillText(-(r / 2), 70, 170);
    context.moveTo(215, 145); context.lineTo(215, 155); context.fillText((r / 2), 215, 170);
    context.moveTo(280, 145); context.lineTo(280, 155); context.fillText(r, 280, 170);

    context.closePath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.stroke();
    return returnValue;
}
function createCanvas(id, x, y, r){

    drawCanvasGraph(id, r);
    let canvas = document.getElementById(id),
    context = canvas.getContext("2d");
    context.beginPath();
    context.rect(Math.round(150 + ((x / r) * 130))-2, Math.round(150 - ((y / r) * 130))-2, 4, 4);
    context.closePath();

    context.strokeStyle = "purple";
    context.fillStyle = "purple";

    context.fill();
    context.stroke();

}
function clickCanvas(canvId, R) {
    if (R === "")
        showMessageBox('Ошибка невозможно определить координаты! :/')
    else {
        let elem = document.getElementById(canvId);
        let br = elem.getBoundingClientRect();
        let left = br.left;
        let top = br.top;
        let event = window.event;
        let x = event.clientX-left;
        let y = event.clientY-top;
        let boolArea = isArea(x, y, R);
        x = (x - 150) / 130 * R ;
        y = (150 - y) / 130 * R;
        doRequest(x.toFixed(2), y.toFixed(2), R);
    }
}
function drawPoint1(id, x, y,isArea) {
    let canvas = document.getElementById(id),
        context = canvas.getContext("2d");
    context.beginPath();
    context.rect(x - 2, y - 2, 4, 4);
    context.closePath();

    if(isArea === true){
        context.strokeStyle = "green";
        context.fillStyle = "green";
    } else {
        context.strokeStyle = "red";
        context.fillStyle = "red";
    }
    context.fill();
    context.stroke();
}
function isArea(x, y, R) {
     x = (x - 150) / 130 * R ;
     y = (150 - y) / 130 * R;
    if(x>=0 && y<=0 && y>=-R/2 && x<=R){
        return 'true';
    }
    if(x>=0 && y>=0 && y<=(-2.0*x+1.0*R)){
        return 'true';
    }
    if(x<=0 && y>=0 && x*x+y*y<=R*R){
        return 'true';
    }
    return 'false';
}



function doRequest(x, y, r){
    $.ajax({
        type: 'POST',
        url: 'control',
        data: {
            'radioX': x,
            'yValue': y,
            'selectOptionR': r
        },
        success: function () {
            window.location.href = 'result.jsp';
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            showMessageBox("Проверка отправки на сервер : неуспешно");
        }
    });
}