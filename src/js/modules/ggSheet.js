import PublicGoogleSheetsParser from 'public-google-sheets-parser';

const spreadsheetId = '1ihvhVrZiDMnfld8ZedjSeUdPsaJqc7Bg2vZzYox9JRI';
const parser = new PublicGoogleSheetsParser();
parser.parse(spreadsheetId).then((items) => {
    // items should be [{ a: 1, b: 2, c: 3 },{ a: 4, b: 5, c: 6 },{ a: 7, b: 8, c: 9 }]
    console.log(items);
});
parser.parse(spreadsheetId, 'Sheet2').then((items) => {
    // items should be [{ a: 10, b: 20, c: 30 }, { a: 40, b: 50, c: 60 }, { a: 70, b: 80, c: 90 }]
    console.log(items);
});


export default parser;
