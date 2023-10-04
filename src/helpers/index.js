
function getResult(data) {
    if(data) {
        let total = 0;
        data.forEach( item => {
            total += item.score;
        });

        let result = total / data.length;
        
        return Math.floor(result);
    }
}

export {
    getResult
}