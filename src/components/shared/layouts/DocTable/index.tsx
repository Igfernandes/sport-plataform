import { saveAs } from 'file-saver';
import scss from '@styles/components/doctable.module.scss';
import { useEffect, useState } from 'react';
import { When } from '../../utilities/when';
import { A } from '../../content/A';
import { Img } from '../../content/Img';
import { FilesShape } from './type';
import moment from 'moment';

export type FilesProps = {
  title: string;
  files: Array<FilesShape>;
};

export default function DocTable({ files, title }: FilesProps) {
  const date = new Date();
  const [year, setYear] = useState<number>(date.getFullYear());
  const [data, setData] = useState(files);

  useEffect(() => {
    setData(files);
  }, [files]);

  return (
    <>
      <div className={scss.sport_doctable}>
        <div className={scss.sport_doctable_head}>
          <div className={scss.sport_doctable_title}>
            <h3 className={scss.sport_doctable_title_h3}>{title}</h3>
          </div>
        </div>
        <div>
          <div className={scss.sport_doctable_btn}>
            <ul className={scss.sport_doctable_btn_ul}>
              {[].map((yearRef: number, key: number) => (
                <li
                  key={key}
                  className={scss.sport_doctable_btn_ul_li}
                  onClick={() => setYear(yearRef)}
                >
                  {yearRef}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={scss.sport_doctable_body}>
          <div className={scss.sport_doctable_table}>
            <div className={scss.sport_doctable_table_thead}>
              <div className={scss.sport_doctable_table_tr}>
                <div className={scss.sport_doctable_table_th}>
                  <strong>Arquivo</strong>
                </div>
                <div className={scss.sport_doctable_table_th}>
                  <strong>Data</strong>
                </div>
                <div className={scss.sport_doctable_table_th}>
                  <strong>Donwload</strong>
                </div>
              </div>
            </div>
            <div className={scss.sport_doctable_table_tbody}>
              {data.map((file: FilesShape, key: number) => (
                <div className={scss.sport_doctable_table_tr} key={key}>
                  <div className={scss.sport_doctable_table_td}>
                    <p className={scss.sport_doctable_table_td_p}>
                      {file.titulo.replaceAll('_arquivo', '')}
                    </p>
                  </div>
                  <div className={scss.sport_doctable_table_td}>
                    <p className={scss.sport_doctable_table_td_p}>
                      {moment(file.data).format('DD/MM/YYYY')}
                    </p>
                  </div>
                  <div className={scss.sport_doctable_table_td}>
                    <a
                      href={file.link}
                      target={'_blank'}
                      download={file.link}
                      rel="noreferrer"
                      onClick={({ currentTarget }) => saveAs(currentTarget.href, file.titulo)}
                      className={scss.sport_doctable_table_a}
                    >
                      <Img src="/img/icon/donwload.png" alt="Icon Download" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
