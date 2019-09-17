
import * as babel from "babel-core";
console.log("=============示例2，写一个简单的babel插件 start================")

const code = "foo === bar"
// 对应的Ast结构
// {
//     type: "BinaryExpression",
//     operator: "===",
//     left: {
//       type: "Identifier",
//       name: "foo"
//     },
//     right: {
//       type: "Identifier",
//       name: "bar"
//     }
// }


function plugin({ types: t }) {
    return {
        visitor: {
            BinaryExpression(path) {
                if (path.node.operator !== "===") {
                    return;
                }
                path.node.left = t.identifier("sebmck");
                path.node.right = t.identifier("dork");
            }
        }
    };
}
const result = babel.transform(code, {
    plugins: [
        plugin
    ]
});

console.log(result.code); // const result = 3;

console.log("=============示例2，写一个简单的babel插件 end================")