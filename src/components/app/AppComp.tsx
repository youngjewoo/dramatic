import React from 'react';
import LinkComp from '../link/LinkComp';
import PageComp from '../page/PageComp';
import SplitComp from '../split/SplitComp';

import './App.css';

// function isValidURL(str: string): boolean {
//   var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
//     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
//     '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
//     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//     '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//     '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
//   return pattern.test(str);
// }

function pasteHandler(e: React.ClipboardEvent): void {
  const url = e.clipboardData?.getData('text');
  fetch(url).then((response) => {
    console.log(response);
  });
  // if (url && isValidURL(url)) {
  //   run({ url }).then((data) => {
  //     const { error, result } = data;
  //     if (!error) {
  //       console.log(result);
  //     }

  //   });
  // }
}

const AppComp: React.FC = () => (
  <div className="app" onPaste={pasteHandler}>
    <LinkComp />
    <div className="app-content">
      <PageComp />
      <SplitComp />
    </div>
  </div>
);

export default AppComp;
