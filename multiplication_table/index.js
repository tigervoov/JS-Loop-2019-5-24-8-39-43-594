var i=1
var str=null
while(i<10){
    for(let j=1;j<=i;j++){
        str=str+i+"*"+j+"="+i*j+"  "
        if(i==j){
        console.log(str);
        str=null
        }            
    }
    i++;
}