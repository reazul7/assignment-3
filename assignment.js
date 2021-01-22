
//01-Convert Kilometer to Meter
//1km = 1000m
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
       return "Distance cannot be negative";
    }
    else if (kilometer == 0) {
       return "Please input a valid number for convert";
    }
    var meter = kilometer * 1000;
    return meter;
 }
 var kilometerValue = kilometerToMeter(7);
 console.log(kilometerValue);
 
 
 //02-Total buying Calculator
 //watch = 50, phone = 100, laptop = 500;
 function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
       return "Product cannot be negative";
    }
    else {
       var watchPrice = watch * 50;
       var phonePrice = phone * 100;
       var laptopPrice = laptop * 500;
       var totalPrice = watchPrice + phonePrice + laptopPrice;
       return totalPrice;
    }
 }
 var productUnit = budgetCalculator(20, 10, 2);
 console.log(productUnit);
 
 
 //03-Total Hotel Cost
 //1-10days = 100, 11-20days = 80, 21-more days = 50;
 function hotelCost(days) {
    var bills = 0;
    if (days < 0) {
       return "Days can't be negative"
    }
    else if (days == 0) {
       return "To see bill you must stay hotel"
    }
    else if (days <= 10) {
       bills = days * 100;
    }
    else if (days <= 20) {
       var first10DaysBill = 10 * 100;
       var remaining = days - 10;
       var second10DaysBill = remaining * 80;
       bills = first10DaysBill + second20DaysBill;
    }
    else {
       var first10DaysBill = 10 * 100;
       var second10DaysBill = 10 * 80;
       var remaining = days - 20;
       var third10DaysBill = remaining * 50;
       bills = first10DaysBill + second10DaysBill + third10DaysBill;
    }
    return bills;
 }
 var totalBill = hotelCost(24);
 console.log(totalBill);
 
 
 //04-Find Max. string Length
 function megaFriend(names) {
    var bigName = names[0];
    for (i = 0; i < names.length; i++) {
       var element = names[i];
       if (element.length > bigName.length) {
          bigName = element;
       }
    }
    return bigName;
 }
 var names = ['abul', 'kabul', 'habul', 'ronaldo', 'messi', 'neymar'];
 console.log(megaFriend(names));