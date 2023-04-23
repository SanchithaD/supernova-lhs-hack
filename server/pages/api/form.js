"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 3027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "googleapis"
const external_googleapis_namespaceObject = require("googleapis");
;// CONCATENATED MODULE: ./src/pages/api/form.ts

async function handler(_req, res) {
    try {
        const { name , email , phone  } = _req.body;
        const parsedEmail = email.trim().toLowerCase();
        // Verify if email is valid
        if (!parsedEmail || !parsedEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/g)) return res.status(400).json({
            error: {
                message: "Email inv\xe1lido"
            }
        });
        // Verify if phone is valid
        if (!phone || !phone.match(/^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/g)) return res.status(400).json({
            error: {
                message: "Telefone em formato inv\xe1lido"
            }
        });
        // Verify if name is valid
        if (!name) return res.status(400).json({
            error: {
                message: "Nome inv\xe1lido"
            }
        });
        const config = JSON.parse(process.env.GOOGLE_SHEET_API_CONFIG || "{}");
        const auth = new external_googleapis_namespaceObject.google.auth.JWT(config["client_email"], undefined, config["private_key"], "https://www.googleapis.com/auth/spreadsheets");
        const googleSheet = external_googleapis_namespaceObject.google.sheets({
            version: "v4",
            auth
        });
        const spreadsheetId = process.env.GOOGLE_SHEET_ID || "";
        await googleSheet.spreadsheets.values.append({
            auth,
            spreadsheetId,
            valueInputOption: "USER_ENTERED",
            range: "Sheet1!A:B",
            requestBody: {
                values: [
                    [
                        name,
                        parsedEmail,
                        phone,
                        new Date().toString()
                    ]
                ]
            }
        });
        await googleSheet.spreadsheets.batchUpdate({
            spreadsheetId,
            requestBody: {
                requests: [
                    {
                        autoResizeDimensions: {
                            dimensions: {
                                dimension: "COLUMNS",
                                startIndex: 0,
                                endIndex: 5
                            }
                        }
                    }
                ]
            }
        });
        return res.status(200).json(true);
    } catch (e) {
        return res.status(500).json({
            error: e
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3027));
module.exports = __webpack_exports__;

})();