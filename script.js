// document.addEventListener("DOMContentLoaded", () => {
//     // Add animation for the profile picture
//     const profilePic = document.querySelector('.Profile_pic');
//     profilePic.style.transition = "transform 1s, opacity 1s";
//     profilePic.style.opacity = "1";
//     profilePic.style.transform = "scale(1)";

//     // Add animation for the profile text
//     const profileText = document.querySelector('.profile-text');
//     profileText.style.transition = "transform 1s, opacity 1s";
//     profileText.style.opacity = "1";
//     profileText.style.transform = "translateX(0)";

//     // Initial state for animation
//     setTimeout(() => {
//         profilePic.style.transform = "scale(1)";
//         profileText.style.transform = "translateX(0)";
//     }, 100);
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const blocks = document.querySelectorAll(".block");

//     blocks.forEach((block) => {
//         // Add click event listener to each block
//         block.addEventListener("click", (event) => {
//             event.preventDefault(); // Prevent default anchor behavior
//             const targetHref = block.getAttribute("href");
//             if (targetHref) {
//                 // Simulate navigation to the target page
//                 window.location.href = targetHref;
//             }
//         });

//         // Add mouseover animation
//         block.addEventListener("mouseover", () => {
//             block.style.transition = "transform 0.4s ease, background 0.4s ease";
//             block.style.transform = "scale(1.1) rotateY(15deg)";
//         });

//         // Reset animation on mouseout
//         block.addEventListener("mouseout", () => {
//             block.style.transform = "scale(1) rotateY(0deg)";
//         });
//     });
// });

