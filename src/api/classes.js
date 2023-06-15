// add a class
export const getAllClass = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`)
    const data = await response.json()
    return data
}


export const getClasses = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/${email}`, {
        headers: {
            authorization: `bearer ${localStorage.getItem('access-token')}`
        },
    })
    const data = await response.json()
    return data
  }


export const getPayment = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/payment/${email}`, {
        headers: {
            authorization: `bearer ${localStorage.getItem('access-token')}`
        },
    })
    const data = await response.json()
    return data
  }