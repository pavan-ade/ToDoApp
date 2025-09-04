export const handleTheme = (toggleTheme) => {
  // console.log(toggleTheme);
  const body = window.document.body;
  if (toggleTheme !== "dark") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
};

export const handletabLabel = (navLink) => {
  let tabLabel = null;
  if (navLink == "/readytostart") {
    tabLabel = "Ready to Start";
  } else if (navLink == "/inprogress") {
    tabLabel = "In Progress";
  } else if (navLink == "/onhold") {
    tabLabel = "On Hold";
  } else if (navLink == "/completed") {
    tabLabel = "Completed";
  } else if (navLink == "/skipped/cancelled") {
    tabLabel = "Skipped / Cancelled";
  } else {
    // console.log(navLink);
    tabLabel = "All";
  }
  return tabLabel;
};
