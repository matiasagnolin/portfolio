(function () {
  const btn = document.getElementById('cv-action-btn');
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const pdfUrl = 'cv.pdf';

  if (isMobile && navigator.share) {
    btn.textContent = '↑ Share CV';
    btn.addEventListener('click', async function (e) {
      e.preventDefault();
      try {
        const response = await fetch(pdfUrl);
        const blob = await response.blob();
        const file = new File([blob], 'Matias-Agnolin-CV.pdf', { type: 'application/pdf' });
        await navigator.share({
          files: [file],
          title: 'Matías Agnolin - CV',
          text: 'Software Engineer CV',
        });
      } catch (err) {
        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = 'Matias-Agnolin-CV.pdf';
        a.click();
      }
    });
  } else {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const a = document.createElement('a');
      a.href = pdfUrl;
      a.download = 'Matias-Agnolin-CV.pdf';
      a.click();
    });
  }
})();
