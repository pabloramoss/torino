import axios from "axios";
import Papa from "papaparse";

export default {
  list: async () =>{
    return axios.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vQma5kSQIJ28kthrVUa1myXoZ4vPbyBT8z8m2DnAU6RrTIPxZr0rYE8lz0XlYxzdo2AvJJ0DuWS16ZJ/pub?output=csv", {
      responseType: "blob"
    }).then(
      response =>{
        return new Promise((resolve, reject)=>{
          Papa.parse(response.data, {
            header: true,
            complete: results => {
              return resolve(results.data);
            },
            error: (error)=> {
              return reject(error.message);
            }
          });
        })
      }
    );
  },
};