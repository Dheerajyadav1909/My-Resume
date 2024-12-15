/* General body styling */
body {
    background-color: #121212;
    font-family: 'Courier New', Courier, monospace;
    color: #33FF00; /* Neon green color for text */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Container for centering content */
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Header section */
header {
    background-color: #1e1e1e;
    padding: 40px 0;
    text-align: center;
    color: #33FF00;
    box-shadow: 0 2px 10px rgba(0, 255, 0, 0.6);
}

/* Hero section */
#hero {
    text-align: center;
    margin: 20px 0;
}

#hero img {
    width: 200px;
    height: auto;
    margin: 0 10px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
}

/* About section */
#about {
    background-color: #1c1c1c;
    padding: 30px;
    margin-bottom: 30px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.7);
}

#about h2 {
    color: #33FF00;
    font-size: 28px;
    margin-bottom: 20px;
}

#about p {
    color: #fff;
    font-size: 16px;
}

/* Visualization section */
#visualization {
    background-color: #1c1c1c;
    padding: 30px;
    margin-bottom: 30px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.7);
}

#visualization h2 {
    color: #33FF00;
    font-size: 28px;
    margin-bottom: 20px;
}

.charts {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

canvas {
    margin: 10px 0;
}

/* Rubber Ducky section */
#rubber-ducky {
    padding: 30px;
    background-color: #121212;
    color: #fff;
    border-radius: 10px;
    margin-bottom: 30px;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
}

#rubber-ducky h2 {
    color: #33FF00;
    font-size: 28px;
    margin-bottom: 20px;
}

/* Features section */
#features {
    background-color: #1c1c1c;
    padding: 30px;
    margin-bottom: 30px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.7);
}

#features h2 {
    color: #33FF00;
    font-size: 28px;
    margin-bottom: 20px;
}

#features ul {
    list-style: none;
    color: #fff;
    padding-left: 20px;
}

#features ul li {
    font-size: 16px;
}

/* Benefits section */
#benefits {
    background-color: #1c1c1c;
    padding: 30px;
    margin-bottom: 30px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.7);
}

#benefits h2 {
    color: #33FF00;
    font-size: 28px;
    margin-bottom: 20px;
}

#benefits p, #benefits ul {
    color: #fff;
    font-size: 16px;
}

/* Contact section */
#contact-us {
    text-align: center;
    margin-top: 30px;
}

#contact-us button {
    background-color: #33FF00;
    border: none;
    color: black;
    padding: 15px 30px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
    transition: background-color 0.3s ease;
}

#contact-us button:hover {
    background-color: #FF00FF;
    box-shadow: 0 0 15px rgba(255, 0, 255, 1);
}

/* Footer section */
footer {
    background-color: #1e1e1e;
    padding: 20px;
    text-align: center;
    color: #33FF00;
    box-shadow: 0 -2px 10px rgba(0, 255, 0, 0.6);
}

footer p {
    font-size: 14px;
}

/* Add media queries for responsiveness */
@media (max-width: 768px) {
    #hero img {
        width: 150px;
    }

    .charts {
        flex-direction: column;
    }

    canvas {
        width: 100%;
        height: 250px;
    }
}
