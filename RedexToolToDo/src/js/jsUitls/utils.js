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
  if (navLink == "/status/readytostart") {
    tabLabel = "Ready to Start";
  } else if (navLink == "/status/inprogress") {
    tabLabel = "In Progress";
  } else if (navLink == "/status/onhold") {
    tabLabel = "On Hold";
  } else if (navLink == "/status/completed") {
    tabLabel = "Completed";
  } else if (navLink == "/status/skipped") {
    tabLabel = "Skipped / Cancelled";
  } else {
    // console.log(navLink);
    tabLabel = "All";
  }
  return tabLabel;
};
