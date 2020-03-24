window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    //some global variables
    let red = '#c23616';
    let green = '#4cd137';
    // user requiered expenses variables 
    let requiredExpenses = document.querySelectorAll(".requiered-expense"),
        requiredExpenseDiv = document.querySelector(".req-expense"),
        addReqExpenseBtn = document.querySelector("#req-exp-add"),
        deleteReqExpenseBtn = document.querySelector('#req-exp-delete');

    addReqExpenseBtn.addEventListener('click', function(){
        addBlock('#requiered-expenses', requiredExpenseDiv);
    });

    deleteReqExpenseBtn.addEventListener('click', function(){
        deleteBlock('#requiered-expenses', '.req-expense');
    });

    //user optional expenses variables

    let addOptExpenseBtn = document.querySelector('#opt-exp-add'),
        delOptExpenseBtn = document.querySelector('#opt-exp-del'),
        optExpenseDiv = document.querySelector('.opt-expense');
    
    addOptExpenseBtn.addEventListener('click', function(){
        addBlock('#optional-expenses', optExpenseDiv);
    });

    delOptExpenseBtn.addEventListener('click', function(){
        deleteBlock('#optional-expenses', '.opt-expense');
    });

    //user profit variables

    let addProfitBtn = document.querySelector('#profit-add'),
        delProfitBtn = document.querySelector('#profit-del'),
        incomeDiv = document.querySelector('.income');
    
    addProfitBtn.addEventListener('click', function(){
        addBlock('#profits', incomeDiv);
    });

    delProfitBtn.addEventListener('click', function(){
        deleteBlock('#profits', '.income');
    });

    // checkbox and savings inputs
    let checkbox = document.querySelector('#checkbox-savings'),
        savingsDiv = document.querySelector('#savings');
    checkbox.addEventListener('click', function(){
        if(checkbox.checked == true){
            savingsDiv.style.display = 'flex';
            document.querySelector('#save').value = '';
        } else{
            savingsDiv.style.display = 'none';
        }
    });

    //start button 
    let startBtn = document.querySelector('#start');
    startBtn.addEventListener('click', function(){
        let income_total = countValue('.profit_value');
        console.log("Income total : ", + income_total);
        let required_exp_total = countValue('.requiered-expense-value');
        console.log("Requiered expenses total : ", + required_exp_total);
        let optional_exp_total = countValue('.optional-expense-value');
        console.log("Optional expenses total : ", + optional_exp_total);
        let cash_to_save = document.querySelector('#save');
        if(cash_to_save.value == '' || isNaN(cash_to_save.value)){
            cash_to_save.value = 0;
        } 
        if(checkbox.checked == false){
            cash_to_save.value = 0;
        } 
        console.log("Cash to save:", + cash_to_save.value);
        let incomeDivFinal = document.querySelector('.budget.value');
        let cash_to_use = income_total - cash_to_save.value;
        if (cash_to_use <= 0){
            incomeDivFinal.style.color = red;
            incomeDivFinal.innerHTML = cash_to_use + '$ You cant save cash this month';
        } else{
            incomeDivFinal.style.color = green;
            incomeDivFinal.innerHTML = cash_to_use + '$ (Saved money: ' + cash_to_save.value + '$)';
        }
        
        let req_exp_final = document.querySelector('.requiered.value');
        req_exp_final.innerHTML = '$' + required_exp_total;
        let opt_exp_final = document.querySelector('.optional.value');
        opt_exp_final.innerHTML = '$' + optional_exp_total;
        let sum_exp_final = document.querySelector('.total-expenses-value');
        let expenses_total = optional_exp_total + required_exp_total;
        console.log(sum_exp_final);
        if(expenses_total > cash_to_use){
            incomeDivFinal.style.color = red;
            incomeDivFinal.innerHTML = " $" + parseFloat(cash_to_use - expenses_total) + " You are not able to spend";
            sum_exp_final.style.color = red;
            sum_exp_final.innerHTML = ' $' + expenses_total;
        } else{
            sum_exp_final.innerHTML = ' $' + expenses_total;
            sum_exp_final.style.color = green;
        }
    });

    function addBlock(parent_div, clone_div){
        let parent = document.querySelector(parent_div);
        let clone = clone_div.cloneNode(true);
        parent.appendChild(clone);
        clone.classList.remove('hide');
    }

    function deleteBlock(parent_element, child_elements){
        let parent = document.querySelector(parent_element);
        let children = document.querySelectorAll(child_elements);
        if(children.length>0){
            parent.removeChild(parent.lastChild);
        } else{
            alert("Nothing to delete");
        }
    }

    function countValue(input_values){
        let elements = document.querySelectorAll(input_values);
        let total = 0;
        for(var i = 0; i<elements.length; i++){
            if(elements[i].value == '' || isNaN(elements[i].value) || parseFloat(elements[i].value) < 0){
                elements[i].value = 0;
            }
            total = total + parseFloat(elements[i].value);
            elements[i].value = '';
        }
        return total;
    }

});