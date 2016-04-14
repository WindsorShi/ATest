var line;
var count =0;
while(line=read_line()){
	if(count==0){
		var numT = line;
	}else{
		var str = line.split(" ");
		var n=str[0];
		var m=str[1];
		var a=str[2];
		var numn = Math.ceil(n/a);
		var numm = Math.ceil(m/a);
		print(numn*numm);
	}

	count++;
}