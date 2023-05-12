//calculo stats
export const calculateStats = (links, validate = false) => {
    const count = links.length;
    const linksUniqueArray = [...new Set(links.map(link => link.href))] //new Set trae solo los links unique
    const stats = {
      total: count,
      unique: linksUniqueArray.length
    }

    if(validate) {
      stats.broken = links.reduce((accumulator, currentElement) => {
        accumulator += currentElement.status < 400 || currentElement.status == 'Es un enlace interno' ? 0 : 1;
        return accumulator;
      }, 0)
    }
  return stats
  ;
}