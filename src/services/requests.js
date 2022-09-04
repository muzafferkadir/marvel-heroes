import http from "./http.init";

const fetchCharactersList = async (params) => {
  // NOTE: to accept all params => await http.get("/characters", { params })
  const response = await http.get("/characters", {
    params: {
      name: params.name,
      limit: params.limit,
      offset: params.offset,
    },
  });

  return response.data?.data?.results;
};

const fetchCharacter = async (params) => {
  const response = await http.get(`/characters/${params.charID}`);

  return response?.data?.data?.results?.[0] || null;
};

const fetchComics = async (params) => {
  const response = await http.get(`/characters/${params.charID}/comics`, {
    params: { orderBy: "-onsaleDate", limit: 10 },
  });

  return response?.data?.data?.results || null;
};

export default { fetchCharactersList, fetchCharacter, fetchComics };
