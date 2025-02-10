function minDifficulty(jobDifficulty: number[], d: number): number {
    const n = jobDifficulty.length;
    if (n < d) return -1; // sem trabalho

    // i trabalhos em j dias
    const dp = Array.from({ length: n + 1 }, () => Array(d + 1).fill(Infinity));
    dp[0][0] = 0;

    for (let days = 1; days <= d; days++) {
        for (let i = days; i <= n; i++) {
            let maxJobDifficulty = 0;
            for (let j = i - 1; j >= days - 1; j--) {
                maxJobDifficulty = Math.max(maxJobDifficulty, jobDifficulty[j]);
                dp[i][days] = Math.min(dp[i][days], dp[j][days - 1] + maxJobDifficulty);
            }
        }
    }
    
    return dp[n][d];
}
