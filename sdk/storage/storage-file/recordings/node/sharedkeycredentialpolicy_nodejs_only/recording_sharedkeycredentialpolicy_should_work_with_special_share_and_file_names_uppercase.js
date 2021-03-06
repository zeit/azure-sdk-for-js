let nock = require('nock');

module.exports.testInfo = {"Dir empty":"Dir empty156775332817209736","Upper_another":"Upper_another156775332866308360"}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/1share-with-dash156775332696806178/Dir%20empty156775332817209736')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Fri, 06 Sep 2019 07:02:08 GMT',
  'ETag',
  '"0x8D73298222228C9"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '6d15a0e4-701a-006d-0880-6443c8000000',
  'x-ms-client-request-id',
  '329b698d-aaa4-4073-aa71-8018a9c9c706',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-06T07:02:08.5296329Z',
  'x-ms-file-last-write-time',
  '2019-09-06T07:02:08.5296329Z',
  'x-ms-file-creation-time',
  '2019-09-06T07:02:08.5296329Z',
  'x-ms-file-permission-key',
  '1237041589013461953*8787082347076103240',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835163608398430208',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Fri, 06 Sep 2019 07:02:07 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/1share-with-dash156775332696806178/Dir%20empty156775332817209736/Upper_another156775332866308360')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Fri, 06 Sep 2019 07:02:08 GMT',
  'ETag',
  '"0x8D732982260A08D"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '6f5bdb6e-401a-00e0-0280-64741a000000',
  'x-ms-client-request-id',
  'a5aa063c-78fe-4df8-8209-1c3ca768f93e',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-06T07:02:08.9390221Z',
  'x-ms-file-last-write-time',
  '2019-09-06T07:02:08.9390221Z',
  'x-ms-file-creation-time',
  '2019-09-06T07:02:08.9390221Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835075647468208128',
  'x-ms-file-parent-id',
  '13835163608398430208',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Fri, 06 Sep 2019 07:02:08 GMT',
  'Connection',
  'close' ]);

