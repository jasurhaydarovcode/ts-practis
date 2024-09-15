import axios, { AxiosError, AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { UserType } from "../interface/userTypes";

function Table() {
    const [data, setData] = useState<UserType[] | null>(null)

    function fetchUsers() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res: AxiosResponse) => {
                if (res.data) {
                    setData(res.data)
                }
            })
            .catch((err: AxiosError) => {
                console.log(err);
            });
    }
    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Website
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 && data.map((item: UserType, index: number) =>
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.name}
                            </th>
                            <td className="px-6 py-4">
                                {item.email}
                            </td>
                            <td className="px-6 py-4">
                                {item.phone}
                            </td>
                            <td className="px-6 py-4">
                                {item.website}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table