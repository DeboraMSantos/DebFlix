// import React from 'react';
// import { Link } from 'react-router-dom';
// import PageDefault from '../../../components/PageDefault';

// function CadastroVideo() {
//   return (
//     <PageDefault>
//       <h1>Cadastro de Video</h1>

//       <Link to="/cadastro/categoria">
//         Cadastrar Categoria
//       </Link>
//     </PageDefault>
//   );
// }

// export default CadastroVideo;
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForms';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Games',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault paddingAll="100px">

      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find(
          (categoria) => categoria.titulo === values.categoria,
        );

        if (categoriaEscolhida) {
          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          })
            .then(() => {
              console.log('Cadastrou com sucesso!');
              history.push('/');
            }).catch((err) => { console.log(err); });
        } else {
          alert('categoria incorreta');
        }
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <br />
      <br />

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
