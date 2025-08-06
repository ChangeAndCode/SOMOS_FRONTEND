export function dateFormatter (date) {
    const formatter = new Intl.DateTimeFormat('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    return formatter.format(new Date(date))
}