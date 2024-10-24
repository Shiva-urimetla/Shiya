document.addEventListener("DOMContentLoaded", () => {
    const learningList = document.getElementById("learning-list");
    const addLearningBtn = document.getElementById("add-learning-btn");
    const newLearningInput = document.getElementById("new-learning");
  
    let learningGoals = [];
  
    const renderLearningGoals = () => {
      learningList.innerHTML = "";
      learningGoals.forEach((goal, index) => {
        const learningItem = document.createElement("div");
        learningItem.innerHTML = `${index + 1}. ${goal} <button onclick="deleteLearningGoal(${index})">Delete</button>`;
        learningList.appendChild(learningItem);
      });
    };
  
    const deleteLearningGoal = (index) => {
      learningGoals.splice(index, 1);
      renderLearningGoals();
    };
  
    addLearningBtn.addEventListener("click", () => {
      const goal = newLearningInput.value;
      if (goal) {
        learningGoals.push(goal);
        newLearningInput.value = "";
        renderLearningGoals();
      }
    });
  
    window.deleteLearningGoal = deleteLearningGoal;
  });
  