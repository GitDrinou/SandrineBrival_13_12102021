/**
 * FUNCTION FOR POST API METHOD
 * @param {string} endpoint URL + API Endpoint
 * @param {*} body datas to be compare
 * @returns an object with status, data, headers and url
 */
export async function clientPost(endpoint, body) {
    
    let data

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        data = await response.json()
        if (response.ok) {
            return {
                status: response.status,
                data,
                headers: response.headers,
                url: response.url,
            }
        }
        throw new Error(response.statusText)
    } catch (err) {
        return Promise.reject(data)
    }
}

/**
 * FUNCTION FOR GET API METHOD
 * @param {string} endpoint URL + API Endpoint
 * @returns an object with status, data, headers and url
 */
 export async function clientGet(endpoint, queryData) {
    
    let data

    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(queryData)
        })
        data = await response.json()
        if (response.ok) {
            return {
                status: response.status,
                data,
                headers: response.headers,
                url: response.url,
            }
        }
        throw new Error(response.statusText)
    } catch (err) {
        return Promise.reject(data)
    }
}

/**
 * FUNCTION FOR POST API METHOD WITH TOKEN AUTENTICATION
 * @param {string} endpoint URL + API Endpoint
 * @param {string} secureKey Token key
 * @returns an object with status, data, headers and url
 */
export async function clientPostAuthentication(endpoint, secureKey) {
    
    let data

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': secureKey
            }
        })
        data = await response.json()
        if (response.ok) {
            return {
                status: response.status,
                data,
                headers: response.headers,
                url: response.url,
            }
        }
        throw new Error(response.statusText)
    } catch (err) {
        return Promise.reject(data)
    }
}

/**
 * FUNCTION FOR PUT API METHOD WITH TOKEN AUTENTICATION
 * @param {string} endpoint URL + API Endpoint
 * @param {*} body datas to be updated
 * @param {string} secureKey Token key
 * @returns an object with status, data, headers and url
 */
export async function clientPutAuthentication(endpoint, body, secureKey) {
    let data
    
    try {
        const response = await fetch(endpoint, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Authorization': secureKey
            },
            body:  JSON.stringify(body)
        })
        data = await response.json()
        if (response.ok) {
            return {
                status: response.status,
                data,
                headers: response.headers,
                url: response.url,
            }
        }
        throw new Error(response.statusText)
    } catch (err) {
        return Promise.reject(data)
    }
}

/**
 * FUNCTION FOR GET API METHOD WITH TOKEN AUTENTICATION
 * @param {string} endpoint URL + API Endpoint
 * @param {string} secureKey Token key
 * @returns an object with status, data, headers and url 
 */
export async function clientGetAuthentication(endpoint, secureKey) {
   
    let data

    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': secureKey
            }
        })
        data = await response.json()
        if (response.ok) {
            return {
                status: response.status,
                data,
                headers: response.headers,
                url: response.url,
            }
        }
        throw new Error(response.statusText)
    } catch (err) {
        return Promise.reject(data)
    }
}
