// Data for the charts
const chartsData = [
    {
      id: 'chart1',
      type: 'bar',
      data: {
        labels: ['2020', '2021', '2022', '2023'],
        datasets: [{
          label: 'Systems Hacked',
          data: [100, 250, 400, 600],
          backgroundColor: 'rgba(0, 255, 0, 0.7)',
          borderColor: 'rgba(0, 255, 0, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true, ticks: { color: '#00FF00' } },
          x: { ticks: { color: '#00FF00' } }
        },
        plugins: {
          legend: { labels: { color: '#00FF00' } }
        }
      }
    },
    {
      id: 'chart2',
      type: 'line',
      data: {
        labels: ['2020', '2021', '2022', '2023'],
        datasets: [{
          label: 'Data Loss (GB)',
          data: [10, 50, 150, 300],
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          fill: false,
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true, ticks: { color: '#00FF00' } },
          x: { ticks: { color: '#00FF00' } }
        },
        plugins: {
          legend: { labels: { color: '#00FF00' } }
        }
      }
    },
    {
      id: 'chart3',
      type: 'pie',
      data: {
        labels: ['Malware', 'Keyloggers', 'Phishing'],
        datasets: [{
          label: 'Attack Distribution',
          data: [40, 30, 30],
          backgroundColor: ['#f39c12', '#e74c3c', '#8e44ad'],
          borderColor: '#0d0d0d',
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: { labels: { color: '#00FF00' } }
        }
      }
    },
    {
      id: 'chart4',
      type: 'doughnut',
      data: {
        labels: ['Small Enterprises', 'Medium Enterprises', 'Corporates'],
        datasets: [{
          label: 'Victim Types',
          data: [20, 50, 30],
          backgroundColor: ['#1abc9c', '#3498db', '#e67e22'],
          borderColor: '#0d0d0d',
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: { labels: { color: '#00FF00' } }
        }
      }
    },
    {
      id: 'chart5',
      type: 'radar',
      data: {
        labels: ['Speed', 'Stealth', 'Ease of Use', 'Effectiveness'],
        datasets: [{
          label: 'Rubber Ducky Features',
          data: [80, 90, 75, 85],
          backgroundColor: 'rgba(155, 89, 182, 0.2)',
          borderColor: 'rgba(155, 89, 182, 1)',
          pointBackgroundColor: '#00FF00',
          pointBorderColor: '#0d0d0d',
          pointHoverBackgroundColor: '#0d0d0d',
          pointHoverBorderColor: '#00FF00'
        }]
      },
      options: {
        scales: {
          r: {
            angleLines: { color: '#00FF00' },
            grid: { color: '#00FF00' },
            pointLabels: { color: '#00FF00' }
          }
        },
        plugins: {
          legend: { labels: { color: '#00FF00' } }
        }
      }
    },
    {
      id: 'chart6',
      type: 'polarArea',
      data: {
        labels: ['Asia', 'Europe', 'America'],
        datasets: [{
          label: 'Global Impact',
          data: [40, 35, 25],
          backgroundColor: ['#2ecc71', '#e74c3c', '#3498db'],
          borderColor: '#0d0d0d',
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: { labels: { color: '#00FF00' } }
        }
      }
    }
  ];
  
  // Function to render charts
  function renderCharts() {
    chartsData.forEach(chart => {
      new Chart(document.getElementById(chart.id), {
        type: chart.type,
        data: chart.data,
        options: chart.options
      });
    });
  }
  
  // Handle contact form submission
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting normally
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent successfully.`);
      this.reset(); // Reset the form
    } else {
      alert("Please fill in all fields.");
    }
  });
  
  // Initialize charts on page load
  window.onload = renderCharts;



document.addEventListener("DOMContentLoaded", () => {
    // Initialize EmailJS
    emailjs.init("j5vu2qRA6sVjadX3w"); // Replace with your EmailJS Public Key

    // Attach event listener to the contact form
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Send email via EmailJS
        emailjs.send("your_service_id", "your_template_id", {
            name: name,
            email: email,
            message: message,
        })
        .then(() => {
            document.getElementById("responseMessage").textContent = "Your message has been sent successfully!";
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            document.getElementById("responseMessage").textContent = "There was an error sending your message. Please try again.";
        });
    });
});
  
