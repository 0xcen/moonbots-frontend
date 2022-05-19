const fs = require('fs');
const { spawn } = require('node:child_process');

const root = './src/img/customer-logos';

const dirs = fs.readdirSync(root);

dirs.forEach((dir) => {
	// // console.log(dir.slice(-3));

	const name = dir.slice(0, dir.length - 4);

	if (['png', 'jpg'].includes(dir.slice(-3))) {
		const child = spawn(`cwebp -q 80 ${root}/${dir} -o ${root}/${name}.webp`, {
			stdio: 'inherit',
			shell: true,
		});
	}
});
