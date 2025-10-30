export function dateFormatter(date) {
  if (!date) return 'Fecha no disponible';

  try {
    const formatter = new Intl.DateTimeFormat('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC', // Evita conversión a zona local
    });
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) return 'Fecha inválida';
    return formatter.format(dateObj);
  } catch (error) {
    console.error('Error formateando fecha:', error);
    return 'Fecha no disponible';
  }
}
