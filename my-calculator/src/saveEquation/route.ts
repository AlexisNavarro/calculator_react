import { NextRequest, NextResponse } from "next/server";
import sqlite3  from "sqlite3";
import {open} from "sqlite";
import path from "path";

async function openDB() {
    return open({
        filename: path.join(process.cwd(), "src/app/database/calculator.db"),
        driver: sqlite3.Database,
    })
}//END openDB

//will retrieve the equation and result from calculator and store in in the database
export async function POST(req: NextRequest) {
    try{
        const body = await req.json() as {equation: string; result:string};
        const {equation, result} = body;

        if(!equation || !result){
            return NextResponse.json({error: "Missing equation or result"}, {status:400});
        }

        const db = await openDB();
        await db.run("INSERT INTO history (equation, result) VALUES (?, ?)", [equation, result]);
        await db.close();

        return NextResponse.json({message: "equation saved successfully!"}, {status: 200});
    }catch(error: unknown){
        if(error instanceof Error){
            return NextResponse.json({ error: error.message }, { status: 500 });

        }
        return NextResponse.json({ error: "An unknown error occured" }, { status: 500 });
    }
}//end POST