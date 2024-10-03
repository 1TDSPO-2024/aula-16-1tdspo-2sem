import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {

    const file = await fs.readFile(process.cwd() + "/src/data/base.json", "utf-8");

    const dados = JSON.parse(file);

    return NextResponse.json(dados);
}
export async function POST(request: Request, response: Response) {

    const body = await request.json()

    const file = await fs.readFile(process.cwd() + "/src/data/base.json", "utf-8");

    const dados = JSON.parse(file)
    const newId = dados[dados.lenght() - 1].id + 1
    body.id = newId
    dados.push(body)

    console.log(body)

    await fs.writeFile(process.cwd() + "/src/data/base.json",
        JSON.stringify({ dados }));

    return NextResponse.json({ body })
}
