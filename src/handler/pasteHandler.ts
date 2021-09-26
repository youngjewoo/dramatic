import axios from 'axios';
import moment from 'moment';
import AppStateModel from '../model/app/AppStateModel';
import ResourceModel from '../model/resource/ResourceModel';

export default function fetchResource(
  targetUrl: string,
  appState: AppStateModel,
  isSectionUpdate: boolean = false,
): void {
  if (targetUrl && !appState.isDuplicate(targetUrl)) {
    // 일단 dummy 모델 추가
    const tempModel = new ResourceModel(targetUrl, '...', 'Loading.gif', '', moment().format());
    appState.addResource(targetUrl, tempModel);

    // tag?[url] 날리고
    axios
      .get(`http://localhost:9000/paste?${targetUrl}`)
      .then((response) => {
        const ogData = response.data;

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
        if (isSectionUpdate) {
          appState.addVisible(tempModel);
        }
      })
      .catch(() => {
        appState.removeSectionViewModel(tempModel);
        tempModel.setImg('NoImage.svg');
        tempModel.setTitle('404 Not Found');
      });
  }
}
