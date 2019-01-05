let arr = [];
function Insert(num)
{
    // write code here
    arr.push(num);
    return arr;
}
function GetMedian(){
    // write code here
    arr.sort();
    if(arr.length%2==0){
        return (arr[arr.length/2]+arr[arr.length/2-1])/2;
    }else {
        return arr[Math.floor(arr.length/2)];
    }
}

Insert(1);
Insert(2);
Insert(3);
console.log(GetMedian())