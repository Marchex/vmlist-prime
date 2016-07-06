import {Component,OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer,TreeTable,TreeNode} from 'primeng/primeng';
import {NodeService} from './kvmhosts/kvmhosttreeservice';


@Component({
	templateUrl: 'app/kvmhosttree.component.html',
	selector: 'my-app',
    directives: [InputText,DataTable,Button,Dialog,Column,Header,Footer,TreeTable],
	providers: [HTTP_PROVIDERS,NodeService]
})
export class KvmHostTreeComponent implements OnInit {

    files: TreeNode[];
    cols:  any[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFileSystem().then(files => this.files = files);

        this.cols = [
            {field: 'name', header: 'Name'},
            {field: 'Name', header: 'Name2'},
            {field: 'size', header: 'Size'},
            {field: 'type', header: 'Type'}
        ];

    }

}
