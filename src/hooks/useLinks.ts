
interface IUseLinkType{
    link: string,
    type: string
}

export const useLinks = () =>{

    const linkType = ({link, type}:IUseLinkType)=>{
        
        switch(type){
            case "telefone": 
                return `tel:${link}`
            case "email":
                return `mailto:${link}`
            default: 
                return link
        }
    } 


    return {
        linkType
    }
}