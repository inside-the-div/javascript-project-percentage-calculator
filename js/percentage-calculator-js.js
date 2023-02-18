function ValidateCalculatePercentageOfaNumberfeilds()
{
    RemoveAllErrorMessage();

    var percentageOf = document.getElementById("percentageOf").value;
    var percentage = document.getElementById("percentage").value;
    
    if(IsInputFieldEmpty("percentage") || (isNaN(percentage) && percentage <= 0))
    {
        ShowErrorMessageBottomOfTheInputFiled("percentage", "Enter a value.");
        return false;
    }  
    
    if(IsInputFieldEmpty("percentageOf") || (isNaN(percentageOf) && percentageOf <= 0))
    {
        ShowErrorMessageBottomOfTheInputFiled("percentageOf", "Enter correct value.");
        return false;
    }

    return true;
}

function ValidateCalculatePercentageOfTwoNumberfeilds()
{
    RemoveAllErrorMessage();

    var numberOne = document.getElementById("numberOne").value;
    var numberTwo = document.getElementById("percentageOfNumber").value;
    
    if(IsInputFieldEmpty("numberOne") || (isNaN(numberOne) && numberOne <= 0))
    {
        ShowErrorMessageBottomOfTheInputFiled("numberOne", "Enter a value.");
        return false;
    }  
    
    if(IsInputFieldEmpty("percentageOfNumber") || (isNaN(numberTwo) && numberTwo <= 0))
    {
        ShowErrorMessageBottomOfTheInputFiled("percentageOfNumber", "Enter correct value.");
        return false;
    }

    return true;
}

function ResetPercentageInputFeilds()
{
    document.getElementById("percentageOf").value = "";
    document.getElementById("percentage").value = "";
    document.getElementById("percentageOutputResult").value = "";

    RemoveAllErrorMessage();
}

function CalculatePercentageOfaNumber()
{
    if(ValidateCalculatePercentageOfaNumberfeilds())
    {
        var result;
        var percentageOf = Number(document.getElementById("percentageOf").value);
        var percent = Number(document.getElementById("percentage").value);

        result = (percentageOf * percent) / 100;
        document.getElementById("percentageOutputResult").value = Number(result).toFixed(2);
    }
}

function ResetTwoNumbersPercentageInputFeilds()
{
    document.getElementById("numberOne").value = "";
    document.getElementById("percentageOfNumber").value = "";
    document.getElementById("percentResult").value = "";

    RemoveAllErrorMessage();
}

function CalculatePercentageOfTwoNumbers()
{
    if(ValidateCalculatePercentageOfTwoNumberfeilds())
    {
        var result;
        var numberOne = Number(document.getElementById("numberOne").value);
        var percentageOfNumber = Number(document.getElementById("percentageOfNumber").value);

        result = (numberOne / percentageOfNumber) * 100;
        document.getElementById("percentResult").value = Number(result).toFixed(2);
    }
}