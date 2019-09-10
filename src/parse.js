
import * as babylon from "babylon";

export function parse(code) {
    return babylon.parse(code, {
        sourceType: "module", // default: "script"
    })
}