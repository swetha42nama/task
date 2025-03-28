function toggleBox(id) {
    // Close all boxes
    document.querySelectorAll('.box-content').forEach((box) => {
      box.style.display = 'none';
    });
  
    // Open the clicked box
    const box = document.getElementById(`box${id}`);
    box.style.display = box.style.display === 'block' ? 'none' : 'block';
  }
  

// function expandBox(selected) {
//   const boxes = document.querySelectorAll('.box');
//   const contents = document.querySelectorAll('.content');

//   boxes.forEach((box, index) => {
//     box.classList.remove('active');
//     contents[index].style.display = 'none';
//   });

//   const selectedBox = document.getElementById(`box-${selected}`);
//   const selectedContent = document.getElementById(`content-${selected}`);

//   if (selectedBox) {
//     selectedBox.checked = true;
//     boxes[selected - 1].classList.add('active');
//     if (selectedContent) {
//       selectedContent.style.display = 'block';
//     }
//   }
// }
