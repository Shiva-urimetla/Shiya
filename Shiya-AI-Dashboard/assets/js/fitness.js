document.addEventListener("DOMContentLoaded", () => {
    const fitnessList = document.getElementById("fitness-list");
    const addFitnessGoalBtn = document.getElementById("add-fitness-goal-btn");
    const newFitnessGoalInput = document.getElementById("new-fitness-goal");
  
    let fitnessGoals = [];
  
    const renderFitnessGoals = () => {
      fitnessList.innerHTML = "";
      fitnessGoals.forEach((goal, index) => {
        const fitnessItem = document.createElement("div");
        fitnessItem.innerHTML = `${index + 1}. ${goal} <button onclick="deleteFitnessGoal(${index})">Delete</button>`;
        fitnessList.appendChild(fitnessItem);
      });
    };
  
    const deleteFitnessGoal = (index) => {
      fitnessGoals.splice(index, 1);
      renderFitnessGoals();
    };
  
    addFitnessGoalBtn.addEventListener("click", () => {
      const goal = newFitnessGoalInput.value;
      if (goal) {
        fitnessGoals.push(goal);
        newFitnessGoalInput.value = "";
        renderFitnessGoals();
      }
    });
  
    window.deleteFitnessGoal = deleteFitnessGoal;
  });
  