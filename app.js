window.onload = function () {
    const menu_button = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    menu_button.addEventListener('click', function () {
        menu_button.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}
var presentvaluechart = document.getElementById('presentvalue');
var interestchart = document.getElementById('interest');
var timechart = document.getElementById('time');
var pmtchart = document.getElementById('pmt');
var presentValueWithPMT;
var futureValueCompileWithPMT;
var beginningfv;
function future_value() {
    if (document.getElementById('endinput').checked == false && document.getElementById('begin').checked == false) {
        futureValueCompileWithPMT = pmtchart.value * [((1 + (interestchart.value / 100))**timechart.value - 1) / (interestchart.value / 100)] + presentvaluechart.value * ((1 + (interestchart.value / 100))**timechart.value);
    presentValueWithPMT = futureValueCompileWithPMT / (Math.pow(1 + interestchart.value/ 100, timechart.value)); // if pmt is provided.    
    }
        // type 0 end
        if (document.getElementById('endinput').checked == true) {
            futureValueCompileWithPMT = pmtchart.value * [((1 + (interestchart.value / 100))**timechart.value - 1) / (interestchart.value / 100)] + presentvaluechart.value * ((1 + (interestchart.value / 100))**timechart.value);
            presentValueWithPMT = futureValueCompileWithPMT / (Math.pow(1 + interestchart.value/ 100, timechart.value)); // if pmt is provided.    
        }
        // type 0 end
        // type 1 beginning period
        if (document.getElementById('begin').checked == true) {
            futureValueCompileWithPMT = presentvaluechart.value*((1 + (interestchart.value/100))**timechart.value) + (pmtchart.value/(interestchart.value/100)) * ((1 + (interestchart.value/100))**timechart.value - 1)*(1 + (interestchart.value/100)); // working beginning formula
            presentValueWithPMT = futureValueCompileWithPMT / (Math.pow(1 + interestchart.value/ 100, timechart.value)); // if pmt is provided.    
        }
        // type 1 beginning period
    document.getElementById('initial-amount-id').innerHTML = presentvaluechart.value;
    document.getElementById('futureValue').innerHTML = futureValueCompileWithPMT;
    document.getElementById('ceil').innerHTML = Math.ceil(futureValueCompileWithPMT);
    document.getElementById('floor').innerHTML = Math.floor(futureValueCompileWithPMT);
    document.getElementById('pv').innerHTML = presentValueWithPMT;
    document.getElementById('int').innerHTML = interestchart.value;
    document.getElementById('periods').innerHTML = timechart.value;
    document.getElementById('pmtop').innerHTML = pmtchart.value;
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
        document.getElementById('initial-amount-id').innerHTML = '-';
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
    if (pmtchart.value === '') {
        document.getElementById('pmtop').innerHTML = '-';
    }
    if (Number.isNaN(futureValueCompileWithPMT)) { 
        document.getElementById('futureValue').innerHTML = '0';
    }
    if (Number.isNaN(presentValueWithPMT)) {
        document.getElementById('pv').innerHTML = '-';
        document.getElementById('ceil').innerHTML = '0';
        document.getElementById('floor').innerHTML = '0';
    }
}

function future_reset() {
    $("input[type=number]").val('');
}
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Present Value', 'Interest', 'Time', 'PMT'],
        datasets: [{
            data: [presentvaluechart.value, interestchart.value, timechart.value,pmtchart.value,7,7,7,7],
            backgroundColor: [
                'rgba(48, 252, 246)',
                'rgba(252, 125, 116)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(20,20,20)',
                'rgba(20,20,20)',
                'rgba(20,20,20)',
                'rgba(20,20,20)'
            ],
            borderWidth: 0,
        }],
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});
function updatechart() {
  var updatechartvalues = [presentvaluechart.value, interestchart.value, timechart.value, pmtchart.value];
  myChart.data.datasets[0].data = updatechartvalues;
  myChart.update();
}
