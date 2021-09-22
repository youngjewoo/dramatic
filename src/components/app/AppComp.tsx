import axios from 'axios';
import React from 'react';
import LinkComp from '../link/LinkComp';
import PageComp from '../page/PageComp';
import SplitComp from '../split/SplitComp';
import './App.css';

function isValidURL(str: string): boolean {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator
  return pattern.test(str);
}

const AppComp: React.FC = () => {
  // const appState = useAppState();
  function pasteHandler(e: React.ClipboardEvent): void {
    const url = e.clipboardData?.getData('text');

    if (url && isValidURL(url)) {
      // tag?[url] 날리고
      axios.get('http://localhost:9000/paste').then((response) => {
        console.log('SUCCESS', response.data);
        // appState.addResource(
        //   stub.url,
        //   new ResourceModel(stub.url, stub.title,
        // stub.image, stub.icon, new Date().toISOString()),
        // );
      });
      // const stub = {
      //   title: 'naver',
      //   description: ' ~~~~ ',
      //   image: 'https://s.pstatic.net/static/ww
      // w/mobile/edit/2016/0705/mobile_212852414260.png',
      //   url: 'https://www.naver.com',
      //   icon: '/favicon.ico?1',
      // };
      // appState.addResource(
      //   stub.url,
      //   new ResourceModel(stub.url, stub.title, stub.image, stub.icon, new Date().toISOString()),
      // );
    } else {
      console.log('INVALID URL : ', url);
    }
  }

  return (
    <div className="app" onPaste={pasteHandler}>
      <LinkComp />
      <div className="app-content">
        <PageComp />
        <SplitComp />
      </div>
    </div>
  );
};

export default AppComp;
