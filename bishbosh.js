function bishBosh(bish,bosh,iterations)
{
	if(bish<=0||bosh<=0||iterations<=0)
	{
		document.getElementById("bishBoshOut").innerHTML = "invalid options!";
	}
	else
	{
		document.getElementById("bishBoshOut").innerHTML = 'here we go!<br />';
		for(i=1;i<=iterations;i++)
		{
			let s="";
			if((i%bish===0)&&(i%bosh===0))
				s="Bish-Bosh";

			else if(i%bish===0)
				s="Bish";
			
			else if(i%bosh===0)
				s="Bosh";
			
			else
				s=i;
			document.getElementById("bishBoshOut").innerHTML += s+" ";
			//document.write(s + " ");
		}
	}
}

function bishBoshRun()
{
	let bishValue=document.getElementById("bish").value;
	let boshValue=document.getElementById("bosh").value;
	let iterationsValue=document.getElementById("iterations").value;
	bishBosh(bishValue,boshValue,iterationsValue);
}
