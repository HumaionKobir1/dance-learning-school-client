export const updateStatus = async (id, status) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/status/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({status})
    })
    const data = await response.json()
    return data;
}

export const updateClassStatus = async (id, status) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/admin/status/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({status})
    })
    const data = await response.json()
    return data;
}