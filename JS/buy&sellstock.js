prices = [5, 2, 4, 3, 7, 1]
function buyAndSellStock1() {
    let maxProfit = 0,
        l = prices.length, profit, sellPrice, buyPrice;

    for (buyPrice = 0; buyPrice < l; buyPrice++) {
        for (sellPrice = buyPrice + 1; sellPrice < l; sellPrice++) {
            profit = prices[sellPrice] - prices[buyPrice];
            maxProfit = Math.max(maxProfit, profit);
        }
    }

    return maxProfit;
}
function buyAndSellStock2() {
    let mxP = 0, mnP = prices[0],
        l = prices.length, profit, i;

    for (i = 0; i < l; i++) {
        profit = prices[i] - mnP;
        mxP = Math.max(mxP, profit);
        if (prices[i] < mnP) mnP = prices[i]
    }

    return mxP;
}
console.log("MaxProfit:" + buyAndSellStock1(prices)); // Time Complexity :  O(n^2) & Space Complexity : O(1)
console.log("MaxProfit:" + buyAndSellStock2(prices)); // Time Complexity :  O(n) & Space Complexity : O(1)

let stocks = [5, 2, 7, 3, 6, 1, 2, 4];
function buyAndSellMultipleTimes(a) {
    let l = a.length, i, profit = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] > a[i - 1]) {
            profit += (a[i] - a[i - 1]);
        }
    }

    return profit;
}

console.log("MaxProfit for muliple stocks:" + buyAndSellMultipleTimes(stocks)); // Time Complexity :  O(n) & Space Complexity : O(1)