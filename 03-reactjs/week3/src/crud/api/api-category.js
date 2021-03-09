import axios from 'axios'
import apiURL from '../config/config-url'

const listCategories = async () =>{
    try{
        let response = await axios.get(`${apiURL}/category`)
        return await response.data
    } catch (err) {
        return await err.message
    }
}

const create = async (cate) => {
    try {
        let response = await axios.post(`${apiURL}/category/`,cate)
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  
  const del = async (id) => {
    try {
        let response = await axios.delete(`${apiURL}/category/${id}`)
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  
  const update= async (cate) => {
    console.log(cate)
    try {
        let response = await axios.put(`${apiURL}/category/${cate.cate_id}`,cate)
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  

export{
    listCategories,
    create,
    del,
    update
}