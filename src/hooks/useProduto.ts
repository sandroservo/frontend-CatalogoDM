import { useState, useEffect } from 'react'
import { Produto } from '../@types/Produto';
import { Api } from '../service/Api'

export function useProduto() {
    const [listaProduto, setListaProduto] = useState<Produto[]>([]);

    useEffect(() => {
        Api.get('/produtos').then((resposta) => {
            setListaProduto(resposta.data.produtos);
        })
    }, [])

    return {
        listaProduto
    }

}