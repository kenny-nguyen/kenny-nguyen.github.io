// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)

// variable used for holidays - currently empty
var unavailableDates = []//["06/29/2020","07/07/2020","07/10/2020"]
// kathy off on sundays and tuesdays
kathyDayOff = [0,2];
// bruce off on wednesdays
bruceDayOff = [3];
// carol off on fridays
carolDayOff = [5];
const setDateFormat = "mm/dd/yy";
var professionalDayOff="";

// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    console.log(a);

    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    // Code for phone number regular expression inspired by https://stackoverflow.com/a/35961661
    // Forms that are valid: 555-555-5555 | (555)555-5555 | (555) 555-5555 | 555 555 5555 | 5555555555 | 1 555 555 5555 
    var filter = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

// code for credit card regex inspired by http://www.java2s.com/Tutorial/JavaScript/0520__Regular-Expressions/Matchinga16digitcreditcardnumberseparatedbyasinglespace.htm
function validateCreditCard(cardNum){
    var c = document.getElementById(cardNum).value;
    console.log(c);
    var filter = /[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}/;
    if(filter.test(c)){
        return true;
    }else{
        return false;
    }
}

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
     if (professionalDayOff.includes(date.getDay()))
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    //return [ unavailableDates.indexOf(string) == 0]
    // makes all dates available.
    return [true]; 
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone-number-input").on("change", function(){
        if (!validatePhone("phone-number-input")){
            $("#number-check").show();
            $("#phone-number-input").val("");
            $("#phone-number-input").addClass("is-invalid");
        }
        else {
            $("#phone-number-input").removeClass("is-invalid");
            $("#phone-number-input").addClass("is-valid");
            $("#number-check").hide();


        }
    });

    $("#credit-card-input").on("change", function(){
        if (!validateCreditCard("credit-card-input")){
            $("#credit-card-check").show();
            $("#credit-card-input").val("");
            $("#credit-card-input").addClass("is-invalid");
        }
        else {
            $("#credit-card-input").removeClass("is-invalid");
            $("#credit-card-input").addClass("is-valid");
            $("#credit-card-check").hide();

        }
    });

    $(".professional-choice").click(function(){
        professionalName = $("input[type='radio'][name='optionsRadios']:checked").val()
        if(professionalName=="kathy"){
            professionalDayOff=kathyDayOff;
        }
        else if(professionalName=="bruce"){
            professionalDayOff=bruceDayOff;
        }
        else if(professionalName=="carol"){
            professionalDayOff=carolDayOff;
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // To use a different theme you must include its css in your HTML file. 
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before current date. Add argument to change (ex: new Date("06/01/2020"))
            minDate: new Date(),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
            
        }   
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put 
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });

});
