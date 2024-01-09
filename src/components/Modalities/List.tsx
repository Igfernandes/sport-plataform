const List = () => {

    return (
        <>
            <div className="sport_info_list d-flex">
                <div className="sport_info_list_item">
                    <div className="sport_info_list_title">
                        <h6>DISCIPLINA</h6>
                    </div>
                    <div className="sport_info_list_content">
                        <ul>
                            <li>OUTDOOR</li>
                            <li>INDOOR</li>
                            <li>FIELD</li>
                            <li>SKI-ARCHERY (ESQUI)</li>
                            <li>CLOUT</li>
                            <li>FLIGHT</li>
                        </ul>
                    </div>
                </div>
                <div className="sport_info_list_item">
                    <div className="sport_info_list_title">
                        <h6>CLASSES</h6>
                    </div>
                    <div className="sport_info_list_content">
                        <ul>
                            <li>Feminino (adulto) - A partir de 21 anos;</li>
                            <li>Masculino (adulto) - A partir de 21 anos;</li>
                            <li>Sub 18 feminino - Até o ano do 17° aniversário;</li>
                            <li>Sub 18 masculino - Até o ano do 17° aniversário;</li>
                            <li>Sub 21 feminino - Até o ano do 20° aniversário;</li>
                            <li>Sub 21 masculino - Até o ano do 20° aniversário;</li>
                            <li>50+ feminino - a partir do 50° aniversário</li>
                            <li>50+ masculino - a partir do 50° aniversário</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sport_info_list d-flex">
                <div className="sport_info_list_item">
                    <div className="sport_info_list_title">
                        <h6>DIVISÕES</h6>
                    </div>
                </div>
                <div className="sport_info_list_item">
                    <div className="sport_info_list_faixa"></div>
                </div>
            </div>
            <div className="sport_info_text">
                <p></p>
            </div>
        </>
    )
}


export default List;