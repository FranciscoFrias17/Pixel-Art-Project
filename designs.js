// When size is submitted by the user, call makeGrid()

const myForm = document.getElementById('sizePicker');
const canvas = document.getElementById('pixelCanvas');

myForm.addEventListener('submit', function(evt) {
	evt.preventDefault();

	//value for grid height

	const height = document.getElementById('inputHeight').value;

	//value for grid width

	const width = document.getElementById('inputWidth').value;

	makeGrid(height, width);
})

function makeGrid(h, w) {
	//Remove previous tables

	canvas.innerHTML = "";

	//Creates a grid of squares
    //Parameter for width - number of squares representing width of the grid
    //Parameter for height - number of squares representing height of the grid
	for (let i = 0; i < h; i++) {
		const canvasRow = canvas.insertRow(i);

		for (let j = 0; j < w; j++) {
			const canvasColumn = canvasRow.insertCell(j);
		}
	}
}
    //Click event to fill in table cells
canvas.addEventListener('click', function(evt) {
	evt.target.style.backgroundColor = document.getElementById('colorPicker').value;
})