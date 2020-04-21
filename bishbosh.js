function bishBosh()
{
	for(i=1;i<=100;i++)
	{
		let s="";
		if((i%3===0)&&(i%4===0))
			s="Bish-Bosh";

		else if(i%3===0)
			s="Bish";
		
		else if(i%4===0)
			s="Bosh";
		
		else
			s=i;
		document.getElementById("bishBoshOut").innerHTML += s+" ";
		//document.write(s + " ");
	}
}