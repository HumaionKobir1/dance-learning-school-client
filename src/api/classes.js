// add a class
export const getAllClass = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`)
    const data = await response.json()
    return data
}


export const getClasses = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/${email}`)
    const data = await response.json()
    return data
  }