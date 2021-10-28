
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

    if (secureKey === null ) secureKey = JSON.parse(sessionStorage.getItem("sKAB"))
    
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
