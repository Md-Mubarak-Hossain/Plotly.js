// scatter plot
let xArray=[50,60,70,80,90,100,110,120,130,140,150]
let yArray=[7,8,14,9,9,9,10,11,14,14,15]

// Define data
let data=[{
    x:xArray,
    y:yArray,
    mode:'line',
    type:'line'
}]

// define layout
let layout={
    xaxis:{range:[40,160],title:'Square meters'},
    yaxis:{range:[5,16],title:'Price is Millions'},
    title:"House Price vs size"
};
// display using plotly
Plotly.newPlot("myPlotLine",data,layout);