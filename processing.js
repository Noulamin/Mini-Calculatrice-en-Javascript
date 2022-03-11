
var first_number = 0;

var actual_number = "0";

var operation = "";

var result = 0;

var temp = "";

var is_null = false;

var is_simple = false;

function numbers_(number)
{
    if(operation.includes("="))
    {
        first_number = 0;
        actual_number = "0";
        operation = "";
        result = 0;
    }

    if(is_null == true)
    {
        actual_number = "0";
        is_null = false;
    }

    if(number == ".")
    {
        if (!actual_number.includes(number))
        {
            actual_number = actual_number + number;
            show_result(actual_number);
        }
    }
    else if(actual_number == "0")
    {
        actual_number = number;
        show_result(actual_number);
    }
    else
    {
        actual_number = actual_number + number;
        show_result(actual_number);
    }
}

function operation_(index)
{

    is_null = true;
    if(first_number != 0 && actual_number != "0")
    {
    

        if(index == "+")
        {
            result = first_number + parseFloat(actual_number);
            first_number = result;
            operation = result + " " + "+";
            show_operation(operation);
            show_result(result);
        }
        if(index == "−")
        {
            
            result = first_number - parseFloat(actual_number);
            first_number = result;
            operation = result + " " + "-";
            show_operation(operation);
            show_result(result);
        }
        if(index == "×")
        {
            result = first_number * parseFloat(actual_number);
            first_number = result;
            operation = result + " " + "×";
            show_operation(operation);
            show_result(result);
        }
        if(index == "÷")
        {
            result = first_number / parseFloat(actual_number);
            first_number = result;
            operation = result + " " + "÷";
            show_operation(operation);
            show_result(result);
        }
    }

    if(result == 0)
    {
        first_number = parseFloat(actual_number);
        operation = actual_number + " " + index;
        show_operation(operation);
    }
    else
    {
        actual_number = result;
        first_number = result;
        operation = actual_number + " " + index;
        show_operation(operation);
    }
}

function equals()
{
    if(!operation.includes("+") && !operation.includes("−") && !operation.includes("×") && !operation.includes("÷"))
    {
        operation = actual_number + " " + "=";
        show_operation(operation);
    }
    else
    {
        is_null = true;

        // +
        if(operation.includes("+"))
        {
            if(operation.includes("="))
            {
                first_number = parseFloat(result);
                result = first_number + parseFloat(actual_number);
                operation = first_number + " " + "+" + " " + actual_number + " " +"=";
                show_operation(operation);
                show_result(result);
            }
            else if(actual_number == "0")
            {
                result = first_number + first_number;
                operation = first_number + " " + "+" + " " + first_number + " " +"=";
                show_operation(operation);
                show_result(result);
            }
            else
            {
                result = first_number + parseFloat(actual_number);
                operation = first_number + " " + "+" + " " + actual_number + " " +"=";
                show_operation(operation);
                show_result(result);
            }
        }

        // -
        if(operation.includes("−"))
        {
            if(operation.includes("="))
            {
                first_number = parseFloat(result);
                result = first_number - parseFloat(actual_number);
                operation = first_number + " " + "−" + " " + actual_number + " " +"=";
                show_operation(operation);
                show_result(result);
            }
            else if(actual_number == "0")
            {
                result = first_number - first_number;
                operation = first_number + " " + "−" + " " + first_number + " " +"=";
                show_operation(operation);
                show_result(result);
            }
            else
            {
                result = first_number - parseFloat(actual_number);
                operation = first_number + " " + "−" + " " + actual_number + " " +"=";
                show_operation(operation);
                show_result(result);
            }
        }

        // x
        if(operation.includes("×"))
        {
            if(operation.includes("="))
            {
                first_number = parseFloat(result);
                result = first_number * parseFloat(actual_number);
                operation = first_number + " " + "×" + " " + actual_number + " " +"=";
                show_operation(operation);
                show_result(result);
            }
            else if(actual_number == "0")
            {
                result = first_number * first_number;
                operation = first_number + " " + "×" + " " + first_number + " " +"=";
                show_operation(operation);
                show_result(result);
            }
            else
            {
                result = first_number * parseFloat(actual_number);
                operation = first_number + " " + "×" + " " + actual_number + " " +"=";
                show_operation(operation);
                show_result(result);
            }
        }

        // ÷
        if(operation.includes("÷"))
        {
            if(first_number == 0 || actual_number == "0")
            {
                window.alert("you cannot divise " + first_number + " by " + actual_number + ".");
                clear_();
            }
            else
            if(operation.includes("="))
            {
                first_number = parseFloat(result);
                result = first_number / parseFloat(actual_number);
                operation = first_number + " " + "÷" + " " + actual_number + " " +"=";
                show_operation(operation);
                show_result(result);
            }
            else if(actual_number == "0")
            {
                result = first_number / first_number;
                operation = first_number + " " + "÷" + " " + first_number + " " +"=";
                show_operation(operation);
                show_result(result);
            }
            else
            {
                result = first_number / parseFloat(actual_number);
                operation = first_number + " " + "÷" + " " + actual_number + " " +"=";
                show_operation(operation);
                show_result(result);
            }
        }
    }
}

function simple_calcule()
{
    if(first_number != 0 && actual_number != "0")
    {
        is_simple = false;
        operation_();
    }
    else
    {
        first_number = parseFloat(actual_number);
        alert(first_number);
    }
}

function show_result(index)
{
    document.getElementById("result").innerHTML = index;
}

function show_operation(index)
{
    document.getElementById("operation").innerHTML = index;
}

function clear_()
{
    first_number = 0;
    actual_number = "0";
    operation = "";
    result = 0;
    is_null = false;
    show_result(actual_number);
    show_operation(operation);
}

function delete_()
{
    if(actual_number != "0")
    {
        actual_number = actual_number.slice(0 ,-1);
        if(actual_number == "")
        {
            actual_number = "0";
        }
        show_result(actual_number);
    }
}

function close_()
{
    window.close();
}