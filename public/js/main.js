document.addEventListener('DOMContentLoaded', function() {
  // Initialize the framework dropdown based on the current language selection
  const languageSelect = document.getElementById('language');
  if (languageSelect) {
    updateFrameworks();
  }

  // Add syntax highlighting to code blocks
  const codeBlocks = document.querySelectorAll('pre code');
  codeBlocks.forEach(block => {
    // Remove triple backticks if present
    block.textContent = block.textContent.replace(/^```[\w]*\n|```$/g, '');
  });
});