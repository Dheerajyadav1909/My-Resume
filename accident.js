// Chart 1: Total Accidents in India (Year by Year)
const totalAccidentsCtx = document.getElementById('totalAccidentsChart').getContext('2d');
new Chart(totalAccidentsCtx, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [{
            label: 'Total Accidents',
            data: [48000, 50000, 46000, 52000, 55000, 60000],
            borderColor: '#00ffc6',
            tension: 0.4
        }]
    }
});

// Chart 2: Accidents Every Minute
const accidentsPerMinuteCtx = document.getElementById('accidentsPerMinuteChart').getContext('2d');
new Chart(accidentsPerMinuteCtx, {
    type: 'doughnut',
    data: {
        labels: ['1st Min', '2nd Min', '3rd Min', '4th Min', '5th Min'],
        datasets: [{
            label: 'Accidents',
            data: [20, 30, 15, 25, 10],
            backgroundColor: ['#00bfa5', '#00ffc6', '#1f1f1f', '#292929', '#0056b3']
        }]
    }
});

// Chart 3: Mountain Region Accidents
const mountainAccidentsCtx = document.getElementById('mountainAccidentsChart').getContext('2d');
new Chart(mountainAccidentsCtx, {
    type: 'bar',
    data: {
        labels: ['Himalayas', 'Aravalli', 'Nilgiris', 'Western Ghats'],
        datasets: [{
            label: 'Accidents',
            data: [1200, 800, 500, 900],
            backgroundColor: '#00ffc6'
        }]
    }
});

// Chart 4: City vs. Rural Accident Comparison
const cityRuralComparisonCtx = document.getElementById('cityRuralComparisonChart').getContext('2d');
new Chart(cityRuralComparisonCtx, {
    type: 'pie',
    data: {
        labels: ['City', 'Rural'],
        datasets: [{
            label: 'Accidents',
            data: [70, 30],
            backgroundColor: ['#00ffc6', '#1f1f1f']
        }]
    }
});

// Chart 5: Common Causes of Accidents
const commonCausesCtx = document.getElementById('commonCausesChart').getContext('2d');
new Chart(commonCausesCtx, {
    type: 'polarArea',
    data: {
        labels: ['Overspeeding', 'Drunk Driving', 'Distracted Driving', 'Weather'],
        datasets: [{
            label: 'Causes',
            data: [40, 25, 20, 15],
            backgroundColor: ['#00ffc6', '#00bfa5', '#1f1f1f', '#292929']
        }]
    }
});

// Chart 6: Monthly Accident Trends
const monthlyTrendsCtx = document.getElementById('monthlyTrendsChart').getContext('2d');
new Chart(monthlyTrendsCtx, {
    type: 'radar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Accidents',
            data: [200, 180, 240, 220, 260, 300, 350, 310, 270, 230, 210, 190],
            backgroundColor: 'rgba(0, 255, 198, 0.3)',
            borderColor: '#00ffc6'
        }]
    }
});
