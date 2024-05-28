function downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/img/CV_Wouter_Selis.pdf';
    link.download = 'CV_Wouter_Selis.pdf';
    link.click();
}