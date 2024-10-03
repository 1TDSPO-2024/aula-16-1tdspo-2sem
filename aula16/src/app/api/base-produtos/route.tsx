import { NextResponse } from "next/server";
import { promises as fs} from "fs";

export async function GET() {

    const file = await fs.readFile(process.cwd() + "/src/data/base.json" ,"utf-8");
    
    const dados = JSON.parse(file);

    return NextResponse.json(dados);
}

export async function POST(request: Request) {
    
    const file = await fs.readFile(process.cwd() + "/src/data/base.json" ,"utf-8");
    
    const {id, nome, preco, marca, cor, modelo, quantidade, categoria, imagem} = await request.json()


    return NextResponse.json({msg:"Sucesso"})

}
