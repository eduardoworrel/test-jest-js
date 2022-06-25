module.exports = {
 removeDots: (str)=>{
     while(str.includes('.')){
        str = str.replace('.','')
     }
     return str;
 }
}