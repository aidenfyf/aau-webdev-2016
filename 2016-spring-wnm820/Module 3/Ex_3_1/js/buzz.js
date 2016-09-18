for (var x = 1; x <= 100; x++)
	if (x % 7 == 0) {
		document.write(" BUZZ ");
	}
	else if (x % 11 == 0) {
		document.write(" BUZZ ");
	}
	else if ((x - 7) % 10 == 0) {
		document.write(" BUZZ ");
	}
	else {
	    document.write(x + " ");
	}