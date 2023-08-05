import moment from 'moment'
export const getSize=(size,unit='MB')=>{
    let modifiedSize=size/1000000
    return modifiedSize.toFixed(2)+" "+unit;
}
export const getModifedDate=(date,format='MB')=>{
    let modifiedSize=date
    return moment(modifiedSize).format('DD MMM, hh:mm a');
}