import { db } from "$lib/server/database/client";
 import { pae } from "$lib/server/database/schema";

export const load= async()=>{
    let data = await db.select().from(pae) 
    console.log(data)
    return {data}
}