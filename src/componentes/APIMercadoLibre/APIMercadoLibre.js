import { useEffect, useState } from "react";

const API_URL = `https://api.mercadolibre.com/sites/MLA/search?q=`;

export async function getProductsDefault(categoria = 'pantallas') {
  try {
    debugger;

    const response = await fetch(`${API_URL + categoria}`);
    const data = await response.json();
    console.log("tipo", typeof data.results);

    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductsByCategory(categoria = 'pantallas') {
  try {
    debugger;
    const response = await fetch(`${API_URL + categoria}`);
    const data = await response.json();

    // let res = data.results.filter((x) => x.id === id);
    console.log("tipo", typeof data.results);
    console.log(data);
    return data.results;
  } catch (error) {
    console.error(error);
  }
}


export async function getProductsById(id) {
    try {
      debugger;
      const response = await fetch(`${API_URL + 'lap'}`);
      const data = await response.json();
  
      // let res = data.results.filter((x) => x.id === id);
      console.log("tipo", typeof data.results);
      console.log(data);
      return data.results;
    } catch (error) {
      console.error(error);
    }
  }

  export async function getProductsByCategoryById(categoria, id) {
    try {
      debugger;
      const response = await fetch(`${API_URL + categoria}`);
      const data = await response.json();
  
       let res = data.results.filter((x) => x.id === id);
     
      console.log(res);
      return res;
    } catch (error) {
      console.error(error);
    }
  }
  