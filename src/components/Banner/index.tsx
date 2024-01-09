import Image from 'next/image';

const Banner = (props: any) => {
    const { page, img } = props
    const BaseResUrl = process.env.NEXT_PUBLIC_BASERESURL

    return (
        <>
            {page ? page.metas.map((item: any, key: any) => (
                item.rotulo == 'banner' ?
                    <Image key={key}
                        loader={() => BaseResUrl + "/" + item.estrutura.split("public/")[1]}
                        src={BaseResUrl + "/" + item.estrutura.split("public/")[1]}
                        alt="Banner"
                        width="117.9vw"
                        height="15vh"
                        layout="responsive" style={{ objectFit: "cover" }} /> : null
            )) : <Image
                loader={() => img}
                src={img}
                alt="Banner"
                width="117.9vw"
                height="15vh"
                layout="responsive" style={{ objectFit: "cover" }} />}
        </>
    )
}

export default Banner;