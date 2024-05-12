const generateId = () => {
    const id = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    return id
}

export default generateId