function richest_customer_wealth(customersAccounts){
    let maximumWealth=0;
    customersAccounts.forEach(customer => {
        let customerWealth=0;
        customer.forEach(account => {
            customerWealth+=account;
        });
        maximumWealth=Math.max(maximumWealth,customerWealth);
    });
    return maximumWealth;
}
var result=richest_customer_wealth([[7,1,3],[2,8,7],[1,9,5]])
console.log(result);
// Time complexity =0(n*m) beacuse We must go through every row of customers and for each customer go every account
// Space complexity is constant because we do not create a data structure propotinal in size to help solve our problem