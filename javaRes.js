document.addEventListener("DOMContentLoaded", function() {
  var homeLink = document.getElementById("navHome");
  var projectsLink = document.getElementById("navProjects");

  homeLink.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = "index.html";
  });

  projectsLink.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = "Projects.html";
  });
});

function scrollToProjects() {
  const projectsSection = document.getElementById('projects-section');
  if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
}
