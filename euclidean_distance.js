function euclidean_distance(p1, p2) {
	if (p1.length !== p2.length) {
		throw new Error("Points must have the same length of dimensions");
	}
	let squared_distance = 0;
	for (let i = 0; i < p1.length; i++) {
		squared_distance += (p2[i] - p1[i]) ** 2;
	}
	return squared_distance ** 0.5;
}

// a simple test
let p1 = [0, 0];
let p2 = [3, 4];

console.log(euclidean_distance(p1, p2)); // 5
