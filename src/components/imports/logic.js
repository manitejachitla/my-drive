import moment from 'moment'
export const getSize=(size,unit='MB')=>{
    let modifiedSize=size/(1024 * 1024)
    if (unit==='GB'){
        modifiedSize=modifiedSize/1024
    }
    return modifiedSize.toFixed(2)+" "+unit;
}
export const getModifedDate=(date,format='MB')=>{
    let modifiedSize=date
    return moment(modifiedSize).format('DD MMM, hh:mm a');
}