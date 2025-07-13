/** @type {import("prettier").Config} */
module.exports = {
  semi: false, // kết thúc dòng bằng dấu chấm phẩy
  singleQuote: true, // dùng nháy đơn thay vì nháy kép
  tabWidth: 2, // mỗi tab = 2 khoảng trắng
  useTabs: false, // dùng spaces thay vì tab
  trailingComma: 'es5', // thêm dấu phẩy cuối mảng/đối tượng ES5
  printWidth: 100, // giới hạn mỗi dòng tối đa 100 ký tự
  bracketSpacing: true, // có khoảng trắng giữa { a: 1 }
  arrowParens: 'always', // luôn có ngoặc đơn trong arrow function (ex: (x) => x)
  plugins: ['prettier-plugin-tailwindcss'], // sắp xếp class tailwind
  tailwindConfig: './tailwind.config.js',
}
