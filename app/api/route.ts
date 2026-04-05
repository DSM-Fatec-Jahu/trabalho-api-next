import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    nome: "Seu Nome Completo",
    email: "seu.email@exemplo.com",
    RA: "12345678",
    variavelTeste: process.env.MEU_NOME || "Variável não definida"
  });
}