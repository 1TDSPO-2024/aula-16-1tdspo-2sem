import { NextResponse } from "next/server";
import { promises as fs} from "fs";

export async function GET() {

    const file = await fs.readFile(process.cwd() + "/src/data/base.json" ,"utf-8");

    const dados = JSON.parse(file);

    return NextResponse.json(dados);
}

export async function POST(req: Request) {
    const body = await req.json();
    const file = await fs.readFile(process.cwd() + "/src/data/base.json" ,"utf-8");

    const dados = JSON.parse(file);

    dados.push(body);

    console.log(body);

    await fs.writeFile(process.cwd() + "/src/data/base.json", JSON.stringify(dados));

    return NextResponse.json(dados);
}