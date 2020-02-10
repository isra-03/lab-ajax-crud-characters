class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList=async ()=> {
    const {data} =await axios.get(this.BASE_URL+'/characters')
    return data
  }

  getOneRegister = async(id) =>{
    const {data} = await axios.get (this.BASE_URL + `/characters/${id}`)
    return data
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister (id) {

  }
}
