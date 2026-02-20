const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'projects');
if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        console.log(`${file}: ${stats.size} bytes`);
        if (stats.size === 0) {
            console.log(`Deleting empty file: ${file}`);
            fs.unlinkSync(filePath);
        }
    });
} else {
    console.log('Directory not found');
}
