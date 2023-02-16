_cmnHideElement("OutputResult");

function PercentageCalculatorFormValidate()
{
    RemoveAllErrorMessage();

    var percentageOf = document.getElementById("percentageOf").value;
    var percentage = document.getElementById("percentage").value;

    if(IsInputFieldEmpty("percentageOf") || (isNaN(percentageOf) && percentageOf <= 0))
    {
        ShowErrorMessageBottomOfTheInputFiled("percentageOf", "Enter correct value.");
        return false;
    }
    
    if(IsInputFieldEmpty("percentage") || (isNaN(percentage) && percentage <= 0))
    {
        ShowErrorMessageBottomOfTheInputFiled("percentage", "Enter a value.");
        return false;
    }   

    return true;
}

function PercentageCalculatorReset()
{
    document.getElementById("percentageOf").value = "";
    document.getElementById("percentage").value = "";

    RemoveAllErrorMessage();

    _cmnHideElement("OutputResult");
    _cmnShowElement("OutputInfo", "flex");
}

function PercentageCalculation()
{
    if(PercentageCalculatorFormValidate())
    {
        var result;
        var percentageOf = Number(document.getElementById("percentageOf").value);
        var percent = Number(document.getElementById("percentage").value);

        result = (percentageOf * percent) / 100;
        document.getElementById("percentResult").innerHTML = Number(result).toFixed(2);

        //result div show
        _cmnHideElement("OutputInfo");
        _cmnShowElement("OutputResult", "flex");
    }
}