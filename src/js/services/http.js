const sendContact = (api, contactData) => {
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactData)
    };

    return fetch(api, settings).then((response) => {
        if (response.ok) {
            const contentType = response.headers.get('Content-Type') || '';

            if (contentType.includes('application/json')) {
                return response.json().catch((error) => {
                    return Promise.reject(new ResponseError(`Invalid JSON: ${error.message}`));
                });
            }

            if (contentType.includes('text/html')) {
                return response.text().then((html) => {
                    return {
                        page_type: 'generic',
                        html
                    };
                }).catch((error) => {
                    return Promise.reject(new ResponseError(`HTML error: ${error.message}`));
                });
            }

            return Promise.reject(new ResponseError(`Invalid content type: ${contentType}`));
        }

        if (response.status == 404) {
            return Promise.reject(new NotFoundError(`Page not found: ${url}`));
        }

        return Promise.reject(new HttpError(`HTTP error: ${response.status}`));
    }).catch((error) => {
        return Promise.reject(new NetworkError(error.message));
    });
};


export default sendContact;
