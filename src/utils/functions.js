/**
 * GLOBAL FUNCTION : capitalizedString()
 * @param {string} val 
 * @returns the string with the first letter capitalized
 */
export function capitalizeString(val) { 

    return (val+'').charAt(0).toUpperCase()+val.substr(1)
} 
