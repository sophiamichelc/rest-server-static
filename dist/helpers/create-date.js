"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDate = void 0;
const createDate = () => {
    const date = new Date();
    const parts = new Intl.DateTimeFormat("es-PE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).formatToParts(date);
    const day = parts.find((p) => p.type === "day")?.value;
    const month = parts.find((p) => p.type === "month")?.value;
    const year = parts.find((p) => p.type === "year")?.value;
    return `${day}-${month}-${year}`;
};
exports.createDate = createDate;
//# sourceMappingURL=create-date.js.map