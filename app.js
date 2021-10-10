var presentvaluechart = document.getElementById('presentvalue');
var interestchart = document.getElementById('interest');
var timechart = document.getElementById('time');
var futureval;
function future_value() {
    futureval = presentvaluechart.value * Math.pow(1 + interestchart.value / 100, timechart.value);
    
    document.getElementById('futureValue').innerHTML = futureval;
    document.getElementById('ceil').innerHTML = Math.ceil(futureval);
    document.getElementById('floor').innerHTML = Math.floor(futureval);
    document.getElementById('pv').innerHTML = presentvaluechart.value;
    document.getElementById('int').innerHTML = interestchart.value;
    document.getElementById('periods').innerHTML = timechart.value;
    
    if (presentvaluechart.value === '') {
        document.getElementById('pv').innerHTML = 'Enter Present Value';
    }
    if (interestchart.value === '') {
        document.getElementById('int').innerHTML = 'Enter Interest';
        document.getElementById('futureValue').innerHTML = '0';

    }
    if (timechart.value === '') {
        document.getElementById('periods').innerHTML = 'Enter number of periods (n)';
        document.getElementById('futureValue').innerHTML = '0';

    }
    if (Number.isNaN(futureval)) { 
        document.getElementById('futureValue').innerHTML = '0';
    }
    
}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {

        labels: ['Present Value', 'Interest', 'Time'],
        datasets: [{
            label: 'presentvalue,interest & time',
            data: [presentvaluechart.value, interestchart.value, timechart.value],
            backgroundColor: [
                'rgba(48, 252, 246)',
                'rgba(252, 125, 116)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            hoverOffset: 1.5,
        }],
        
    },

});
function updatechart() {
  var updatechartvalues = [presentvaluechart.value, interestchart.value, timechart.value];
  myChart.data.datasets[0].data = updatechartvalues;
  myChart.update();
}
