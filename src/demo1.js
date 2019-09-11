import { parse } from "./parse";
import traverse from "babel-traverse";
import * as t from "babel-types";
import generate from "babel-generator";
import template from "babel-template";
console.log("=============示例1，涉及到babel各个库的简单调用 start================")
const code = `function square(n) {
    return n * n;
  }`
// 获取原始ast,
const ast = parse(code)
// 例子1 对ast遍历，找到Identifier为n的，修改成x
traverse(ast, {
    enter(path) {
        if (
            path.node.type === "Identifier" &&
            path.node.name === "n"
        ) {
            path.node.name = "x";
        }
    }
});
// 生成带修改后的代码
console.log(generate(ast, {}, code));
// output =
// { code: 'function square(x) {\n  return x * x;\n}',
//   map: null,
//   rawMappings: null }

// 例子2 同例子1,只不过判断的地方，用了babel-types
traverse(ast, {
    enter(path) {
        if (t.isIdentifier(path.node, { name: "x" })) {
            path.node.name = "b";
        }
    }
});
console.log(generate(ast, {}, code));
// output =
// { code: 'function square(b) {\n  return b * b;\n}',
//   map: null,
//   rawMappings: null }


// 例子3 运用babel-template的字符串占位符
const buildRequire = template(`
  var IMPORT_NAME = require(SOURCE);
`);

const templateAst = buildRequire({
    IMPORT_NAME: t.identifier("myModule"),
    SOURCE: t.stringLiteral("my-module")
});

console.log(generate(templateAst).code);
// output 
// var myModule = require("my-module");


console.log("=============示例1，涉及到babel各个库的简单调用 end================")