document.addEventListener("DOMContentLoaded", () => {
    const financeList = document.getElementById("finance-list");
    const addFinanceBtn = document.getElementById("add-finance-btn");
    const newFinanceInput = document.getElementById("new-finance");
  
    let finances = [];
  
    const renderFinances = () => {
      financeList.innerHTML = "";
      finances.forEach((finance, index) => {
        const financeItem = document.createElement("div");
        financeItem.innerHTML = `${index + 1}. ${finance} <button onclick="deleteFinance(${index})">Delete</button>`;
        financeList.appendChild(financeItem);
      });
    };
  
    const deleteFinance = (index) => {
      finances.splice(index, 1);
      renderFinances();
    };
  
    addFinanceBtn.addEventListener("click", () => {
      const finance = newFinanceInput.value;
      if (finance) {
        finances.push(finance);
        newFinanceInput.value = "";
        renderFinances();
      }
    });
  
    window.deleteFinance = deleteFinance;
  });
  