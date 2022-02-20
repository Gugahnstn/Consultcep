async function viacep(querycep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${querycep}/json/`)
    const data = response.json()
    return data;
  } catch (error) {
    console.error(error)
  }
}

export default viacep;