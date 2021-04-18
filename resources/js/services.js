import Http from './utils/Http'
import Transformer from './utils/Transformer'

export function submit_application(data) {

              return  new Promise((resolve, reject) => {
                    Http.post('application_form', data)
                            .then(res => {
                                const data = Transformer.fetch(res.data)
                                return resolve(data)
                            })
                            .catch((err) => {

                                const statusCode = err.response.status;
                                const data = {
                                    error: null,
                                    statusCode,
                                };

                                if (statusCode === 422) {

                                    const resetErrors = {
                                        errors: err.response.data,
                                        replace: false,
                                        searchStr: '',
                                        replaceStr: '',
                                    };
                                    data.error = resetErrors.errors;
                                } else if (statusCode === 401) {
                                    data.error = err.response.data.message;
                                }
                                return reject(data);
                            })
                })

}
