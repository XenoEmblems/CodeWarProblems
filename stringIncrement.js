// http://www.codewars.com/kata/string-incrementer/javascript

function incrementString(string) {
    var inc = string.split("");
    var i = 1;
    var j = 0;
    var numbers = [];
    numbers.push(inc[inc.length - 1]);
    var k = 0;
    var digits = 0;
    var leading = [];
    // var zeroes = 0;
    if (isNaN(inc[inc.length - 1]) === false){
        while (isNaN(inc[inc.length - i]) === false){
        i++;
        k++;
        digits++;
        numbers.push(inc[inc.length - i]);
        
            
        }
        for (k > 0; k--;){
            inc.pop();
        }
        // return zeroes;
        numbers.pop();
        var lastnum = numbers.reverse().join("");
        var int = parseInt(lastnum) + 1;
        var difference = digits - int.toString().length;
        if (difference > 0) {
        for (difference > 1; difference--;){
            inc.push("0");
        }
        }
        inc.push(int);
        newstring = inc.join("");
        return newstring;
    } else {
        inc.push(1);
        newstring = inc.join("");
        return newstring;
    }
}