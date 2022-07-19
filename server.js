const http = require('http');

const PORT = process.env.PORT || 5000;

const httpServer = http.createServer(() => {});

httpServer.listen(PORT, () => console.log(`Server listining port:${PORT}`));
