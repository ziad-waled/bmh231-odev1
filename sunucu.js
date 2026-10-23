const http = require('http');
const dayjs = require('dayjs');

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
  if (yol === '/hakkimda') {
    return gonder(res, 200, 'text/html',
      '<!DOCTYPE html><html lang="tr"><head><meta charset="utf-8"><title>Hakkımda</title></head>' +
      '<body><h1>Hakkımda</h1><p>Ben Ziad, Yozgat Bozok Üniversitesi öğrencisiyim.</p>' +
      '<a href="/">Ana sayfa</a></body></html>');
  }
  if (yol === '/api/ders') {
    return gonder(res, 200, 'application/json',
      JSON.stringify({ kod: 'BMH231', ad: 'Web Programlama', gun: 'Cuma' }));
  }
  if (yol === '/api/agep') {
    const son = dayjs('2026-11-01');
    const kalan = son.diff(dayjs().startOf('day'), 'day');
    return gonder(res, 200, 'application/json',
      JSON.stringify({ sonTeslim: '01.11.2026', kalanGun: kalan }));
  }
  return gonder(res, 404, 'text/plain', 'Sayfa bulunamadı');
});

sunucu.listen(PORT, () => console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`));
