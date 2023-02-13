export function htmlFromStr(str: string) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    console.log(doc);
    return doc.body.innerHTML;
}
