const API_URL = 'https://swapi.dev/api/people/';

export async function getAllPeople() {
  try {
    const response = await fetch(API_URL);
      // Capturar y manejar el error de la API aquí
      if (response.status !== 200) {
        console.error('Error 404: Recurso no encontrado');
      } 

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getPerson(id){
  try {
    const response = await fetch(`${API_URL}${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}