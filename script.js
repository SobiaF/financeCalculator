function calculateFinance() {
    let borrow = document.querySelector('#borrow').value;
    let salary = document.querySelector('#salary').value;
    let payment = document.querySelector('#payment').value;
    let fee = calculateFee(borrow);
    borrow = parseInt(borrow);
    fee = parseInt(fee);
    debtFree(borrow + fee, salary, payment);
}

document.querySelector('#calculate').addEventListener("click", calculateFinance);

function debtFree(borrow, salary, payment) {
    let salaryTenPercent = (salary / 100 * payment);
    let numberOfMonths = 0;
    while (borrow >= 1) {
        borrow -= salaryTenPercent;
        numberOfMonths += 1;
    }
    document.querySelector('#result').innerHTML = numberOfMonths;
}

function calculateFee(borrow) {
    let fee = (5 / 100) * borrow;
    if (borrow < 8000) {
        fee += 500;
    } else if (borrow > 9000) {
        fee += 1000;
    }
    return fee;
}
