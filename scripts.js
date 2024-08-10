

function calculateInterest (){
    const principal = parseFloat(document.getElementById("Principal").value);
    const contribution = parseFloat(document.getElementById("Contribution").value);
    

    const rate = parseFloat(document.querySelector("#rate").value) /100;
    const year = parseInt(document.querySelector("#years").value);

    if(isNaN(principal) || isNaN(contribution) || isNaN(rate) || isNaN(year)) {
        alert("please enter valid number in all fields");
        return;
    }

    const months = year * 12;
    const monthlyRate = rate / 12;
    let futureValue = principal * Math.pow(1 + monthlyRate, months);

    let totalInvested = principal;
  for (let i = 1; i <= months; i++) {
    futureValue += contribution * Math.pow(1 + monthlyRate, months - i);
    totalInvested += contribution;
  }

  const interest = futureValue - totalInvested;

  document.getElementById("result").innerHTML = `
        Total Amount: ₹${futureValue.toFixed(2)}<br>
        Total Invested: ₹${totalInvested.toFixed(2)}<br>
        Compound Interest Earned: ₹${interest.toFixed(2)}`;

    

     
}

const btn  = document.querySelector("#btn");
btn.addEventListener("click",calculateInterest);