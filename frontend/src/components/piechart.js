import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend,Title);



const PieChart = ({ele}) => {
  console.log(ele)
  let x=[];
  let total=0;
  let food=0
  let trans=0;
  let shopping=0;
  let education=0;
  let other=0
  ele.forEach((ele)=>{
  let x=ele.Categories.Food.length-1;
  console.log(x,"iam x")
  let y=ele.Categories.Transportation.length-1
  let z=ele.Categories.Education.length-1
  let a=ele.Categories.Shopping.length-1
  let b=ele.Categories.Other.length-1
       for(let i=0;i<=x;i++){
           food=food+ele.Categories.Food[i].Amount;
           console.log(food)
       };
       for(let i=0;i<=y;i++){
        trans=trans+ele.Categories.Transportation[i].Amount
    };
    for(let i=0;i<=z;i++){
      education=education+ele.Categories.Education[i].Amount
  };
  for(let i=0;i<=a;i++){
   shopping=shopping+ele.Categories.Shopping[i].Amount
};
for(let i=0;i<=b;i++){
  other=other+ele.Categories.Other[i].Amount
};
       
  })
  total=food+trans+shopping+other+education
  console.log(food,"we food")
  const data = {
    labels: ["Food","Transportation","Shopping","Education","Other"],
    datasets: [
      {
        label:["Food","Transportation","Shopping","Education","Other"],
        data: [food, trans, shopping, education, other],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'],
      
      },
    ],
  };

  const options = {
    responsive: true,
    title: {
      display: true,
      text: 'Color Distribution',
      fontSize: 20,
    
    },
    legend: {
      display: true,
      position: 'bottom',
    },
   
  };

  return (
    <div style={{ width: '350px',marginLeft:"7%",textAlign:"center"}}>
      <h2 className='p-5'>Pie Chart</h2>
      <Pie data={data}  options={options} />
      <h3 style={{marginTop:"50px"}}>Total Expense:- {total}</h3>
    </div>
  );
};

export default PieChart;