function alertbox()
{
    alert("Alert box is called....");
}

function promptbox()
{
   let name = prompt("enter the name :");
   alert("hi,"+name)
    
}

function confirmbox()
{
    if(confirm("Do u want to delete ?"))
    {
        alert("record deleted successfully ")
    }
    else{
        alert("thank u visit again")
    }
}