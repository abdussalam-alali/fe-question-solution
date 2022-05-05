const calculateTotal = (items) => {
    return items
        .map(item => item.quantity*item.unitPrice)
        .reduce((sum,a)=> sum+a,0);
}

const printTicket = (items) => {
     console.table(items,['product','quantity','unitPrice']);
     console.log(`Total Price: `,calculateTotal(items));
}

const main = () => {
    const products = [
        {product: 'water', type: 'drinks', quantity: 10, unitPrice: 1},
        {product: 'chicken wings', type: 'food', quantity: 3, unitPrice: 5},
        {product: 'steak', type: 'food', quantity: 1, unitPrice: 9},
        {product: 'coffee', type: 'drinks', quantity: 4, unitPrice: 2},
        {product: 'wine bottle', type: 'drinks', quantity: 1, unitPrice: 7}
    ];

    printTicket(products);
}

main();
