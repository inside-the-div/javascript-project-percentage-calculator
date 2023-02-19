function ValidateCalculateTopPercentagefeilds()
{
    _cmnRemoveAllErrorMessage();

    var percentageOf = document.getElementById("topY").value;
    var percentage = document.getElementById("topX").value;
    
    if(_cmnIsInputFieldEmpty("topX") || (isNaN(percentage) && percentage <= 0))
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("topX", "Enter correct value.");
        return false;
    }  
    
    if(_cmnIsInputFieldEmpty("topY") || (isNaN(percentageOf) && percentageOf <= 0))
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("topY", "Enter correct value.");
        return false;
    }

    return true;
}

function ValidateCalculatePercentageOfTwoNumberfeilds()
{
    _cmnRemoveAllErrorMessage();

    var numberOne = document.getElementById("bottomX").value;
    var numberTwo = document.getElementById("bottomY").value;
    
    if(_cmnIsInputFieldEmpty("bottomX") || (isNaN(numberOne) && numberOne <= 0))
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("bottomX", "Enter correct value.");
        return false;
    }  
    
    if(_cmnIsInputFieldEmpty("bottomY") || (isNaN(numberTwo) && numberTwo <= 0))
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("bottomY", "Enter correct value.");
        return false;
    }

    return true;
}

function ResetTopPercentageFeilds()
{
    document.getElementById("topY").value = "";
    document.getElementById("topX").value = "";
    document.getElementById("percentageResultTop").value = "";

    _cmnRemoveAllErrorMessage();
}

function CalculateTopPercentage()
{
    if(ValidateCalculateTopPercentagefeilds())
    {
        var result;
        var percentageOf = Number(document.getElementById("topY").value);
        var percent = Number(document.getElementById("topX").value);

        result = (percentageOf * percent) / 100;
        document.getElementById("percentageResultTop").value = Number(result).toFixed(2);
    }
}

function ResetBottomPercentageFeilds()
{
    document.getElementById("bottomX").value = "";
    document.getElementById("bottomY").value = "";
    document.getElementById("percentResultBottom").value = "";

    _cmnRemoveAllErrorMessage();
}

function CalculateBottomPercentage()
{
    if(ValidateCalculatePercentageOfTwoNumberfeilds())
    {
        var result;
        var numberOne = Number(document.getElementById("bottomX").value);
        var percentageOfNumber = Number(document.getElementById("bottomY").value);

        result = (numberOne / percentageOfNumber) * 100;
        document.getElementById("percentResultBottom").value = Number(result).toFixed(2);
    }
}