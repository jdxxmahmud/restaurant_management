import React from 'react'

const Restaurants = () => {

    const data = [
        {
            "id": 1,
            "name": "Restaurant 1",
            "city": "City 1"
        },
        {
            "id": 2,
            "name": "Restaurant 2",
            "city": "City 2"
        }
    ]

    const DisplayData = data.map(
        (item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.city}</td>
                    <td className='text-center'><button className="btn btn-sm">View</button></td>
                </tr>
            )
        }
    )

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table min-w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>City</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DisplayData}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Restaurants