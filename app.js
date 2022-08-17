window.jsPDF = window.jspdf.jsPDF;

const doc = new jsPDF();

const toPdf = document.getElementById('table');

doc.autoTable({
    html: '#table',
});
function downloadPdf() {
    doc.save('table.pdf');
}
