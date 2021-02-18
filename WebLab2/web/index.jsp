<%--
User: Vasilkov Alexandr
Date: 03.01.2021
Time: 18:27
--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>WEB_LAB2</title>
    <script type="text/javascript" src="js/errorMessage.js"></script>
    <script type="text/javascript" src="js/canvas.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/my.css">
</head>
<body>
<header>
    <div id="variant"> Variant 4587</div>
    <div id="nameSurname"> Vasilkov Alexandr P3211</div>
</header>

<div class="graphic centered">
    <canvas id="canvas" onclick="clickCanvas('canvas',document.getElementById('form').selectOptionR.value)"
            style="border: 4px double #000000; border-radius: 20px;" width="300" height="300">
    </canvas>
    <script> drawCanvasGraph('canvas',0); </script>
    <jsp:include page="dots.jsp"/>
</div>


<form class="formWithValidation centered" action="control" id="form" name="test" method="POST"
      onsubmit="return validate(this)">
    <div style="margin-bottom: 10px; margin-top: 10px" class="radioInputDiv">
        <p><b>X Value:</b>
            <input class='radioInput field radioField ' id="radioP1" name="radioX" type="radio" value="1">
            <label for="radioP1">1</label>
            <input class='radioInput field radioField' id="radioP2" name="radioX" type="radio" value="2">
            <label for="radioP2">2</label>
            <input class='radioInput field radioField' id="radioP3" name="radioX" type="radio" value="3">
            <label for="radioP3">3</label>
            <input class='radioInput field radioField' id="radioP4" name="radioX" type="radio" value="4">
            <label for="radioP4">4</label>
            <input class='radioInput field radioField ' id="radioP0" name="radioX" type="radio" value="0">
            <label for="radioP0">0</label>
            <input class='radioInput field radioField ' id="radioP_1" name="radioX" type="radio" value="-1">
            <label for="radioP_1">-1</label>
            <input class='radioInput field radioField' id="radioP_2" name="radioX" type="radio" value="-2">
            <label for="radioP_2">-2</label>
            <input class='radioInput field radioField' id="radioP_3" name="radioX" type="radio" value="-3">
            <label for="radioP_3">-3</label>
            <input class='radioInput field radioField' id="radioP_4" name="radioX" type="radio" value="-4">
            <label for="radioP_4">-4</label>
        </p>
    </div>
    <div>
        <p>
            <label for="textfieldY">Y Value(-5..3):</label><input type="text" name="yValue" id="textfieldY" size="40"
                                                                  class='textInput field' maxlength="15"
                                                                  autocomplete="off">
        </p>
    </div>
    <div style="margin-top: 10px;">
        <label for="select1">R Value:</label>
        <select id="select1" name="selectOptionR" onclick="drawCanvasGraph('canvas',value)" class='selectInput field'>
            <option></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>
    <div class="form-buttons">
        <button class="send-button validateBtn" type="submit" id="SubmitButton">Отправить</button>
        <button type="reset" id="reset_button"><img src="img/reset.png" alt="reset_button"></button>
    </div>
</form>
<div class="table-wrapper  centered" style="overflow-x: auto;" id="ans">
    <div class="table">
        <div class="table-header" style="overflow-x: auto">
            <div class="header__item"><a id="x-table">X</a></div>
            <div class="header__item"><a id="y-table">Y</a></div>
            <div class="header__item"><a id="r-table">R</a></div>
            <div class="header__item"><a id="result-table">result</a></div>
            <div class="header__item"><a id="time-table">Date</a></div>
        </div>
        <jsp:include page="table.jsp"/>
    </div>
</div>
<footer>
    <div class="centered">
        <span id="root"> &copy Vasilkov Alexandr</span>
    </div>
</footer>

<div style="margin-bottom: 100px;" name="FixProblemWithFooter"></div>

<script type="text/javascript" src="js/formValidate.js"></script>
</body>
</html>
