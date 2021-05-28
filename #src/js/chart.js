var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["01",	"02",	"03",	"04",	"05",	"06",	"07","08",	"09","10", "11", "12"],
        datasets: [{
            label: 'Restless', // Name the series
            data: [100,	200, 100,200,0,	200,100,200,100,200,100,0,200,100], // Specify the data values array
            fill: false,
            borderColor: '#4339F2', // Add custom color border (Line)
            backgroundColor: '#4339F2', // Add custom color background (Points and Fill)
            borderWidth: 3 // Specify bar border width
        },
                  {
            label: 'Awake', // Name the series
            data: [200,	0,200,0,400,200,300,100,300,0,200,400,200,300], // Specify the data values array
            fill: false,
            borderColor: '#FF3A29', // Add custom color border (Line)
            backgroundColor: '#FF3A29', // Add custom color background (Points and Fill)
            borderWidth: 3 // Specify bar border width
        },
                  {
            label: 'Deep', // Name the series
            data: [300,	200,300,200,100,300,100,400,300,400,300,200,300,200], // Specify the data values array
            fill: false,
            borderColor: '#34B53A', // Add custom color border (Line)
            backgroundColor: '#34B53A', // Add custom color background (Points and Fill)
            borderWidth: 3 // Specify bar border width
        }
      ]
    },
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
      title: {
        display: false,
        text: "World Wide Wine Production"
      }
    }
});