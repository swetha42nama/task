function toggleBox(id) {
    // Close all boxes
    document.querySelectorAll('.box-content').forEach((box) => {
      box.style.display = 'none';
    });
  
    // Open the clicked box
    const box = document.getElementById(`box${id}`);
    box.style.display = box.style.display === 'block' ? 'none' : 'block';
  }
  

