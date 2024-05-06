import axios from 'axios';
import { Observable } from 'rxjs';

// const api = axios.create({ baseURL: "http://localhost:8000/api/v1" })
// export default api;

const getHeaders = () => {
   const userToken = localStorage.getItem("userToken");

   let headers = {};

   headers = { Authorization: 'Bearer ' + userToken };
   // if (userToken !== null) {
   //    headers = { Authorization: 'Bearer ' + userToken };
   // } else {
   //    console.log("token is not found")
   // }

   return headers;
}

const post = (url, paramsObj) => {
   console.log("url :", url)
   console.log("paramsObj :", paramsObj)
   const headers = getHeaders()
   try {
      return new Observable((observer) => {
         const params = { ...paramsObj };
         console.log(params)
         axios.post(url, params, { headers })
            .then((response) => {
               observer.next(response.data);
               console.log(response.data)
               observer.complete();
            })
            .catch((error) => {
               if (axios.isCancel(error)) {
                  observer.next(error.message);
                  observer.complete();
                  console.log('Request cancelled:', error.message);
               } else if (error.response && error.response.status === 401) {
                  observer.next(error.message);
                  observer.complete();
               } else {
                  observer.error(error)
                  observer.complete();
               }
            }
            )
      })
   } catch (err) {
      console.log('catch err', err);
   }
};

const get = (url, paramsObj, cancelToken) => {
   const headers = getHeaders()
   try {
      return new Observable((observer) => {
         const params = { ...paramsObj };

         const _params = cancelToken ? { params, headers, cancelToken: cancelToken } : { params, headers };

         axios.get(url, _params)
            .then((response) => {
               observer.next(response.data);
               observer.complete();
            })
            .catch((error) => {
               if (axios.isCancel(error)) {
                  observer.next(error.message);
                  observer.complete();
                  console.log('Request canceled:', error.message);
               } else if (error.response && error.response.status === 401) {
                  console.log('Unauthorized:', error.response.data);
                  observer.error(error);
                  observer.complete();
               } else {
                  console.log('Axios Error:', error);
                  observer.error(error);
                  observer.complete();
               }
            }
            )
      })
   } catch (err) {
      console.log('catch err', err);
   }
}

const put = (url, paramsObj) => {
   const headers = getHeaders()
   try {
      return new Observable((observer) => {
         const params = { ...paramsObj };

         axios.put(url, params, { headers })
            .then((response) => {
               observer.next(response);
               observer.complete();
            })
            .catch((error) => {
               if (axios.isCancel(error)) {
                  observer.next(error.message);
                  observer.complete();
                  console.log('Request canceled:', error.message);
               } else if (error.response && error.response.status === 401) {
                  console.log('Unauthorized:', error.response.data);
                  observer.error(error);
                  observer.complete();
               } else {
                  console.log('Axios Error:', error);
                  observer.error(error);
                  observer.complete();
               }
            })
      });
   } catch (err) {
      console.log('catch err', err);
   }
}

const deleteApi = (url, paramsObj) => {
   const headers = getHeaders()
   try {
      return new Observable((observer) => {
         const params = { ...paramsObj };

         axios.delete(url, { params, headers })
            .then((response) => {
               observer.next(response.data);
               observer.complete();
            }).catch((error) => {
               if (axios.isCancel(error)) {
                  observer.next(error.message);
                  observer.complete();
                  console.log('Request canceled:', error.message);
               } else if (error.response && error.response.status === 401) {
                  console.log('Unauthorized:', error.response.data);
                  observer.error(error);
                  observer.complete();
               } else {
                  console.log('Axios Error:', error);
                  observer.error(error);
                  observer.complete();
               }
            }
            )
      });
   } catch (err) {
      console.log('catch err', err)
   }
}


export const API = {
   post,
   get,
   put,
   deleteApi
};