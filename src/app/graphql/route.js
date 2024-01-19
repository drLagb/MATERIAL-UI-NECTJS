import { NextResponse } from "next/server";
import { headers } from 'next/headers'

export const POST = async (req)=>{
    const body = await req.json();
    let encabezados = headers();
    const data = await fetch("https://flexhire.com/api/v2",{
        method:"POST",
        headers: {
            "FLEXHIRE-API-KEY":encabezados.get("FLEXHIRE-API-KEY"),
            "Content-Type":encabezados.get("Content-Type")
        },
        body:JSON.stringify(body)
    }).then((res)=>{
        if(res.ok)
            return res.json();
        return {};
    })
    .catch((e)=>console.log(e));
    return NextResponse.json(data);
}