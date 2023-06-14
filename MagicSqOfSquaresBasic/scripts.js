function updateSums() {
    const cells = Array.from(document.querySelectorAll('.cell'));
    const sums = document.getElementById('sums');
    let rowSums = [0, 0, 0];
    let colSums = [0, 0, 0];
    let diagSums = [0, 0];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let value = parseInt(cells[i * 3 + j].value, 10) || 0;
            rowSums[i] += value * value;
            colSums[j] += value * value;
            if (i === j) diagSums[0] += value * value;
            if (i + j === 2) diagSums[1] += value * value;

            // Update cell with superscript
            if (value) {
                cells[i * 3 + j].value = `${value}\u00B2`; // '\u00B2' is the superscript 2 character
            } else {
                cells[i * 3 + j].value = '';
            }
        }
    }

    sums.innerHTML = `Row sums of squares: ${rowSums.join(', ')}<br>Column sums of squares: ${colSums.join(', ')}<br>Diagonal sums of squares: ${diagSums.join(', ')}`;
}
