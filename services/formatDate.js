export const formatDate = (date) => {
    const dateToFormat = new Date(date)
    const hours = dateToFormat.getHours().toString().padStart(2, "0")
    const minutes = dateToFormat.getMinutes().toString().padStart(2, "0")
    return `${dateToFormat.toLocaleDateString("uk-UA", {day: "numeric", month: "long", year:"numeric"})} | ${hours}:${minutes}`

}

