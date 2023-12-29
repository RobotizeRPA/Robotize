
export const changeDate = (date: string) => {
    const change = date.split('de 2')
    const newDate = change[0]
    return newDate
}

