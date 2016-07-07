/*Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

// Example cash-in-drawer array:
// [["PENNY", 1.01], 1 cent
// ["NICKEL", 2.05], 5 cent
// ["DIME", 3.10], 10 cents
// ["QUARTER", 4.25], 25 cents
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]
*/

function checkCashRegister(price, cash, cid) {
    var change,
        cidObj = {},
        changeArr = [],
        cidTot = 0,
        buf = [],
        partial = 0,
        checkChange = 0;

    var CoinsValues =  [
        {
            'name': 'PENNY',
            'val': 0.01,
            'qty': 0,
            'tot': 0
        },
        {
            'name': 'NICKEL',
            'val': 0.05,
            'qty': 0,
            'tot': 0
        },
        {
            'name': 'DIME',
            'val': 0.10,
            'qty': 0,
            'tot': 0
        },
        {
            'name': 'QUARTER',
            'val': 0.25,
            'qty': 0,
            'tot': 0
        },
        {
            'name': 'ONE',
            'val': 1,
            'qty': 0,
            'tot': 0
        },
        {
            'name': 'FIVE',
            'val': 5,
            'qty': 0,
            'tot': 0
        },
        {
            'name': 'TEN',
            'val': 10,
            'qty': 0,
            'tot': 0
        },
         {
            'name': 'TWENTY',
            'val': 20,
            'qty': 0,
            'tot': 0
        },
        {
            'name': 'ONE HUNDRED',
            'val': 100,
            'qty': 0,
            'tot': 0
        }
    ];

    // Fill the objectand and calculate total cid
    for (var i= 0; i < cid.length; i++){
        cidTot += cid[i][1];
        if (CoinsValues[i].name === cid[i][0]){
            CoinsValues[i].tot = cid[i][1];
            if (cid[i][1] > 0)
                CoinsValues[i].qty = Math.round(cid[i][1] / CoinsValues[i].val);
        }
    }

    // calculate the change value
    change = cash - price;
   /* console.log(change, cidTot);
    console.log(CoinsValues);*/

    if (cidTot < change)
        return "Insufficient Funds";

    else if (cidTot == change)
        return "Closed";

    else if (cidTot > change){
        // calculate the change
        for(var i = CoinsValues.length -1; i>=0; i--){
           /* console.log(i, change);*/
            if (CoinsValues[i].tot > 0 && change >= CoinsValues[i].tot){
                buf.push(CoinsValues[i].name);
                buf.push(CoinsValues[i].tot);
                // update change
                change = +(change - parseInt(CoinsValues[i].tot)).toFixed(2);  //convert to two decimal but not to string
                changeArr.push(buf);
                buf = [];
            }
            else if (CoinsValues[i].tot > 0 && change >= CoinsValues[i].val && CoinsValues[i].qty > 0 ){
                remainder = change % CoinsValues[i].val;
                partial = change - remainder;
                buf.push(CoinsValues[i].name);
                buf.push(partial);

                // update change
                change = +(change - partial).toFixed(2);
                changeArr.push(buf);
                buf = [];
            }
        }

        // check result; if result is less than change expected, return Insufficient
        for (var i= 0; i < changeArr.length; i++){
            checkChange += changeArr[i][1];
        }
        if (checkChange >= change)
            return changeArr;
        else
            return "Insufficient Funds";
    }

}