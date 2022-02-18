let outputScreen=document.getElementById("output");
let c=0;
function display(num)
{
    if(outputScreen.value=="undefined" || outputScreen.value=="Infinity" || c==1)
    {
        Clear();
        c=0;
    }
    outputScreen.value+=num;
}
function Calculate()
{
    try
    {
        outputScreen.value=eval(outputScreen.value);
        c=1;
    }
    catch(error)
    {
        outputScreen.value="Syntax Error";
        c=1;
    }
}
function Clear()
{
    outputScreen.value="";
}
function Delete()
{
    outputScreen.value=outputScreen.value.slice(0,-1);
}
