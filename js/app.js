window.addEventListener('DOMContentLoaded', function(){
    'use strict';
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

});