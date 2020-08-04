import config from '../config';

const UrlCategorias = `${config.URL_BACKEND_TOP}/categorias`;
function getAllWithVideos() {
  return fetch(`${UrlCategorias}?_embed=videos`)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}
export default {
  getAllWithVideos,
};
