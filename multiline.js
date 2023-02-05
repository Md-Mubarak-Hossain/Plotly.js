
let exp1='1.5*x+5';
let exp2='1.5*x+10';
let exp3='1.5*x+15';
let exp4='1.5*x+20';
// generate value
let x1Values=[]
let x2Values=[]
let x3Values=[]
let x4Values=[]
let y1Values=[]
let y2Values=[]
let y3Values=[]
let y4Values=[]
for(let x=0; x<=10;x++){
    x1Values.push(x)
    x2Values.push(x)
    x3Values.push(x)
    x4Values.push(x)
    y1Values.push(eval(exp1))
    y2Values.push(eval(exp2))
    y3Values.push(eval(exp3))
    y4Values.push(eval(exp3))
};

let data=[
    {x:x1Values,y:y1Values, mode:'lines'},
    {x:x2Values,y:y2Values, mode:'lines'},
    {x:x3Values,y:y3Values, mode:'lines'},
    {x:x4Values,y:y4Values, mode:'lines'},
]

Plotly.newPlot('myPlot',data)
