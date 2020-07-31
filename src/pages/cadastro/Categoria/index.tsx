import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

interface FormProps {
    nome: string;
    descricao: string;
    cor: string;
}

const CadastroCategoria: React.FC = () => {
    const initialValues = {
        nome: '',
        descricao: '',
        cor: '#131313'
    };
    const [values, setValues] = useState<FormProps>(initialValues);
    const [categorias, setCategorias] = useState<Array<FormProps>>([]);

    function setValue(chave: string, valor: string) {
        setValues({
          ...values,
          [chave]: valor,
        })
    }

    function handleChange(event: React.FormEvent<HTMLInputElement>) {
        const { name, value} = event.currentTarget;
        setValue(name, value);
    }
    
    return (
        <PageDefault>
            <h1>Cadastro de Categoria {values.nome}</h1>

            <form onSubmit={(event) => { 
                event.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                  ]);

                  setValues(initialValues);
            }}>
                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição:"
                    type="????"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />
                {/* <div>
                <label>
                    Descrição:
                    <textarea
                    type="text"
                    value={values.descricao}
                    name="descricao"
                    onChange={handleChange}
                    />
                </label>
                </div> */}

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />
                {/* <div>
                <label>
                    Cor:
                    <input
                    type="color"
                    value={values.cor}
                    name="cor"
                    onChange={handleChange}
                    />
                </label>
                </div> */}

            <button>
                Cadastrar
            </button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria}_${index}`}>
                            {categoria.nome}
                        </li>
                    );
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;