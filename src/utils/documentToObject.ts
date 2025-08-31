export function docToObject<T>(doc: any): T | null {
  if (typeof doc.toJSON === 'function') return doc.toJSON() as T;
  return null;
}

export const mongooseDocumentToJsonObject = docToObject;
