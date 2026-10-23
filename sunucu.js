const http = require('http');

const PORT = 3000;

function gonder(res, kod, tur, govde, ekBasliklar = {}) {
  res.writeHead(kod, { 'Content-Type': `${tur}; charset=utf-8`, ...ekBasliklar });
  res.end(govde);
}

const sunucu = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  const yol = new URL(req.url, `http://${req.headers.host || 'localhost'}`).pathname;

  if (yol === '/') {
    return gonder(res, 200, 'text/html',
      '<!DOCTYPE html><html lang="tr"><head><meta charset="utf-8"><title>Ana Sayfa</title></head>' +
      '<body><h1>BMH231 Web Programlama Ödev 1</h1><a href="/hakkimda">Hakkımda</a></body></html>');
  }
  return gonder(res, 404, 'text/plain', 'Sayfa bulunamadı');
});

sunucu.listen(PORT, () => console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`));
