    function storeData(){
        PNAME=pename.value
        ACNO=acno.value
        PSWRD=pswrd.value
       
    
    person={
      personname:PNAME,
        Accno:ACNO,
        password:PSWRD,
        balance:1000
    }
    if(PNAME==" "||ACNO==""||PSWRD==""){
      alert("please fill the input")
    }
    if(ACNO in localStorage){
        alert('This account is already exist!')
       

    }
  else{

  
    localStorage.setItem(ACNO ,JSON.stringify(person))

  alert("registered Successfully")
  window.location='./login.html'


    }
    
    
}


function login(){
  Acno=acno.value
  password=pswrd.value
 
  if(Acno==" "||password==""){
    alert("please fill the input")
  }

  
 
  if (Acno in localStorage){
     acdetailes=JSON.parse(localStorage.getItem(Acno))
     
  
 
 
     if (password==acdetailes.password){
    
      
         alert('login succesfull')
         localStorage.setItem("welcome",acdetailes.personname)
         localStorage.setItem("balance",acdetailes.balance)
         window.location='./home.html'
        bl=localStorage.getItem("balance")
        balnce.innerHTML=`your balance is ${bl}`
         uname=localStorage.getItem("personname")
         
         welcomenote.innerHTML=`hello ${uname}`
     }
     else{
         alert("incorret account number or password")
     }
  }
  else{
     alert('invaild accno')
  }
 
 }
 var bala=localStorage.getItem("balance")
 balnce.innerHTML=`<h1 style="color:white; padding-top:50px;margin:10px  " >Savings <br>
 
 
 <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i> ${bala} </h1>`
 pname=localStorage.getItem("welcome")
 welcomenote.innerHTML=`Welcome ${pname}<i class="fa-solid fa-handshake ms-2"></i>
 `

function addsalary(){
  credit_type=c_type.value;
   credit_amount=parseFloat(amount.value);
   credit_date=date.value
   if(credit_type=="" || credit_amount==""||credit_date=="" ){
    alert('please fill input')
   }
   else{
    Balance=localStorage.getItem("balance");
    console.log(`Balance before:${Balance}`);
    Balance=parseFloat(Balance)+credit_amount;
    localStorage.setItem('balance',Balance)
    console.log(Balance);
    
    
   }
   result.innerHTML+=`<tr>
   <td style="  border:2px solid white ;color: white;text-align: center">${credit_type}</td>
   <td style="  border:2px solid white ;color: white;text-align: center">${credit_amount}</td>
   <td style="  border:2px solid white ;color: white;text-align: center">${Balance}</td>
   <td style="  border:2px solid white ;color: white;text-align: center">${  credit_date}</td>`
    
  
   balnce.innerHTML=`<h1 style="color:white; padding-top:20px";margin:10px> Savings <br> <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>${Balance} </h1>`
}




function debtamount(){
  Debt_type=debt_type.value
  Debt_amount= parseFloat(debt_amount.value)
  Debt_date=debt_date.value
  if(Debt_type==""  || Debt_amount=="" ||debt_date==""){
    alert("please fill the type and amount")
  }
  else{
    Balance=localStorage.getItem("balance");
    console.log(`Balance :${Balance}`);
    Balance=parseFloat(Balance)-Debt_amount;
    localStorage.setItem('balance',Balance)
    console.log(Balance);
    data=``
    if(Balance<1000){
      alert("please control your expense")
      data=`<h1 style="color:red; padding-top:20px;margin:10px" >Savings <br>  <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>${Balance} </h1>`
 
  
    }
    else{
    data=`<h1 style="color:white; padding-top:20px;margin:10px" >Savings <br>  <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>${Balance}  </h1>`

    }
  }
  balnce.innerHTML=data
  result2.innerHTML+=`<tr>
  <td style="  border:2px solid white ;color: white;text-align: center">${Debt_type}</td>
  <td style="  border:2px solid white ;color: white;text-align: center">${Debt_amount}</td>
  <td style="  border:2px solid white ;color: white;text-align: center">${Balance}</td>
  <td style="  border:2px solid white ;color: white;text-align: center">${ Debt_date}</td>`
}

function logout(){
  window.localStorage.clear()
  window.location="./login.html"
}