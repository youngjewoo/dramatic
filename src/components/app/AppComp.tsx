import axios from 'axios';
import React from 'react';
import moment from 'moment';
import ResourceModel from '../../model/resource/ResourceModel';
import LinkComp from '../link/LinkComp';
import PageComp from '../page/PageComp';
import SplitComp from '../split/SplitComp';
import useAppState from '../../hooks/useAppState';

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
  const appState = useAppState();

  function pasteHandler(e: React.ClipboardEvent): void {
    const copiedUrl = e.clipboardData?.getData('text');

    if (copiedUrl && isValidURL(copiedUrl) && !appState.isDuplicate(copiedUrl)) {
      // 일단 dummy 모델 추가
      const tempModel = new ResourceModel('TEMP', '...', 'Loading.gif', '', moment().format());
      appState.addResource('TEMP', tempModel);

      // tag?[url] 날리고
      axios.get(`http://localhost:9000/paste?${copiedUrl}`).then((response) => {
        console.log('SUCCESS', response.data);
        const ogData = response.data;
        if (ogData.url === undefined || appState.isDuplicate(copiedUrl)) {
          appState.removeTempModel();
          return;
        }
        // URL
        tempModel.setUrl(copiedUrl);
        appState.replaceTempUrl(copiedUrl);

        // Title
        if (ogData.title) {
          tempModel.setTitle(ogData.title);
        }
        // Image
        if (ogData.image) {
          tempModel.setImg(ogData.image);
        } else if (ogData.image === undefined && ogData.favicon) {
          tempModel.setImg(ogData.favicon);
        } else {
          tempModel.setImg('NoImage.svg');
        }
        // Favicon
        if (ogData.icon) {
          if (ogData.icon.slice(0, 4) === 'http') {
            tempModel.setFavicon(ogData.icon);
          } else {
            tempModel.setFavicon(`${ogData.url}${ogData.icon}`);
          }
        }
        console.log(tempModel);
      });
    } else {
      console.log('INVALID URL : ', copiedUrl);
    }
  }

  return (
    <div className="app" onPaste={pasteHandler}>
      <LinkComp />
      <div className="app-content">
        <PageComp />
        {appState.isSplitOn() && <SplitComp />}
      </div>
    </div>
  );
};

export default AppComp;
