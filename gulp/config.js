const destPath = 'docs';

const config = {
  src: {
    root: 'src',
    sass: 'src/sass',
    css: 'src/css',
    html: 'src/html',
    js: 'src/js',
    img: 'src/img',
  },
  dest: {
    root: destPath,
    css: `${destPath}/css`,
    js: `${destPath}/js`,
    img: `${destPath}/images`,
  },
};

module.exports = config;
