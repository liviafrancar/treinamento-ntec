import dotenv from 'dotenv';

dotenv.config()

function pegarVariavel(nome: string): string {
    const variavel = process.env[nome];
    if (!variavel) {
        throw new Error(`Variável de ambiente ausente: ${nome}`);
    }
    return variavel;
}

const DATABASE_URL = pegarVariavel('DATABASE_URL');
const API_KEY = pegarVariavel('API_KEY');
const PORT = pegarVariavel('PORT');

console.log('Projeto iniciado com sucesso!');
console.log('Porta:', PORT);