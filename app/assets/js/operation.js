function eq()
{
	var first = parseInt(document.form.first.value);
	var second = parseInt(document.form.second.value);
	var op = document.form.op.value;
	if (op=="+")
	{
		ans = first+second
		document.form.ans.value=ans;
	}
	else if (op=="-")
	{
		document.form.ans.value=(first-second);
	}
	else if (op=="*")
	{
		document.form.ans.value=(first*second);
	}
	else if (op=="/")
	{
		document.form.ans.value=(first/second);
	}
}
evaluate()