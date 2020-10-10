module.exports = function toReadable(number) {
    let arr = String(number).split('');
    let units = '';
    let decades = '';
    let twoDecades = '';
    let hundreds = '';
    if (arr.length === 1 || (arr[arr.length - 2] !== '1' && arr.length >= 2)) {
        switch (arr[arr.length - 1]) {
            case '0':
                units = 'zero';
                break;
            case '1':
                units = 'one';
                break;
            case '2':
                units = 'two';
                break;
            case '3':
                units = 'three';
                break;
            case '4':
                units = 'four';
                break;
            case '5':
                units = 'five';
                break;
            case '6':
                units = 'six';
                break;
            case '7':
                units = 'seven';
                break;
            case '8':
                units = 'eight';
                break;
            case '9':
                units = 'nine';
                break;
            default:
                break;
        }
    }

    if ((arr[arr.length - 1] === '0' && arr.length >= 2) || (arr.length >= 2 && arr[arr.length - 2] !== '1')) {
        if (arr[arr.length - 1] === '0') units ='';
        switch (arr[arr.length - 2]) {
            case '1':
                decades = 'ten ';
                break;
            case '2':
                decades = 'twenty ';
                break;
            case '3':
                decades = 'thirty ';
                break;
            case '4':
                decades = 'forty ';
                break;
            case '5':
                decades = 'fifty ';
                break;
            case '6':
                decades = 'sixty ';
                break;
            case '7':
                decades = 'seventy ';
                break;
            case '8':
                decades = 'eighty ';
                break;
            case '9':
                decades = 'ninety ';
                break;
            default:
                break;
        }
    }

    if (arr[arr.length - 2] === '1' && arr.length >= 2 && arr[arr.length - 1] !== '0') {
        switch (arr[arr.length - 1]) {
            case '1':
                twoDecades = 'eleven ';
                break;
            case '2':
                twoDecades = 'twelve ';
                break;
            case '3':
                twoDecades = 'thirteen ';
                break;
            case '4':
                twoDecades = 'fourteen ';
                break;
            case '5':
                twoDecades = 'fifteen ';
                break;
            case '6':
                twoDecades = 'sixteen ';
                break;
            case '7':
                twoDecades = 'seventeen ';
                break;
            case '8':
                twoDecades = 'eighteen ';
                break;
            case '9':
                twoDecades = 'nineteen ';
                break;
            default:
                break;
        }
    }

    if (arr.length === 3 ) {
        switch (arr[0]) {
            case '1':
                hundreds = 'one hundred ';
                break;
            case '2':
                hundreds = 'two hundred ';
                break;
            case '3':
                hundreds = 'three hundred ';
                break;
            case '4':
                hundreds = 'four hundred ';
                break;
            case '5':
                hundreds = 'five hundred ';
                break;
            case '6':
                hundreds = 'six hundred ';
                break;
            case '7':
                hundreds = 'seven hundred ';
                break;
            case '8':
                hundreds = 'eight hundred ';
                break;
            case '9':
                hundreds = 'nine hundred ';
                break;
            default:
                break;
        }
    }

    return (hundreds + twoDecades + decades + units).trim();
}
