function updateOccupation() {
  const occupation = document.getElementById("occupation").value;
  document.getElementById("selectedOccupation").textContent = occupation;
}

function calculateRisk() {
  const likelihood = parseInt(document.getElementById("likelihood").value);
  const severity = parseInt(document.getElementById("severity").value);
  const rating = likelihood * severity;

  let remark = "", detail = "", color = "";

  if (rating <= 5) {
    remark = "Low Risk";
    detail = "Routine monitoring is sufficient. No immediate action required.";
    color = "green";
  } else if (rating <= 10) {
    remark = "Medium Risk";
    detail = "Review required. Implement moderate control measures.";
    color = "orange";
  } else if (rating <= 15) {
    remark = "High Risk";
    detail = "Action needed urgently. Strong control measures must be enforced.";
    color = "orangered";
  } else {
    remark = "Very High Risk";
    detail = "Stop activity immediately. Implement controls and reassess risk.";
    color = "red";
  }

  document.getElementById("riskRating").textContent = rating;
  document.getElementById("riskRemark").textContent = remark;
  document.getElementById("riskDetail").textContent = detail;

  const lamp = document.getElementById("riskLamp");
  lamp.style.backgroundColor = color;
}
