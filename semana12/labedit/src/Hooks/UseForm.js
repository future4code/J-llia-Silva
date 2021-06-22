import { useState } from "react"

const useForm = (estadoInicial)=>{
    const [form, setForm]=useState(estadoInicial)
    const handleInputChange=(e)=>{
        const {value, name}= e.target
        setForm({...form, [name]:value})
    }
    const limpar= ()=>{
        setForm(estadoInicial)
    }
    return[form, handleInputChange, limpar]
}
export default useForm