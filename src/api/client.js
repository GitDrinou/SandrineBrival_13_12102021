
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
