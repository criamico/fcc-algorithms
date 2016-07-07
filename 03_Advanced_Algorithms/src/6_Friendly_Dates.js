/*Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.*/


function makeFriendlyDates(arr) {

   function formatMonth(mm){
        var ind = parseInt(mm) -1,
        months = [
         'January',
         'February',
         'March',
         'April',
         'May',
         'June',
         'July',
         'August',
         'September',
         'October',
         'November',
         'December'
        ];

        if (ind >=0  && ind <= 12)
            return months[ind];
        else return '';
   }
    function formatDays(dd){
        if (dd === '01')
            return '1st';
        else if (dd === '02')
            return '2nd';
        else if (dd === '03')
            return '3rd';
        else if (parseInt(dd)> 3 && parseInt(dd) < 10)
            return dd.slice(1) + 'th';
        else if (parseInt(dd) >= 10)
            return dd+ 'th';
        else
            return '';
    }


    var startDate = new Date(arr[0]);
    var endDate = new Date(arr[1]);
    var timespan = (endDate.getTime() - startDate.getTime())/1000;
    var start, end, sMonth, sDay, sYear, eMonth, eDay, eYear;

    start = arr[0].split('-'); //[YYYY, MM, DD]
    end = arr[1].split('-');

    sMonth = formatMonth(start[1]);
    eMonth = formatMonth(end[1]);
    sYear = start[0];
    eYear = end[0];
    sDay = formatDays(start[2]);
    eDay = formatDays(end[2]);


    // if the two dates are equal
    if (arr[0] === arr[1])
        return [sMonth + ' '+ sDay + ', '+ sYear];

    else{
        // 1 month == 2592000
        if (timespan < 2592000)
            return [ sMonth + ' '+ sDay, eDay];

         //1 year == 31536000 seconds -> less than a year
        else if (timespan >= 2592000 && timespan < 31536000){
            if (sYear !== '2016')
                return [
                        sMonth + ' '+ sDay + ', '+ sYear,
                        eMonth + ' '+ eDay
                        ];
            else //if the year is 2016
                 return [
                        sMonth + ' '+ sDay,
                        eMonth + ' '+ eDay
                        ];
        }
        else
            return [
                    sMonth + ' '+ sDay + ', '+ sYear,
                    eMonth + ' '+ eDay + ', '+ eYear
                    ];
    }


}