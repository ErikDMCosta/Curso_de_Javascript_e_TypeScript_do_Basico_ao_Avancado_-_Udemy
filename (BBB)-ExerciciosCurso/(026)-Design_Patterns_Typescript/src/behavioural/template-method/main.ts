import { resolve } from 'path';
import { CustumerDataParseTxt } from './customer-data-parser-txt';
import { CustumerDataParseJson } from './customer-data-parser-json';

async function run() {
  const filePathTxt = resolve(__dirname, 'files', 'customer.txt');
  // console.log(filePathTxt);
  const customerDataParserTxt = new CustumerDataParseTxt(filePathTxt);
  await customerDataParserTxt.fixCustumerData();
  console.log(customerDataParserTxt.customerData);

  console.log('----------------------------------');

  const filePathJson = resolve(__dirname, 'files', 'customer.json');
  // console.log(filePathJson);
  const customerDataParserJson = new CustumerDataParseJson(filePathJson);
  await customerDataParserJson.fixCustumerData();
  console.log(customerDataParserJson.customerData);
}

run()
  .then(() => {
    console.log('Customer data fixed successfully.');
  })
  .catch((error) => {
    console.error('Error fixing customer data:', error);
  });
