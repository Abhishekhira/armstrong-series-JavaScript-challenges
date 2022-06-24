console.log("armstrong series")

var number=prompt('enter an armstrong number')
var temp =number;
var sum=0;
while(temp>0){
    var digit=temp%10;
    console.log(digit)

    sum +=digit**3
    console.log(sum)

    temp=parseInt(temp/10)
    console.log(temp)

}
if (sum==number) {
    console.log(`${number} is an armstrong number`)
    
}else{
    console.log(`${number} is not an armstrong number`)
}