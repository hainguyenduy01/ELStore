// Đối tượng Validator
function Validator(options) {
	// Hàm thực hiện validate
	function validate(inputElement, rule) {
		var errorMessage = rule.test(inputElement.value);
		var errorElement = inputElement.parentElement.querySelector(
			options.errorSelector,
		);
		if (errorMessage) {
			errorElement.innerText = errorMessage;
			inputElement.parentElement.classList.add('invalid');
		} else {
			errorElement.innerText = '';
			inputElement.parentElement.classList.remove('invalid');
		}
	}
	// Lấy element của form cần validate
	var formElement = document.querySelector(options.form);
	if (formElement) {
		options.rules.forEach(function (rule) {
			var inputElement = formElement.querySelector(rule.selector);

			if (inputElement) {
				// Xử lý trường hợp blur khỏi input
				inputElement.onblur = function () {
					validate(inputElement, rule);
				};
				// Xử lý khi người dùng nhập vào input
				inputElement.oninput = function () {
					var errorElement =
						inputElement.parentElement.querySelector('.form-message');
					errorElement.innerText = '';
					inputElement.parentElement.classList.remove('invalid');
				};
			}
		});
	}
}
// Định nghĩa rules
// Nguyên tắc của rules:
// 1.khi có lỗi trả ra mess lỗi
// 2.khi hợp lệ không trả gì
Validator.isRequired = function (selector) {
	return {
		selector: selector,
		test: function (value) {
			return value.trim() ? undefined : 'Vui lòng nhập trường này';
		},
	};
};
Validator.isEmail = function (selector) {
	return {
		selector: selector,
		test: function (value) {
			var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			return regex.test(value) ? undefined : 'Trường này phải là Email';
		},
	};
};

Validator.minLength = function (selector, min) {
	return {
		selector: selector,
		test: function (value) {
			return value.length >= min
				? undefined
				: 'Vui lòng nhập tối thiểu 6 kí tự';
		},
	};
};