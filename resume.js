document.getElementById('btn-resume').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'Resume.pdf'; // Assuming Resume.pdf is in the root folder
  link.download = 'Resume.pdf'; // Optional: Rename file on download
  link.click();
});

document.getElementById('btn-resume-sidebar').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'Resume.pdf'; // Assuming Resume.pdf is in the root folder
  link.download = 'Resume.pdf'; // Optional: Rename file on download
  link.click();
});