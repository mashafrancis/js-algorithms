function sockMerchant(n, ar) {
    let colors = new Set();
    let matches = 0;
    for (let i = 0; i < n; i++) {
        const element = ar[i];
        if (colors.has(element)) {
            colors.delete(element);
            matches++;
        } else {
            colors.add(element);
        }
        return matches;
    }
}
