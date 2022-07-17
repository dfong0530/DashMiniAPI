
const GetRandomData = () => {
 let final = [];
 for(let i = 0; i < 12; i++){
    final.push(Math.floor(Math.random() * 20) + 1);
 }
 return final;
}

module.exports = GetRandomData;