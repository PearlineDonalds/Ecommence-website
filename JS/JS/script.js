function calculateTotal() {
    const processorPrice = parseInt(document.getElementById('processor').value);
    const ramPrice = parseInt(document.getElementById('ram').value);
    const storagePrice = parseInt(document.getElementById('storage').value);
    const graphicsPrice = parseInt(document.getElementById('graphics').value);

    const totalPrice = processorPrice + ramPrice + storagePrice + graphicsPrice;
    
    document.getElementById('total').value = totalPrice;
}
