"use client"
import { useState, useEffect } from "react"

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}

export default function UserClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try{
                // const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const response = await fetch("./data.json");
                if (!response.ok) throw new Error("Failed to fetch Users")
                const data = await response.json()
            console.log(data)
                setUsers(data)
            }
            catch(err){
                console.log(err)
                setError("Failed to fetch Users")
                if(err instanceof Error){
                    setError(`Failed to fetch users: {err.message}`)
                }
                
            }
            finally{
                setLoading(false)
            }
            fetchUsers()
        }
    }, [])
    return (
        <div>
            <ul className="space-y-4 p-4">
                {users.map((user : User) => (
                    <li
                     key={user.id}
                     className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                    >
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    )
}