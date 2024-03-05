import prisma from "@/db"
import { redirect } from "next/navigation"
import Link from "next/link"

async function createTodo(data: FormData){
    "use server"
    const title = data.get('title')?.valueOf()
    if(typeof(title) !== "string" || title.length == 0){
        throw new Error("Invalid title")
    }
    await prisma?.todo.create({data : {title:title, complete:false}})
    redirect("/")
}
export default function Page(){
    return <>
    <header className="flex gap-2 justify-between">
      <h1 className ="text-2xl">New Todo</h1>
    </header>
    <form action={createTodo}>
        <input type="text" name="title" className="border border-slate-300 bg-transparent rounded p-4 my-4" />
        <div className="flex gap-1 flex-row">
            <Link href="/" className="border border-slate-300 p-2 rounded">back</Link>
            <button type="submit" className="border border-slate-300 p-2 rounded">Create</button>
        </div>
        
    </form>
    </>
}