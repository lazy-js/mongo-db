"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseDocumentToJsonObject = void 0;
exports.docToObject = docToObject;
function docToObject(doc) {
    if (typeof doc.toJSON === 'function')
        return doc.toJSON();
    return null;
}
exports.mongooseDocumentToJsonObject = docToObject;
//# sourceMappingURL=documentToObject.js.map