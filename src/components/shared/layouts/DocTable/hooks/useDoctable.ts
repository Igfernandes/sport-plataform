import { useState } from "react";

export const useDoctable = (props: any) => {

    const { title, meta } = props;
    let date = new Date()

    const [ano, setAno] = useState(date.getFullYear())
    const [data, setData] = useState(new Array());

    meta.map((item: any) => {

        let ano = item.data.split('-')[0]

        if (data.indexOf(ano) == -1) {
            setData([ano])
        }
    })

    return {
        title,
        meta,
        ano,
        setAno,
        data,
    }
} 