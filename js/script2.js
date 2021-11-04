let lightColor = prompt('Please put light color of traffic lights', 'green');

function trafficLights(lightColor) {
    if (lightColor >= 0 || lightColor < 0) {
        return 'We need a light of traffic lights';
    }
    switch (lightColor.toLowerCase()) {
        case 'green':
            return 'yellow';
        case 'yellow':
            return 'red';
        case 'red':
            return 'green';
        default:
            return 'It`s wrong value -' + ' ' + lightColor;
    }
}

alert(trafficLights(lightColor));