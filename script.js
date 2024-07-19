function mincost(arr)
{ 
//write your code here
// return the min cost
	let minimumCost = 0;
    while(arr.length > 1) {
        arr.sort((a, b) => a - b);
        let firstVal = arr.shift();
        let secondVal = arr.shift();
        let cost = firstVal + secondVal;
        minimumCost += cost;
        arr.push(cost);
    }
    return minimumCost;
}

module.exports=mincost;
