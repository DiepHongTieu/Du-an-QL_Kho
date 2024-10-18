let totalImportCost = 0;
let totalExportCost = 0;

function importProduct() {
    const product = document.getElementById('importProduct').value;
    const quantity = document.getElementById('importQuantity').value;
    const unitPrice = document.getElementById('importPrice').value;
    const shippingCost = document.getElementById('importShipping').value;

    const importCost = (quantity * unitPrice) + parseFloat(shippingCost);
    totalImportCost += importCost;

    document.getElementById('totalImportCost').innerHTML = `<h3>Total Import Cost: ${totalImportCost} USD</h3>`;

    alert(`Import Successful!\nProduct: ${product}\nTotal Cost: ${importCost} USD`);

    // Clear form
    document.getElementById('importForm').reset();
}

function exportProduct() {
    const product = document.getElementById('exportProduct').value;
    const quantity = document.getElementById('exportQuantity').value;
    const unitPrice = document.getElementById('exportPrice').value;
    const shippingCost = document.getElementById('exportShipping').value;

    const exportCost = (quantity * unitPrice) + parseFloat(shippingCost);
    totalExportCost += exportCost;

    document.getElementById('totalExportCost').innerHTML = `<h3>Total Export Cost: ${totalExportCost} USD</h3>`;

    alert(`Export Successful!\nProduct: ${product}\nTotal Cost: ${exportCost} USD`);

    // Clear form
    document.getElementById('exportForm').reset();
}
