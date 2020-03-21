window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    // user input variables 
    let requiredExpenses = document.querySelectorAll(".requiered-expense"),
        requiredExpenseDiv = document.querySelector(".req-expense"),
        addExpenseBtn = document.querySelector("#req-exp-add"),
        deleteExpenseBtn = document.querySelector('#req-exp-delete');
    //button events
    addExpenseBtn.addEventListener('click', function(){
        let parent = document.querySelector('#requiered-expenses');
        let clone = requiredExpenseDiv.cloneNode(true);
        parent.appendChild(clone);
        clone.classList.remove('hide');

    });

    deleteExpenseBtn.addEventListener('click', function(){
        let requiredExpenseDivs = document.querySelectorAll(".req-expense");
        if(requiredExpenseDivs.length>0){
            var element = document.querySelector('.req-expense');
            element.parentNode.removeChild(element);
        } else{
            alert("Nothing to remove");
        }
    });

});