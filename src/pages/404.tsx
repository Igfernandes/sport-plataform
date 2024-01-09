import { Header } from "@components/shared/globals/Header";

export default function Custom404() {
  return (
    <>
      <Header title="Não encontrada" />
      <div className="_404">
        <div className="_404_content">
          <div className="container-fluid container-md">
            <div className="row _404_development">
              <div className="col-12 _404_development-column">
                <div className="_404-info">
                  <div className="_404-box">
                    <div className="_404-box--item">
                      <div className="_404-box--item-img">
                        <img src="/img/icon-alvo.png" alt="Image Alvo" />
                      </div>
                    </div>
                    <div className="_404-box--item">
                      <div className="_404-box--item-text">
                        <p>Brasil Arco informa:</p>
                        <h4>ERRO 404</h4>
                      </div>
                    </div>
                    <div className="_404-box--item">
                      <div className="_404-box--item-img">
                        <img src="/img/icon-alvo.png" alt="Image Alvo" />
                      </div>
                    </div>
                  </div>
                  <div className="spacer-border">
                    <img src="/img/faixa-style.png" alt="Image border" />
                  </div>
                  <div className="_404-text">
                    <p>
                      A página que você solicitou está inacessível ou não existe!
                      <br /> Para que evitar interrupções na sua navegação,
                      <br /> retorne para página inicial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
