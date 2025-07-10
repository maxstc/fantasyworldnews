//do not call this directly
function fwnSortRec(a, b, order, i) {
    //all attributes in 'order' are equal, so they're equal
    if (i >= order.length) {
        return 0;
    }
    else {
        if (order[i][0] === "-") {
            //invert order
            if (a[order[i].substring(1)] < b[order[i].substring(1)]) {
                return 1;
            }
            else if (a[order[i].substring(1)] > b[order[i].substring(1)]) {
                return -1;
            }
            else {
                //if this attribute is equal, check the next one
                return fwnSortRec(a, b, order, i+1);
            }
        }
        else {
            if (a[order[i]] < b[order[i]]) {
                return -1;
            }
            else if (a[order[i]] > b[order[i]]) {
                return 1;
            }
            else {
                //if this attribute is equal, check the next one
                return fwnSortRec(a, b, order, i+1);
            }
        }
    }
}

//sort an array of objects by a list of attributes in that order
//ex: fwnSort(cars, ["make","model","year"])
//this will group by make, then by model, then by year
//place - in front of an attribute for descending order
//ex: fwnSort(cars, ["make","model","-year"])
//this will sort year in descending order but the others ascending
function fwnSort(arr, order) {
    arr.sort((a,b) => {
        return fwnSortRec(a, b, order, 0);
    });
}