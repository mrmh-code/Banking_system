function GetValue(num){
    const InputAmount=document.getElementById(num);
    const InputAmountText=InputAmount.value;
    const AmountValue=parseFloat(InputAmountText);
    InputAmount.value='';
    return AmountValue;
}

function updateTotalField(inputID,DepositAmount){
    const PreviousInput=document.getElementById(inputID)
    const PreviousInputText=PreviousInput.innerText;
    const PreviousAmount=parseFloat(PreviousInputText);
  
    //input & previous sum
    const totalDeposit=DepositAmount+PreviousAmount

    //set new deposit
    PreviousInput.innerText=totalDeposit;
}



function updateBalance(balanceID,DepositAmount,isAdd){
    const BalanceInput=document.getElementById(balanceID)
    const BalanceText=BalanceInput.innerText;
    const newBalanceTotal=parseInt(BalanceText);
    
    //total


     if(isAdd==true){
        BalanceInput.innerText=newBalanceTotal+DepositAmount;

     }else{
    BalanceInput.innerText=newBalanceTotal-DepositAmount;

     }
}


document.getElementById('deposit-btn').addEventListener('click', function(){
    //deposit input element 
    //  const depositInput=document.getElementById('deposit-info');
    //  const depositAmountText=depositInput.value;
    //  const newDepositAmount=parseFloat(depositAmountText);
    
    const DepositAmount=GetValue('deposit-info');

    //deposit previous
    // const PreviousDepositInput=document.getElementById('deposit-total')
    // const PreviousDepositText=PreviousDepositInput.innerText;
    // const PreviousDeposit=parseFloat(PreviousDepositText);
  
    // //input & previous sum
    // const totalDeposit=DepositAmount+PreviousDeposit

    // //set new deposit
    // PreviousDepositInput.innerText=totalDeposit;

        updateTotalField('deposit-total',DepositAmount);

    //Balance 

    // const BalanceInput=document.getElementById('Balance-total')
    // const BalanceText=BalanceInput.innerText;
    // const newBalanceTotal=parseInt(BalanceText);
    
    // //total
    // const TotalBalance=newBalanceTotal+DepositAmount;
    // BalanceInput.innerText=TotalBalance;
    //  depositInput.value='';

    updateBalance('Balance-total',DepositAmount,true)


})



document.getElementById('withdraw-btn').addEventListener('click',function(){
    // const withdrawInput=document.getElementById('withdraw-info');
 
    // const withdrawInputText=withdrawInput.value;
    // const ConvertInputValue=parseFloat(withdrawInputText);

    const ConvertInputValue=GetValue('withdraw-info')
    
    // const previousWithdraw=document.getElementById('withdraw-total');
    // const previousWithdrawText=previousWithdraw.innerText;
    // const ConvertWithdrawValue=parseFloat(previousWithdrawText);
      
    //total withdraw
    // const TotalWithDraw=ConvertInputValue+ConvertWithdrawValue;
    // previousWithdraw.innerText=TotalWithDraw;
        updateTotalField('withdraw-total',ConvertInputValue);

    // const BalanceInput=document.getElementById('Balance-total')
    // const BalanceText=BalanceInput.innerText;
    // const newBalanceTotal=parseInt(BalanceText);
    
    // //total
    // const TotalBalance=newBalanceTotal-ConvertInputValue;
    // BalanceInput.innerText=TotalBalance;

    // withdrawInput.value='';

    updateBalance('Balance-total',ConvertInputValue,false);

})