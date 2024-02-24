import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:9000'
})

const fetcher = <Data>(url: string) => instance.get<Data>(url).then(res => res.data)

export default fetcher

