function findItemsOver20(itemList) {
    var itemsOver20 = [];
    for (var i = 0; i < itemList.length; i++) {
        const items = itemList[i];
        if (items.qty > 20) {
            itemsOver20.push(items);

        }
    }
    // console.log(itemsOver20);
    return itemsOver20;
}


function findItemsOver(itemList, threshold) {
    var itemsOver = [];
    for (var i = 0; i < itemList.length; i++) {
        const items = itemList[i];
        if (items.qty > threshold) {
            itemsOver.push(items);
        }
    }
   // console.log(itemsOver);
    return itemsOver;
}