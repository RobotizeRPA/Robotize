import axios from "axios"

export const getBlog = async (number: number) => {
    try {
        const apiData = await axios.get(`https://robotizeweb-production.up.railway.app/news/economia/${number}`)
        return apiData.data
    } catch (error) {
        console.log('Error')
    }
}