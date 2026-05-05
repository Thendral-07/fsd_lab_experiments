const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (url === '/user') {
        if (method === 'GET') {
            // 1. Serve the Input Field via GET
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <!DOCTYPE html>
                <html>
                <head><title>Input User</title></head>
                <body>
                    <h2>Enter User Details</h2>
                    <form action="/user" method="POST">
                        <label>Name:</label><br>
                        <input type="text" name="username" required><br><br>
                        <label>Age:</label><br>
                        <input type="number" name="age" required><br><br>
                        <button type="submit">Submit to POST</button>
                    </form>
                </body>
                </html>
            `);

        } else if (method === 'POST') {
            // 2. Capture and Display the Data via POST
            let body = '';
            
            // Collect the data stream
            req.on('data', chunk => {
                body += chunk.toString();
            });

            req.on('end', () => {
                // Parse the form-encoded data (e.g., username=John&age=30)
                const formData = querystring.parse(body);
                
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <!DOCTYPE html>
                    <html>
                    <head><title>Post Result</title></head>
                    <body>
                        <h2>Details Received via POST</h2>
                        <p><strong>Name:</strong> ${formData.username}</p>
                        <p><strong>Age:</strong> ${formData.age}</p>
                        <a href="/user">Back to Input</a>
                    </body>
                    </html>
                `);
            });
        }
    } else {
        res.writeHead(404);
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/user');
});
