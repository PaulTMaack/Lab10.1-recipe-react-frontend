const APIURL = '/api/recipes/';


export async function getRecipes() {

  return fetch(APIURL)
  .then(resp => writeError())
  }

  export async function createRecipe(recipe) {
    return fetch(APIURL, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(recipe)
    })
    .then(resp => writeError())
  }
  
  export async function removeRecipe(id) {
    const deleteURL = APIURL + id;
    return fetch(deleteURL, {
      method: 'delete'
    })
      .then(resp => writeError())
  }
  export async function writeError(props){
     if (!props.ok) {
          if (props.status >= 400 && props.status < 500) {
            return props.json().then(data => {
              let err = { errorMessage: data.message };
              throw err;
            })
          } else {
            let err = { errorMessage: 'Please try again later, server is not responding' };
            throw err;
          }
        }
        return props.json();
      }
  
