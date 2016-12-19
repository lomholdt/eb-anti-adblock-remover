let candidates = document.querySelectorAll('body>div');
for (var i = candidates.length - 1; i >= 0; i--) {
	if (candidates[i].id.match(/[a-zA-Z0-9]{24,25}/)){
		candidates[i].remove();
	}
}
