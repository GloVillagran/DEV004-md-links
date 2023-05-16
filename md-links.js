export const searchLinks = (fileContents, filePath) => {
    const string = fileContents
    let regex = /(?=\[(!\[.+?\]\(.+?\)|.+?)]\((https:\/\/[^\)]+)\))/gi

    const matchResult = [...string.matchAll(regex)]; // spread operation (copiar objetos o array)
   
    let links = matchResult.map((m) => ({ text: m[1], href: m[2], file: filePath }))
    
    return links
}


