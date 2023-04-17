import { useState } from "react";
import { Api } from '../../../data/services/Api'
import { AxiosError } from "axios";


export function useCadastro() {
    const [customer, setCustomer] = useState(''),
        [cpe_user, setCpe_user] = useState(''),
        [contract, setContract] = useState(''),
        [onu_name, setOnu_name] = useState(''),
        [olt, setOlt] = useState(''),
        [pon, setPon] = useState(''),
        [serial, setSerial] = useState(''),
        [distance, setDistance] = useState(''),
        [mensagem, setMensagem] = useState('')

    function cadastrar() {
        if (validarFormulario()) {
            Api.post('/onus', {
            customer,
            cpe_user,
            contract,
            onu_name,
            olt,
            pon,
            serial,
            distance
            }).then(() => {
                Limpar();
                setMensagem('Onu cadastrada com  Sucesso!')
            }).catch((error: AxiosError) =>{
                setMensagem('Onu não cadastrada!')
            })
        } else {
            setMensagem('Preencha todos os campos')
        }
    }

    function validarFormulario() {
        return customer.length > 2 && cpe_user.length > 3 && contract.length > 2
    }

    function Limpar() {

        setCustomer('')
        setCpe_user('')
        setContract('')
        setOnu_name('')
        setOlt('')
        setPon('')
        setSerial('')
        setDistance('')
        setMensagem('')

    }

    return {
        customer,
        setCustomer,
        cpe_user,
        setCpe_user,
        contract,
        setContract,
        onu_name,
        setOnu_name,
        olt,
        setOlt,
        pon,
        setPon,
        serial,
        setSerial,
        distance,
        setDistance,
        mensagem,
        setMensagem,
        cadastrar

    }

}