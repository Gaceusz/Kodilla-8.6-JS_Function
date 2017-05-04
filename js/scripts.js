var	triangle1Area = getTriangleArea(10, 6);
	triangle2Area = getTriangleArea(10, -6);
	triangle3Area = getTriangleArea(10, 15);
function getTriangleArea(a, h) {
	if ( (a > 0) && (h > 0) ) {
		return a * h / 2;
	} else {
		return 'Nieprawidłowe dane';
	}
}
console.log('Pole pierwszego trójkąta wynosi: ' + triangle1Area);
console.log('Pole drugiego trójkąta wynosi: ' + triangle2Area);
console.log('Pole trzeciego trójkąta wynosi: ' + triangle3Area);