import React, {useState} from 'react'

const Table = () => {

    const [data, saveData] = useState([
        { url: '', nameVal: '', valueVal: '' }
    ])

    const handleChange = (index, dataType, value) => {
        const changeState = data.map((item, i) => {
            if(i === index) return {...item, [dataType]: value}
            return item
        })

        saveData(changeState)
    }

    const addRow = () => {
        const newRow = { url: '', nameVal: '', valueVal: '' }
        saveData([...data, newRow])
    }

    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>URL</th>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>
                                <input onChange={(e) => handleChange(index, 'url', e.target.value)} 
                                    type='text'
                                    className='form-control' 
                                    value={data[index].url}/>
                            </td>
                            <td>
                                <input onChange={(e) => handleChange(index, 'nameVal', e.target.value)} 
                                    type='text' 
                                    className='form-control'
                                    value={data[index].nameVal}/>
                            </td>
                            <td>
                                <input onChange={(e) => handleChange(index, 'valueVal', e.target.value)} 
                                    type='text'
                                    className='form-control'
                                    value={data[index].valueVal}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={addRow}>Add Row</button>
        </>
    )
}
   
export default Table
