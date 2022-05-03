//Clock 
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() 
{
	const now = new Date();

	const getSecond = now.getSeconds();
	const getMinute = now.getMinutes();
	const getHour = now.getHours();


	const secondDegree = (getSecond/60)*360;
	const minuteDegree = (getMinute/60)*360;
	const hourDegree = (getHour/12)*360;
	
	
	second.style.transform = `rotate(${secondDegree}deg)`;
	minute.style.transform = `rotate(${minuteDegree}deg)`;
	hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);

//Dropfield

let dropArea = document.getElementById('drop-area')

	dropArea.addEventListener('dragenter', handlerFunction, false);
	dropArea.addEventListener('dragleave', handlerFunction, false);
	dropArea.addEventListener('dragover', handlerFunction, false);
	dropArea.addEventListener('drop', handlerFunction, false);

	['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => 
		{
			dropArea.addEventListener(eventName, preventDefaults, false)
		})
	  
	function preventDefaults (e) 
		{
			e.preventDefault()
			e.stopPropagation()
		};

	['dragenter', 'dragover'].forEach(eventName => 
		{
			dropArea.addEventListener(eventName, highlight, false)
		});
		  
	['dragleave', 'drop'].forEach(eventName => 
		{
			dropArea.addEventListener(eventName, unhighlight, false)
		});
		  
	function highlight(e) 
	{
		dropArea.classList.add('highlight')
	};
		  
	function unhighlight(e) 
	{
		dropArea.classList.remove('highlight')
	};

	dropArea.addEventListener('drop', handleDrop, false)

	function handleDrop(e) 
	{
		let dt = e.dataTransfer
		let files = dt.files

  		handleFiles(files)
	}
	  




/*
(function()
{
	const dropZone = document.getElementById("drop-zone");

	const upload = function (files)
	{
		const formData = new FormData();
	}

	dropZone.ondrop = function(e)
	{
		e.preventDefault();
		this.className = 'drop-zone';
	};

	dropZone.ondragover = function()
	{
		this.className = 'drop-zone dragover';
		return false;
	};

	dropZone.ondragleave = function()
	{
		this.className = 'drop-zone';
		return false;
	};
}());
*/
