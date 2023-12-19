import React from 'react'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const socket = io('http://localhost:8000', {
    transport: ['websocket', 'polling']
})

function Chart() {
    const [data, setData] = useState([]);
    useEffect(() => {
        socket.on('cpu', (data) => {
            setData((currentData) => [...currentData, data])
        })
    }, [])
    return (
        <div>
            <div>Cpu Usage Chart Graph</div>
            <LineChart width={1200} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
        </div>
    )
}

export default Chart