const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const total = Object.values(faturamentoPorEstado).reduce((a, b) => a + b, 0);

for (const estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / total * 100).toFixed(2);
    console.log(`${estado}: ${percentual}%`);
}
