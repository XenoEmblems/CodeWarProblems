// http://www.codewars.com/kata/54bd06539f075cece0000feb/solutions/javascript/

function tickToward(start,end){
fix = [[-5,5],[-4,4],[-3,3],[-2,2],[-1,1],[0,0]];
array = [];
start0 = start[0];
start1 = start[1];
array.push(start);
while (start0 !=  end[0] || start1 != end[1]) {
    
    if (start0 < end[0] && start1 < end[1]){
        start0++;
        start1++;
        array.push([start0,start1]);
    }
    
    else if (start0 > end[0] && start1 > end[1]){
        start0--;
        start1--;
        array.push([start0,start1]);
    }
    
    else if (start0 < end[0] && start1 == end[1]) {
        start0++;
        array.push([start0,start1]);
    }
    
    else if (start0 == end[0] && start1 < end[1]) {
        start1++;
        array.push([start0,start1]);
    }
    
    else if (start0 > end[0] && start1 == end[1]) {
        start0--;
        array.push([start0,start1]);
    }
    
    else if (start0 == end[0] && start1 > end[1]) {
        start1--;
        array.push([start0,start1]);
    }
    else {
    return fix;
    }
}
return array;
}