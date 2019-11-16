// JavaScript source code

function ZeroCool(){
	var text = "";
        for (i = 1; i <= 100; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                text += "ZeroCool" + "\n";
            }
            else if (i % 3 === 0) {
                text += "Zero" + "\n";
            }
            else if (i % 5 === 0) {
                text += "Cool" + "\n";
            }
            else {
                text += i + "\n";
            }

        }
	return text;
}
ZeroCool()