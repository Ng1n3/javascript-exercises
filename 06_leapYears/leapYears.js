const leapYears = function(year) {
 if(year % 4 == 0)
 {
    if(year % 100 != 0)
    {
        return true;

    }else if(year % 400 == 0)
        {
            return true;

        }else return false;

    }else return false;
}

leapYears(2000);
// Do not edit below this line
module.exports = leapYears;
