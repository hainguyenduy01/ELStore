// Tạo biến lưu giá trị của nút side bar
const sideNav = document.getElementById('side-nav');
const arrow = document.getElementById('arrow');
// Tạo hàm ẩn hiện menu side bar thông qua sự kiện click
arrow.addEventListener('click', () => {
	const categoryShow = sideNav.getAttribute('data-category');
	if (categoryShow === 'false') {
		sideNav.setAttribute('data-category', true);
		arrow.setAttribute('data-category', true);
	} else {
		sideNav.setAttribute('data-category', false);
		arrow.setAttribute('data-category', false);
	}
});
