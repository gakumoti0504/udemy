const arry = [10, 20, 30, 40];
const newarry = [];

for (let i=0;i<arry.length;i++){
    const val = arry[i]*2;
    if(val>50){
        newarry.push(val);
    }
    console.log(newarry);
}

const newarry2 = arry.map((val)=>(val*2)).filter((val)=>(val>50));
console.log(newarry2);