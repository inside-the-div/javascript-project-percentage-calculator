document.getElementById("OutputResult").style = "display: none";
document.getElementById("OutputInfo").style = "display: flex";

function PercentageCalculatorFormValidate()
{
    RemoveAllErrorMessage();
    var percentageOf = document.getElementById("percentageOf").value;
    var percentage = document.getElementById("percentage").value;
    if(IsInputFieldEmpty("percentageOf"))
    {
        ShowErrorMessageBottomOfTheInputFiled("percentageOf", "Enter a value.");
        return false;
    }
    else if(isNaN(percentageOf))
    {
        ShowErrorMessageBottomOfTheInputFiled("percentageOf", "Enter correct value.");
        return false;
    }
    
    if(parseFloat(percentageOf) < 1)
    {
        ShowErrorMessageBottomOfTheInputFiled("percentageOf", "Enter correct value.");
        return false;
    }
    
    if(IsInputFieldEmpty("percentage"))
    {
        ShowErrorMessageBottomOfTheInputFiled("percentage", "Enter a value.");
        return false;
    }   
    else if(isNaN(percentage))
    {
        ShowErrorMessageBottomOfTheInputFiled("percentage", "Enter correct value.");
        return false;
    }
    
    if((parseFloat(percentage)) < 1)
    {
        ShowErrorMessageBottomOfTheInputFiled("percentage", "Enter correct value.");
        return false;
    }

    return true;
}

function PercentageCalculatorReset()
{
    document.getElementById("percentageOf").value = "";
    document.getElementById("percentage").value = "";
    RemoveAllErrorMessage();
}

function PercentageCalculation()
{
    if(PercentageCalculatorFormValidate())
    {
        var count = 0;
        var result;
        var percentageOf = Number(document.getElementById("percentageOf").value);
        var percent = Number(document.getElementById("percentage").value);

        if(count == 0)
        {
            document.getElementById("OutputInfo").style = "display: none";
            document.getElementById("OutputResult").style = "display: flex";
            count++;
        }

        result = (percentageOf * percent) / 100;

        document.getElementById("percentResult").innerHTML = Number(result).toFixed(2);
    }
}