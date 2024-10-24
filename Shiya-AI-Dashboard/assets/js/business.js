document.addEventListener("DOMContentLoaded", () => {
  const businessInput = document.getElementById("business-input");
  const addPlanBtn = document.getElementById("add-plan-btn");
  const businessList = document.getElementById("business-list");

  // Load stored business plans from local storage
  const storedPlans = JSON.parse(localStorage.getItem("businessPlans")) || [];
  storedPlans.forEach(plan => {
    addBusinessToDOM(plan);
  });

  // Add new business plan
  addPlanBtn.addEventListener("click", () => {
    const businessIdea = businessInput.value.trim();

    // Validate input
    if (businessIdea === "") {
      alert("Please enter a valid business idea!");
      return;
    }

    // Add to DOM and store in localStorage
    addBusinessToDOM(businessIdea);
    storedPlans.push(businessIdea);
    localStorage.setItem("businessPlans", JSON.stringify(storedPlans));
    businessInput.value = "";
  });

  // Function to display the business idea in the DOM
  function addBusinessToDOM(plan) {
    const li = document.createElement("li");
    li.textContent = plan;
    businessList.appendChild(li);
  }
});
