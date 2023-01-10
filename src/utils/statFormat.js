export const statModifier=(stat)=>{
    if(stat<1000) return stat;
    return `${(stat/1000).toFixed(1)}k`;
}