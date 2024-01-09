import ReactInputMask from 'react-input-mask';
import scss from '../../styles/components/faleconosco.module.scss';
import { FormGroup } from '../shared/forms/FormGroup';
import { SelectGroup } from '../shared/forms/SelectGroup';
import { Label } from '../shared/forms/Label';
import { TextAreaGroup } from '../shared/forms/TextAreaGroup';
import { Button } from '../shared/content/Button';
import { Img } from '../shared/content/Img';
import { useContactUs } from './hooks/useContactUs';
import { When } from '../shared/utilities/when';

export function ContactUs() {
  const { cities, handleGetCities, states, response, handleSubmitContactForm, isLoading } =
    useContactUs();

  return (
    <>
      <div className={'container ' + scss.fale_conosco}>
        <div className="row">
          <div className={'col-12 ' + scss.linha}>
            <div>
              <p className={scss.form_description_p}>
                Preencha os campos abaixo e clique em enviar
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 ">
            <div className="form mb-4">
              <form onSubmit={handleSubmitContactForm}>
                <FormGroup
                  label="NOME"
                  type="text"
                  name="nome"
                  placeholder="Insira o seu nome"
                  required={true}
                  classGroup={{
                    input: 'my-2',
                  }}
                />
                <FormGroup
                  label="E-MAIL"
                  type="email"
                  name="email"
                  placeholder="Insira o seu melhor e-mail"
                  required={true}
                  classGroup={{
                    input: 'my-2',
                  }}
                />
                <SelectGroup
                  label="ESTADO"
                  name="estado"
                  required={true}
                  onChange={handleGetCities}
                  className={'my-2'}
                >
                  <option value="">SELECIONE O ESTADO</option>
                  {states.map((item: any, key: number) => (
                    <option key={key} value={item.UF}>
                      {item.Estado}
                    </option>
                  ))}
                </SelectGroup>

                <SelectGroup label="CIDADE" name="cidade" required={true} className={'my-2'}>
                  <option value="">SELECIONE A CIDADE</option>
                  {cities.map((city: string, key: number) => (
                    <option key={key} value={city}>
                      {city}
                    </option>
                  ))}
                </SelectGroup>

                <div className={'form-group my-2'}>
                  <Label htmlFor="celular">CELULAR</Label>
                  <ReactInputMask
                    mask="(99) 9 9999-9999"
                    name="celular"
                    placeholder="(99) 9 9999-9999"
                    className={scss.form_input}
                    id="celular"
                    required
                  />
                </div>

                <SelectGroup label="SETOR" name="setor" required={true} className="my-2">
                  <option value="">SETOR</option>
                  <option value="COMERCIAL">COMERCIAL</option>
                  <option value="DÚVIDAS">DÚVIDAS</option>
                  <option value="RJ">SUGESTÕES</option>
                  <option value="PB">RECLAMAÇÕES</option>
                  <option value="DÚVIDAS">FINANCEIRO</option>
                  <option value="RJ">OUVIDORIA</option>
                  <option value="PB">OUTROS</option>
                </SelectGroup>

                <FormGroup
                  label="ASSUNTO"
                  type="text"
                  name="assunto"
                  required={true}
                  className={'my-2'}
                />
                <TextAreaGroup
                  label="MENSAGEM"
                  name="mensagem"
                  required={true}
                  className={{
                    formGroup: `form-text-area ${scss.form_group} `,
                    textArea: `${scss.form_textArea}`,
                  }}
                />
                <div className="form-button justify-content-end d-flex">
                  <When value={!response}>
                    <Button
                      className={`py-1 px-2 rounded ${scss.form_button}`}
                      type="submit"
                      name="enviar"
                    >
                      Enviar
                    </Button>
                  </When>
                  <When value={isLoading}>
                    <span>{response}</span>
                  </When>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex d-none d-md-block">
            <div className="icons-contact-img">
              <Img src="/img/icons-contato.png" alt="icon cellphone" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
