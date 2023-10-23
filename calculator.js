function appendInput(number) {
			inputElement = document.getElementById("txtbox-1");
			inputElement.value += number;
		}

		function calculateResult() {
			var inputElement = document.getElementById("txtbox-1");
			var expression = inputElement.value;
			var result = eval(expression);
			inputElement.value = result;
		}

		function clearInput() {
			var inputElement = document.getElementById("txtbox-1");
			inputElement.value = '';
		}
