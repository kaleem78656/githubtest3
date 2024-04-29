function calculateAge() {
    var today = new Date();
    var inputDay = document.getElementById('day').value;
    var inputMonth = document.getElementById('month').value;
    var inputYear = document.getElementById('year').value;
    
    var birthDate = new Date(inputYear, inputMonth - 1, inputDay);
    
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    var yearDiff = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    var dayDiff = today.getDate() - birthDate.getDate();

    if (dayDiff < 0) {
        var daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        dayDiff += daysInLastMonth;
        monthDiff--;
    }
    if (monthDiff < 0) {
        monthDiff += 12;
        yearDiff--;
    }
    
    document.getElementById('result').innerText = "Alderen din er: " + yearDiff + " År, " + monthDiff + " Måneder, og " + dayDiff + " Dager.";
}


