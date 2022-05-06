const calculateTotal = (items) => {
    return items.reduce((sum,item)=> sum+(item.quantity*item.unitPrice),0);
}

const printTicketUsingLog = (items) => {

    console.log('QTY \t PRICE \t PRODUCT');
    items.map(item=>{
        console.log("%s \t %s \t %s",item.quantity,item.unitPrice,item.product);
    });
    console.log("----------------------------------");
    console.log(`Total Price: `,calculateTotal(items));


}
const printTicket = (items) => {
     console.table(items,['product','quantity','unitPrice']);
     console.log(`Total Price: `,calculateTotal(items));
}

const main = (method=1) => {
    const products = [
        {product: 'water', type: 'drinks', quantity: 10, unitPrice: 1},
        {product: 'chicken wings', type: 'food', quantity: 3, unitPrice: 5},
        {product: 'steak', type: 'food', quantity: 1, unitPrice: 9},
        {product: 'coffee', type: 'drinks', quantity: 4, unitPrice: 2},
        {product: 'wine bottle', type: 'drinks', quantity: 1, unitPrice: 7}
    ];
    if(method===1)
        printTicket(products);
    else if(method===2)
        printTicketUsingLog(products);
}
// 1 for printing ticket using console.table
// 2 for printing ticket with normal console.log
main(2);
