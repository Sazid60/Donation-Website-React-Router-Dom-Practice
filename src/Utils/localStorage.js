export const saveToLocalStorage = (data) => {
    const savedData = JSON.parse(localStorage.getItem("donate")) || [];
    const existingData = savedData.find(item => item.id === data.id);
    if (!existingData) {
        savedData.push(data)
        localStorage.setItem("donate", JSON.stringify(savedData))
        alert('Added')
    }
    else {
        alert('Already Added')
    }

}

export const getFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("donate")) || [];
    return data;
};
