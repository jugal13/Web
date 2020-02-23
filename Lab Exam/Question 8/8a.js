function vowelCount(str1) {
	var counta=0,counte=0,counti=0,counto=0,countu=0
	for(var i=0;i<str1.length;i++) {
		switch(str1[i]) {
			case 'a':counta++;
					break;
			case 'e':counte++;
					break;
			case 'i':counti++;
					break;
			case 'o':counto++;
					break;
			case 'u':countu++;
					break;
			case 'A':counta++;
					break;
			case 'E':counte++;
					break;
			case 'I':counti++;
					break;
			case 'O':counto++;
					break;
			case 'U':countu++;
					break;
		}
	}
	console.log('a,e,i,o and u appear, respectively, '+counta+", "+counte+", "+counti+", "+counto+", "+countu+" times")
}

vowelCount('Le Tour de France')