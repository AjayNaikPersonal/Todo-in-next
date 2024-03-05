"use client"

type TodoItemProps = {
    id : number
    title : string
    complete: boolean
    toggleTodo:(id:number, complete:boolean) =>void
}



export default function TodoItem({id,title,complete, toggleTodo}: TodoItemProps){
    return <li className="flex gap-2 row-auto">
        <input type="checkbox" className="cursor-pointer peer" id={title} defaultChecked={complete}
        onChange={e=>toggleTodo(id,e.target.checked)}/>
        <label htmlFor={title} className="peer-checked:line-through peer-checked:text-slate-500">{title}</label>
    </li>
}