
let value = null
do {
    value = +prompt('nhap so tu 1 den 10');
} while (value < 1 || value >10);
document.write('so ban vua nhap la =' + value);