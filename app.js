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
    
    if (document.getElementById('presentvalue').value != '' && document.getElementById('int').innerHTML == '' && document.getElementById('periods').innerHTML == '') {
        document.getElementById('ceil').innerHTML = '0';
        document.getElementById('floor').innerHTML = '0';
    }
    if (document.getElementById('presentvalue').value != '' && document.getElementById('int').innerHTML != '' && document.getElementById('periods').innerHTML == '') {
        document.getElementById('ceil').innerHTML = '0';
        document.getElementById('floor').innerHTML = '0';
    }
    if (document.getElementById('presentvalue').value != '' && document.getElementById('int').innerHTML == '' && document.getElementById('periods').innerHTML != '') {
        document.getElementById('ceil').innerHTML = '0';
        document.getElementById('floor').innerHTML = '0';
    }
    if (presentvaluechart.value === '') {
        document.getElementById('pv').innerHTML = '-';
        document.getElementById('pv').style ='color: #1f1f1d';
    }
    else if (presentvaluechart.value !== '') {
        document.getElementById('pv').style ='color: #1f1f1d';
    }
    if (interestchart.value === '') {
        document.getElementById('int').innerHTML = '-';
        document.getElementById('int').style ='color: #1f1f1d';
        document.getElementById('futureValue').innerHTML = '0';

    }
    else if (interestchart.value !== '') {
        document.getElementById('int').style ='color: #1f1f1d';
    }
    if (timechart.value === '') {
        document.getElementById('periods').innerHTML = '-';
        document.getElementById('periods').style ='color: #1f1f1d';
        document.getElementById('futureValue').innerHTML = '0';

    }
    else if (timechart.value !== '') {
        document.getElementById('periods').style = 'color: #1f1f1d';
    }
    if (Number.isNaN(futureval)) { 
        document.getElementById('futureValue').innerHTML = '0';
    }
    
}

function future_reset() {
    document.getElementById('form').reset();
}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {

        labels: ['Present Value', 'Interest', 'Time'],
        datasets: [{
            label: 'presentvalue,interest & time',
            data: [presentvaluechart.value, interestchart.value, timechart.value,12,5,5],
            backgroundColor: [
                'rgba(48, 252, 246)',
                'rgba(252, 125, 116)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderWidth: 0,
        }],
        
    },

});
function updatechart() {
  var updatechartvalues = [presentvaluechart.value, interestchart.value, timechart.value];
  myChart.data.datasets[0].data = updatechartvalues;
  myChart.update();
}
