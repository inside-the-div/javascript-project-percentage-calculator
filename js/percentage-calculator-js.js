function ValidateCalculatePercentageOfaNumberfeilds()
{
    _cmnRemoveAllErrorMessage();

    var percentageOf = document.getElementById("percentageOf").value;
    var percentage = document.getElementById("percentage").value;
    
    if(_cmnIsInputFieldEmpty("percentage") || (isNaN(percentage) && percentage <= 0))
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("percentage", "Enter a value.");
        return false;
    }  
    
    if(_cmnIsInputFieldEmpty("percentageOf") || (isNaN(percentageOf) && percentageOf <= 0))
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("percentageOf", "Enter correct value.");
        return false;
    }

    return true;
}

function ValidateCalculatePercentageOfTwoNumberfeilds()
{
    _cmnRemoveAllErrorMessage();

    var numberOne = document.getElementById("numberOne").value;
    var numberTwo = document.getElementById("percentageOfNumber").value;
    
    if(_cmnIsInputFieldEmpty("numberOne") || (isNaN(numberOne) && numberOne <= 0))
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("numberOne", "Enter a value.");
        return false;
    }  
    
    if(_cmnIsInputFieldEmpty("percentageOfNumber") || (isNaN(numberTwo) && numberTwo <= 0))
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("percentageOfNumber", "Enter correct value.");
        return false;
    }

    return true;
}

function ResetPercentageInputFeilds()
{
    document.getElementById("percentageOf").value = "";
    document.getElementById("percentage").value = "";
    document.getElementById("percentageOutputResult").value = "";

    _cmnRemoveAllErrorMessage();
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

    _cmnRemoveAllErrorMessage();
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