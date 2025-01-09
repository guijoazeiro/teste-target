import { promises as fs } from "fs";

const lerArquivoJson = async (caminho) => {
    try {
        const data = await fs.readFile(caminho, "utf8");
        return JSON.parse(data);
    } catch (err) {
        throw new Error(`Erro ao ler o arquivo: ${err.message}`);
    }
};

const calcularEstatisticas = (dados) => {
    const diasComFaturamento = dados.filter(dia => dia.valor > 0);

    const valores = diasComFaturamento.map(dia => dia.valor);
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);

    const somaFaturamento = valores.reduce((soma, valor) => soma + valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;

    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

    return { menorValor, maiorValor, diasAcimaDaMedia };
};

const main = async () => {
    const caminhoArquivo = "dados.json";

    try {
        const dados = await lerArquivoJson(caminhoArquivo);
        const { menorValor, maiorValor, diasAcimaDaMedia } = calcularEstatisticas(dados);

        console.log("Menor faturamento:", menorValor.toFixed(2));
        console.log("Maior faturamento:", maiorValor.toFixed(2));
        console.log("Dias acima da média:", diasAcimaDaMedia);
    } catch (error) {
        console.error("Erro:", error.message);
    }
};

main();
