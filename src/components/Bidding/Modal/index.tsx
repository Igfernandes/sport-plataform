import { Modal } from 'react-bootstrap';
import scss from '@styles/components/modal/licitacao.module.scss';
import { useState } from 'react';
import { useModalBidding } from './hooks/useModalBidding';
import { Label } from '@components/shared/forms/Label';
import { Input } from '@components/shared/forms/Input';
import { Img } from '@components/shared/content/Img';
import { FormGroup } from '@components/shared/forms/FormGroup';
import ReactInputMask from 'react-input-mask';
import { SelectGroup } from '@components/shared/forms/SelectGroup';
import { When } from '@components/shared/utilities/when';

type BiddinModalProps = {
  show: boolean;
  handleClose: () => void;
  id: number;
};

export function BiddingModal({ show, handleClose, id }: BiddinModalProps) {
  const [files, setFiles] = useState(1);
  const { handleGetCities, handleUpdatingFileName, cities, states, response, isLoading, onSubmit } =
    useModalBidding();

  return (
    <>
      <Modal show={show} onHide={handleClose} className="licitacoesModal">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal_form">
            <form onSubmit={onSubmit} encType="multipart/form-data">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-md-4">
                    <div className="modal_form_file">
                      <div className={scss.licitacoesModal_form_file}>
                        <Label
                          htmlFor="file_company"
                          className={scss.licitacoesModal_form_file_label}
                        >
                          <span className={scss.licitacoesModal_form_file_span}>
                            Enviar logo da empresa
                          </span>
                          <Input
                            type="file"
                            name="logotipo"
                            id="file_company"
                            className={scss.licitacoesModal_form_file_input}
                            onChange={handleUpdatingFileName}
                            accept="image/png, image/jpeg, image/jpg"
                            required
                          />
                          <div className={scss.licitacoesModal_form_file_icon}>
                            <Img src="/img/icon/folder.png" alt="Icon folder" />
                          </div>
                        </Label>
                      </div>
                      {[...Array(files)].map((x, key) => (
                        <div className={scss.licitacoesModal_form_file} key={key}>
                          <Label htmlFor="" className={scss.licitacoesModal_form_file_label}>
                            <span className={scss.licitacoesModal_form_file_span}>
                              Enviar arquivo
                            </span>
                            <Input
                              type="file"
                              name={`docs[${key}]`}
                              className={scss.licitacoesModal_form_file_input}
                              accept="image/*,.pdf,.doc"
                              onChange={handleUpdatingFileName}
                            />
                            <div className={scss.licitacoesModal_form_file_icon}>
                              <Img src="/img/icon/folder.png" alt="Icon folder" />
                            </div>
                          </Label>
                        </div>
                      ))}
                      <div
                        className={scss.licitacoesModal_form_fileAdd}
                        onClick={() => setFiles(files + 1)}
                      >
                        <span className={scss.licitacoesModal_form_fileAdd_span}>+</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-8">
                    <div className="container-fluid">
                      <div className="row my-2">
                        <div className="col-12 col-md-8">
                          <FormGroup
                            label="Nome"
                            htmlfor="nome"
                            type="text"
                            name="nome"
                            id="nome"
                            required={true}
                            placeholder="Insira seu nome"
                          />
                        </div>
                        <div className="col-12 col-md-4">
                          <FormGroup
                            label="Empresa"
                            htmlfor="Empresa"
                            type="text"
                            name="empresa"
                            id="empresa"
                            required={true}
                            placeholder="Insira a empresa"
                          />
                        </div>
                      </div>
                      <div className="row my-2">
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <Label htmlFor="cnpj">CNPJ</Label>
                            <ReactInputMask
                              mask="99.999.999/9999-99"
                              name="cnpj"
                              id="cnpj"
                              className="form-control"
                              placeholder="Insira seu cnpj"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <Label htmlFor="celular">Celular</Label>
                            <ReactInputMask
                              mask="(99) 9 9999-9999"
                              name="celular"
                              className="form-control"
                              id="celular"
                              placeholder="99 99999-9999"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row my-2">
                        <div className="col-12 col-md-4">
                          <SelectGroup
                            label="Estado"
                            htmlfor="estado"
                            name="estado"
                            id="estado"
                            required={true}
                            onChange={handleGetCities}
                          >
                            <option value="">SELECIONE O ESTADO</option>
                            {states.map((item: any, key: number) => (
                              <option key={key} value={item.UF}>
                                {item.Estado}
                              </option>
                            ))}
                          </SelectGroup>
                        </div>
                        <div className="col-12 col-md-4">
                          <SelectGroup
                            label="Cidade"
                            htmlfor="cidade"
                            name="cidade"
                            id="cidade"
                            required={true}
                          >
                            <option value="">SELECIONE A CIDADE</option>
                            {cities.map((item: any, key: number) => (
                              <option key={key} value={item}>
                                {item}
                              </option>
                            ))}
                          </SelectGroup>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="form-group">
                            <FormGroup
                              label="Bairro"
                              type="text"
                              name="bairro"
                              id="bairro"
                              required={true}
                              placeholder="Insira seu Bairro"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row my-2">
                        <div className="col-12 col-md-8">
                          <div className="form-group">
                            <label htmlFor="complemento">Complemento</label>
                            <input
                              type="text"
                              name="complemento"
                              className="form-control"
                              id="complemento"
                              placeholder="Insira o complemento"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <label htmlFor="email">E-mail</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            placeholder="Insira seu e-mail"
                            required
                          />
                        </div>
                      </div>
                      <div className="row my-2">
                        <div className="col-12">
                          <label htmlFor="observacoes">OBS</label>
                          <textarea
                            name="observacoes"
                            id="observacoes"
                            className="form-control"
                            cols={30}
                            rows={7}
                            placeholder="Adicione uma observação"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className={scss.licitacoesModal_form_submit}>
                            <input type="hidden" name="licitacao" value={id} />
                            <When value={!isLoading}>
                              <button
                                type="submit"
                                className={scss.licitacoesModal_form_submit_button}
                              >
                                Enviar Proposta
                              </button>
                            </When>
                            <When value={isLoading}>
                              <span className={scss.licitacoesModal_form_submit_button}>
                                {response}
                              </span>
                            </When>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
