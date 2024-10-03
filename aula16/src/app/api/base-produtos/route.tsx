import { NextResponse } from "next/server";
import { promises as fs} from "fs";

export async function GET() {

    const file = await fs.readFile(process.cwd() + "/src/data/base.json" ,"utf-8");

    const dados = JSON.parse(file);

    return NextResponse.json(dados);
}

export async function POST(request:Request){

    const file = await fs.readFile(process.cwd() + "/src/data/base.json" ,"utf-8");
        
    //const {nome, idade} = await request.json() 

    //console.log("NOME: " + nome);
    //console.log("IDADE: " + idade);

    //return NextResponse.json({msg:"SUCESSO"});

    const {id, nome, preco, marca, cor, modelo, quantidade, categoria, imagem} = await request.json()

    console.log("ID: " + id);
    console.log("NOME: " + nome);
    console.log("PRECO: " + preco);
    console.log("MARCA: " + marca);
    console.log("COR: " + cor);
    console.log("MODELO: " + modelo);
    console.log("QUANTIDADE: " + quantidade);
    console.log("CATEGORIA: " + categoria);
    console.log("IMAGEM: " + imagem);

    return NextResponse.json({msg:"PRODUTO CADASTRADO"});


}