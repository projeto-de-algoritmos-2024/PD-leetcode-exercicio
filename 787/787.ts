function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    // Inicializa o array
    let prices = new Array(n).fill(Infinity);
    prices[src] = 0; // custo origem é 0

    // Bellman-Ford
    for (let i = 0; i <= k; i++) {
        // Cópia dos preços para temp
        let tempPrices = [...prices]; 

        for (const [from, to, price] of flights) {
            if (prices[from] !== Infinity && prices[from] + price < tempPrices[to]) {
                tempPrices[to] = prices[from] + price;
            }
        }
        
        prices = tempPrices;
    }
    
    return prices[dst] === Infinity ? -1 : prices[dst];
}
