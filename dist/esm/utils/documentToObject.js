export function docToObject(doc) {
    if (typeof doc.toJSON === 'function')
        return doc.toJSON();
    return null;
}
export const mongooseDocumentToJsonObject = docToObject;
//# sourceMappingURL=documentToObject.js.map