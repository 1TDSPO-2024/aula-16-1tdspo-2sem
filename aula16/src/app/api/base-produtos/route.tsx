import { NextResponse } from "next/server";
import { promises as fs} from "fs";

//Utilizado para enviar pela URL
export async function GET() {

    const file = await fs.readFile(process.cwd() + "/src/data/base.json" ,"utf-8");

    const dados = JSON.parse(file);

    return NextResponse.json(dados);
}

export async function POST(request:Request) {

    const file = await fs.readFile(process.cwd() + "/src/data/base.json" ,"utf-8");
    
    const dados = JSON.parse(file)

    

    const body = await request.json();
    const newID = dados[dados.lenght() - 1].id + 1;
    body.id = newID;

    dados.push(body);

    console.log(body)
    


    //Receber o mesmo objeto que é tratado em GetById
    //const body: TipoProduto = await request.json();
    
    //console.log("ID: " + id);
    //console.log("NOME: " + nomeProd);
    //console.log("PRECO: " + preco);
    //console.log("MARCA: " + marca);
    //console.log("COR: " + cor);
    //console.log("MODELO: " + modelo);
    //console.log("QUANTIDADE: " + quantidade);
    //console.log("CATEGORIA: " + categoria);
    //console.log("IMAGEM: " + imagem);

    await fs.writeFile(process.cwd() + "/src/data/base.json", 
    JSON.stringify(body));

    return NextResponse.json(body);

}
