import React from 'react';
import ImageModel from '../../model/document/ImageModel';

interface IImageProps {
  model: ImageModel;
}

const ImageComp: React.FC<IImageProps> = ({ model }) => <img src={model.getUrl()} alt="" />;

export default ImageComp;
