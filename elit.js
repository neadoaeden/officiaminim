/**
 * Function to get user-space coordinates from screen coordinates
 * @param {HTMLCanvasElement} canvas - The canvas element
 * @param {MouseEvent} event - The mouse event containing screen coordinates
 * @returns {{x: number, y: number}} - The user-space coordinates
 */
function getUserSpaceCoordinates(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;    // relationship bitmap vs. element for x
    const scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for y

    const userX = (event.clientX - rect.left) * scaleX;
    const userY = (event.clientY - rect.top) * scaleY;

    return { x: userX, y: userY };
}

// Example usage:
const canvas = document.querySelector('canvas');
canvas.addEventListener('click', (event) => {
    const coords = getUserSpaceCoordinates(canvas, event);
    console.log(`User-space coordinates: x=${coords.x}, y=${coords.y}`);
});
