
const calculateBtn=document.querySelector('#loan-form');


loadEventListeners();
function loadEventListeners()
{calculateBtn.addEventListener('submit',loadingSign);
 
}


function loadingSign(e)
{const loading=document.querySelector('#loading');
const results=document.querySelector('#results');
results.style.display="none";
  loading.style.display='block';
  setTimeout(calculateLoan,2000);
  e.preventDefault();
}


function calculateLoan()
{ 
  const loanAmount=document.querySelector('#amount');
const rate=document.querySelector('#interest');
const year=document.querySelector('#years');
const loading=document.querySelector('#loading');
const results=document.querySelector('#results');
const monthlyPayment=document.querySelector('#monthly-payment');
const totalPayment=document.querySelector('#total-payment');
const totalInterest=document.querySelector('#total-interest');

loading.style.display='none';

if(loanAmount.value===""){
  showError('Add a loan amount');
}
else if(rate.value===""){
  showError('Enter Interest');
}
else if(year.value===""){
showError('Enter year of repayment' );
}
else
{loading.style.display="block";
const principal=parseFloat(loanAmount.value);
const calculatedInterest=parseFloat(rate.value) / 100 / 12;
const calculatedPayments=parseFloat(year.value)*12;

 const x=Math.pow(1+calculatedInterest,calculatedPayments);
  const fixedMonthly=(principal*x*calculatedInterest)/(x-1);
  loading.style.display="none";
  results.style.display="block";
  if(isFinite(fixedMonthly)){
   
    monthlyPayment.value=fixedMonthly.toFixed(2);
    totalPayment.value=(fixedMonthly*calculatedPayments).toFixed(2);
    totalInterest.value=((fixedMonthly*calculatedPayments)-principal).toFixed(2);
  }
  else{
    showError('Please check your numbers.')
  }
}

}



function showError(error){
const card=document.querySelector('.card');
const heading=document.querySelector('.heading');

  const errorDiv=document.createElement('div');
  errorDiv.className='alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));
  card.insertBefore(errorDiv,heading);
  setTimeout(clearError,3000);
}

function clearError()
{document.querySelector('.alert').remove();

}