# bmh231-odev1

BMH231 Web Programlama Ödev 1 için küçük Node.js HTTP sunucusu (yalnızca `http` modülü ve `dayjs`).

## Kurulum ve çalıştırma

```
git clone https://github.com/ziad-waled/bmh231-odev1.git
cd bmh231-odev1
npm install
npm start
```

Sunucu http://localhost:3000 adresinde çalışır.

## Yollar

- `/` : ana sayfa (HTML), /hakkimda bağlantısı
- `/hakkimda` : tanıtım sayfası (HTML)
- `/api/ders` : ders kodu, adı ve günü (JSON)
- `/api/agep` : AGEP son teslim tarihi ve kalan gün (JSON, dayjs)
- diğer yollar: 404, GET dışındaki yöntemler: 405 (`Allow: GET`)
