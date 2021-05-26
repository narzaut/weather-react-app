export const dateBuilder = (date) => {
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  const weekdays = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
  const dateString = weekdays[date.getDay() - 1] + ' ' + date.getDate() + ' de ' + months[date.getMonth()] + ' del ' + date.getFullYear()
  
	return dateString
}