console.log('teste')

const t: {time?: number, delay: number} = {delay: 1}

t.time = 2


console.log(t?.time)