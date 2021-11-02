let width = +prompt('Please enter width of polygon','5');
let length = +prompt('Please enter length of polygon','6');

function polygon(width,length) {
    if (isNaN(width && length)) {
        return 'We need numbers dude';
    }
    if (width === length) {
        const area = 'Area of square' + ' ' + width ** 2;
        return area;
    }
    else {
        const perimeter = 'Perimeter og rectangle'+ ' ' + (width + length) * 2;
        return perimeter;
    }
}

alert(polygon(width,length));

