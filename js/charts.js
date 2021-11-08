
var ctx = document.getElementById("myAreaChart").getContext('2d');

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: ["Aug 1",	"Aug 3",	"Aug 5",	"Aug 7",	"Aug 9",	"Aug 13"],
      datasets: [{
          label: 'Series 1', // Name the series
          data: [	10000,	30000,	35000,	30000,	20000, 40000], // Specify the data values array
          fill: true,
          borderColor: '#4b77de', // Add custom color border (Line)
          pointBorderColor: "#4b77de", // blue point border
          pointBackgroundColor: "#4b77de",
          backgroundColor: '#f6f8fe', // Add custom color background (Points and Fill)
          borderWidth: 1 // Specify bar border width
      }]
  },
  options: {
      plugins:{   
          legend: {
            display: false
                  },
               },
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  }
});



new Chart(document.getElementById("myLinearChart"), {
  type: 'line',
  data: {
    labels: ["Januray","February","March","April","May","June"],
    datasets: [{ 
        data: [1,1.5,2.5,4,5,3],
        label: "June",
        borderColor: "#1bc889",
        fill: true,
        backgroundColor: '#e4e4e4',
        pointBorderColor: "#1bc889", // blue point border
      pointBackgroundColor: "#1bc889"

      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'World population per region (in millions)'
    },    plugins:{   
      legend: {
        display: false
              },
           },  responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  }
});



new Chart(document.getElementById("myBarChart"), {
  type: 'bar',
  data: {
    labels: ["June", "July", "August", "September", "October","November","December"],
    datasets: [
      {
        label: "Men",
        backgroundColor: "#b07ff4",
        data: [4000,4500,13000,5000,7000,9000,11000]
      },{      label: "Women",
      backgroundColor:"#6200ea",
      data: [6000,6000,15000,7000,7000,10000,14000]}
    ]
  },
  options: {
    
    title: {
      display: false      },
            responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  }
});




