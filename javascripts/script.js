
//SIDE NAVIGATION PANEL
function openNav() {
    document.getElementById("mainNav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mainNav").style.width = "0";
}


//EXERCISE SECTION
    //displays result (correct/incorrect)
function correct() {
    $("#incorrectbtn").hide();
    $("#tryAgainMsg").hide(20);  
    $("#correctbtn").fadeIn(200);    
}
function incorrect() {
    $("#correctbtn").hide();
    $("#incorrectbtn").fadeIn(200);  
    $("#tryAgainMsg").fadeIn(200);  
}
    //user input    
let input1, input2, input3, input4, input5, input6, input7, input8, input9, input10;

    //assigns input values to variables. function will be called inside exerciseCheck_*, when submit btn is clicked
function setInputVar() {
    input1 =  $("#input1").val();
    input2 = $("#input2").val();
    input3 =  $("#input3").val();
    input4 = $("#input4").val();
    input5 = $("#input5").val();        
    input6 = $("#input6").val(); 
    input7 = $("#input7").val();
    input8 = $("#input8").val();
    input9 = $("#input9").val();
    input10 = $("#input10").val();
}

function exerciseCheck_variables() {
    setInputVar();
    //correct answers
    let ans1 = "city",
    ans2 = "joburg",
    ans3 = "age",
    ans4 = "22";
    if (input1 == ans1 && input2 == ans2 && input3 == ans3 && input4 == ans4) {correct();} else {incorrect();}
}
function exerciseCheck_conditionals() {
    setInputVar();
    //correct answers
    let ans1 = "num1",
    ans2 = ">",
    ans3 = "num2";    
    if (input1 == ans1 && input2 == ans2 && input3 == ans3) {correct();} else {incorrect();}
}
function exerciseCheck_loops() {
    setInputVar();
    //correct answers
    let ans1 = "for",
    ans2 = "let",
    ans3 = "carsArr",
    ans4 = "car";
    if (input1 == ans1 && input2 == ans2 && input3 == ans3 && input4 == ans4) {correct();} else {incorrect();}
}
function exerciseCheck_maps() {
    setInputVar();
    //correct answers
    let ans1 = "Map()",
    ans2 = "fruitColors",
    ans3 = '"banana"',
    ans4 = '"yellow"',
    ans5 = "set",
    ans6 = '"naartjie"',
    ans7 = '"orange"',
    ans8 = "fruitColors",
    ans9 = '"apple"';
    if (input1 == ans1 && input2 == ans2 &&
        input3 == ans3 && input4 == ans4 && 
        input5 == ans5 && input6 == ans6 && 
        input7 == ans7 && input8== ans8 && input9== ans9) {correct();} else {incorrect();}
}
function exerciseCheck_functions() {
    setInputVar();
    //correct answers
    let ans1 = "function",
    ans2 = "+",
    ans3 = "num2",
    ans4 = "result";
    if (input1 == ans1 && input2 == ans2 && input3 == ans3 && input4 == ans4) {correct();} else {incorrect();}
}
function exerciseCheck_events() {
    setInputVar();
    //correct answers
    let ans1 = "onmouseenter";
    if (input1 == ans1) {correct();} else {incorrect();}
}
function exerciseCheck_jquery() {
    setInputVar();
    //correct answers
    let ans1 = "dblclick",
    ans2 = "slideToggle";
    if (input1 == ans1 && input2 == ans2) {correct();} else {incorrect();}
}
