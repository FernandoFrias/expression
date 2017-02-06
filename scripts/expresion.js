function validNumber(num)
{
	numero=new RegExp(/^[0-9]$/);
	return numero.test(num);
}

function isdec(n)
{
	mx=new RegExp(/\.[0-9]+/);
	decn = mx.test(n);
	return decn;
}

function checkMultiple(initial, nm)
{
	lt = ""+nm
	rtn = 0;
	if (initial != 0 || nm != 0)
		for (rec = lt.length; rec > 0; rec--)
		{
			opr = nm.substr(0, rec);
			oprd = opr / initial;
			if(isdec(oprd) == false)
			{
				rtn = opr;
				break;
			}
		}

	return rtn;
}

function isPal(wd)
{
	tt = wd.length;
	mch = tt / 2;
	pal = true;
	for(ctn = 0; ctn < mch; ctn++)
	{
		ini = wd.substr(ctn, 1);
		fin = wd.substr(tt - 1 - ctn, 1);
		if (ini != fin)
		{
			pal = false;
			break;
		}
	}

	return pal;
}

function testOccurs(ini, arr)
{
	occur = arr.split(' ');
	total = occur.length
	number = new RegExp(/[0-9]+/);
	wrd = new RegExp(/[A-Za-z]+/);

	var adata = new Array();

	counter=0
	for(j = 0; j < total; j++)
		if (number.test(occur[j]) == true)
		{
			rsp = checkMultiple(ini, occur[j]);
			if (rsp > 0)
				adata[counter++] = rsp;
		}
		else
			if (wrd.test(occur[j]) == true)
			{
				mwrd = ""+wrd.exec(occur[j])
				if (isPal(mwrd) == true)
					adata[counter++] = mwrd.toUpperCase();
			}

	for(c = 0; c < counter; c++)
		alert("adata" + "[" + c + "] = " + adata[c]);

	return adata;
}

function takeArgs()
{
	arg1 = prompt("Input the first argument");

	if (!arg1)
		alert("empty");
	else
	{
		arg2 = prompt("Input the second argument");
		if (!arg2)
			alert("empty");
		else
			if (validNumber(arg1) == true)
			{
				testOccurs(arg1, arg2);
				alert("Final");
			}
			else
				alert("wrong argument");
	}
}

