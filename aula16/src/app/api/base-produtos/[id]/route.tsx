import { NextResponse } from "next/server";
import { promises as fs} from "fs";
import { TipoProduto } from "@/types";

export async function GET(request:Request, {params}:{params:{ id:number }}) {

    const file = await fs.readFile(process.cwd() + "/src/data/base.json" ,"utf-8");

    const dados:TipoProduto[] = JSON.parse(file);

    const produto = dados.find( p => p.id == params.id);

    return NextResponse.json(produto);
}

export async function PUT(req: Request, {params}: {params:{ id: string }}) {
    const body = await req.json();

    if (body.id !== params.id) return NextResponse.json({ msg: "Id não confere" });

    const file = await fs.readFile(process.cwd() + "/src/data/base.json" ,"utf-8");

    const dados = JSON.parse(file);

    type Produto = {
        id: number,
        nome: string,
        preco: number,
        marca: string,
        cor: string,
        modelo: string,
        quantidade: number,
        categoria: string,
        imagem: string
    }

    const index = dados.findIndex((item: Produto) => item.id === body.id);

    if (index === -1) return NextResponse.json({ msg: "Produto não encontrado"});

    dados[index] = body;

    await fs.writeFile(process.cwd() + "/src/data/base.json", JSON.stringify(dados));

    return NextResponse.json(dados[index]);
}