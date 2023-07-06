import down from '../assets/down.png'
import up from '../assets/up.png'

export type itemsTypes = {
    img: string,
    title: string,
    text: string,
    back: string
    imc?: number
}
export const items = [
    {
        img: down,
        title: 'Magresa',
        text: 'IMC está entre 0 e 18,5',
        back: '#9a9a9a'

    }, {
        img: up,
        title: 'Normal',
        text: 'IMC está entre 18,5 e 24,9',
        back: '#02b914'
    }, {
        img: down,
        title: 'Sobrepeso',
        text: 'IMC está entre 24,9 e 30',
        back: '#d1e002'
    }, {
        img: down,
        title: 'Obesidade',
        text: 'IMC está maior que 30',
        back: '#b60900'
    }
]


export const calcImc = (peso: number, altura: number) => {
    const imc = Number((peso /( altura * altura)).toFixed(2))
 
    let result: itemsTypes = items[0]
    if (imc <= 18.5) {
        result = { ...items[0], imc: imc }
    }
    if (imc > 18.5 && imc <= 24.9) {
        result = { ...items[1], imc: imc }
    }
    if (imc > 24.9 && imc <= 30) {
        result = { ...items[2], imc: imc }
    }
    if (imc > 30) {
        result = { ...items[3], imc: imc }
    }

    return result
}