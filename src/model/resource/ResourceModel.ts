import { boundMethod } from 'autobind-decorator';

class ResourceModel {
    private url: string;

    private title: string;

    private img: string;

    private favicon: string;

    constructor() {
        this.url = '';
        this.img = '';
        this.title = '';
        this.favicon = '';
    }
}

export default ResourceModel;
