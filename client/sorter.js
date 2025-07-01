function fwnSortRec(a, b, order, i) {
    if (i >= order.length) {
        return 0;
    }
    else {
        if (a[order[i]] < b[order[i]]) {
            return -1;
        }
        else if (a[order[i]] > b[order[i]]) {
            return 1;
        }
        else {
            return fwnSortRec(a, b, order, i+1);
        }
    }
}

function fwnSort(arr, order) {
    arr.sort((a,b) => {
        return fwnSortRec(a, b, order, 0);
    });
}