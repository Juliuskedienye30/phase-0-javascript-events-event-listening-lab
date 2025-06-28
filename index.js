function addingEventListener() {
  const input = document.getElementById('button');
  input.addEventListener('click', function () {
    alert('I was clicked!');
  });
}

// Export if running in Node environment (e.g., for testing)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { addingEventListener };
}
