

export const dateNumberFormat = (date)=>{
    let dateArray = date.split('-')
    switch(dateArray[1]){
        case 'Jan': return `${dateArray[0]}-01-${dateArray[2]}`
        case 'Feb': return `${dateArray[0]}-02-${dateArray[2]}`
        case 'Mar': return `${dateArray[0]}-03-${dateArray[2]}`
        case 'Apr': return `${dateArray[0]}-04-${dateArray[2]}`
        case 'May': return `${dateArray[0]}-05-${dateArray[2]}`
        case 'Jun': return `${dateArray[0]}-06-${dateArray[2]}`
        case 'Jul': return `${dateArray[0]}-07-${dateArray[2]}`
        case 'Aug': return `${dateArray[0]}-08-${dateArray[2]}`
        case 'Sept': return `${dateArray[0]}-09-${dateArray[2]}`
        case 'Oct': return `${dateArray[0]}-10-${dateArray[2]}`
        case 'Nov': return `${dateArray[0]}-11-${dateArray[2]}`
        case 'Dec': return `${dateArray[0]}-12-${dateArray[2]}`
        default: return
    }
}

export const monthFullName = (date)=>{
    let dateArray = date.split('-')
    switch(dateArray[1]){
        case 'Jan': return 'January'
        case 'Feb': return 'February'
        case 'Mar': return 'March'
        case 'Apr': return 'April'
        case 'May': return 'May'
        case 'Jun': return 'June'
        case 'Jul': return 'July'
        case 'Aug': return 'August'
        case 'Sept': return 'September'
        case 'Oct': return 'October'
        case 'Nov': return 'November'
        case 'Dec': return 'December'
        default: return
    }
}

