const ctx = document.getElementById('myChart').getContext('2d');

const data = {
    labels: [
        "Oscar Nissen", "Hans G. Jensen", "Christian Holtermann Knudsen", "Carl Jeppesen",
        "Christian Holtermann Knudsen", "Carl Jeppesen", "Christian Holtermann Knudsen",
        "Ludvig Meyer", "Christian Holtermann Knudsen", "Oscar Nissen", "Christopher Hornsrud",
        "Christian Holtermann Knudsen", "Kyrre Grepp", "Emil Stang d.y.", "Oscar Torp",
        "Einar Gerhardsen", "Trygve Bratteli", "Reiulf Steen", "Gro Harlem Brundtland",
        "Thorbjørn Jagland", "Jens Stoltenberg", "Jonas Gahr Støre"
    ],
    datasets: [{
        label: 'Alder ved start',
        data: [41, 38, 33, 36, 36, 39, 38, 38, 44, 57, 43, 55, 33, 37, 31, 48, 54, 42, 42, 42, 43, 54],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }, {
        label: 'Alder ved slutt',
        data: [42, 39, 34, 38, 37, 40, 41, 41, 47, 60, 48, 62, 37, 38, 53, 68, 64, 48, 53, 52, 55, 64],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
};

const myChart = new Chart(ctx, config);
